// När man trycker på "Task 3"-knappen så flyger man till Uppsala
document.getElementById('t3').addEventListener('click', function () {
  map.flyTo([59.857892, 17.638964], 11);

  // Om lagerna redan visas så döljs det, annars visas lagerna
  if (map.hasLayer(supermarketLayer)) {
    map.removeLayer(supermarketLayer);
    map.removeLayer(overlappingLayer);
    map.removeLayer(individualLayer);
  } else {
    supermarketLayer.addTo(map);
    overlappingLayer.addTo(map);
    individualLayer.addTo(map);
  }
});

// Skapar ett leaflet kartlager med datan från supermarket
var supermarketLayer = L.geoJSON(supermarket);

// Skapar en turf buffer runt respektive matbutik med 1 km radie
var supermarketBuffer = turf.buffer(supermarket, 1, {
  units: 'kilometers',
});

/* GEMINI START */
// Skapar två variabler som håller en tom array som sedan ska användas för att
// lagra de matbutiker som överlappar respektive är indivduella
let overlappingFeatures = [];
let individualFeatures = [];

// Loopar igenom varje matbutik
turf.featureEach(supermarketBuffer, function (currentFeature, currentIndex) {
  // Initierar respektive matbutik som att den inte överlappar
  let isOverlapping = false;

  // I varje loop, görs en till loop där den nuvarande matbutiken jämförs med
  // samtliga andra matbutiker
  turf.featureEach(supermarketBuffer, function (compareFeature, compareIndex) {
    // Kontrollerar så att den nuvarande matbutiken inte jämförs med sig själv
    if (currentIndex === compareIndex) return;

    // Om den nuvarande matbutiken i loopen överlappar med en annan matbutik
    if (turf.booleanIntersects(currentFeature, compareFeature)) {
      // Sätts statusen att den överlappar till sant
      isOverlapping = true;
    }
  });

  // Kontrollerar om den nuvarande matbutiken överlappar eller inte
  if (isOverlapping) {
    // Om den överlappar läggs den matbutiken till i arrayen med överlappande
    // matbutiker
    overlappingFeatures.push(currentFeature);
  } else {
    // Annars läggs matbutiken till i arrayen med individuella matbutiker
    individualFeatures.push(currentFeature);
  }
});

// Arrayerna med matbutikerna görs om till Feature Collections eftersom det är
// formatet som leaflet behöver för att rita ut dem
let overlappingCollection = turf.featureCollection(overlappingFeatures);
let individualCollection = turf.featureCollection(individualFeatures);

// Feature Collenctions görs till leaflet kartlager med olika egenskaper
var overlappingLayer = L.geoJSON(overlappingCollection, {
  style: {
    color: 'purple',
    weight: 1,
    fillOpacity: 0.2,
  },
});
var individualLayer = L.geoJSON(individualCollection, {
  style: {
    color: 'yellow',
    weight: 1,
    fillOpacity: 0.6,
  },
});
/* SLUT */

// För varje lager kopplas en popup till en specifik matbutik
supermarketLayer.eachLayer(function (layer) {
  // När matbutiken klickas på så visas namnet på matbutiken direkt
  layer.on('click', function () {
    var popupContent = '<h3>' + layer.feature.properties.name + '</h3>';
    layer.bindPopup(popupContent).openPopup();
  });
});
