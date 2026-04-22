document.getElementById('t3').addEventListener('click', function () {
  map.flyTo([59.857892, 17.638964], 11);

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

var supermarketLayer = L.geoJSON(supermarket);

var supermarketBuffer = turf.buffer(supermarket, 1, {
  units: 'kilometers',
});

let overlappingFeatures = [];
let individualFeatures = [];

turf.featureEach(supermarketBuffer, function (currentFeature, currentIndex) {
  let isOverlapping = false;

  turf.featureEach(supermarketBuffer, function (compareFeature, compareIndex) {
    if (currentIndex === compareIndex) return;

    if (turf.booleanIntersects(currentFeature, compareFeature)) {
      isOverlapping = true;
    }
  });

  if (isOverlapping) {
    overlappingFeatures.push(currentFeature);
  } else {
    individualFeatures.push(currentFeature);
  }
});

let overlappingCollection = turf.featureCollection(overlappingFeatures);
let individualCollection = turf.featureCollection(individualFeatures);

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

supermarketLayer.eachLayer(function (layer) {
  layer.on('click', function () {
    var popupContent = '<h3>' + layer.feature.properties.name + '</h3>';
    layer.bindPopup(popupContent).openPopup();
  });
});
