document.getElementById("t5").addEventListener("click", function () {
  map.flyTo([59.3609882, 18.0576769], 10);

  if (map.hasLayer(fuelCluster)) {
    map.removeLayer(fuelCluster);
  } else {
    fuelCluster.addTo(map);
  }
});

var fuelCluster = L.markerClusterGroup(); // skapa en marker cluster grupp

var fuelLayer = L.geoJSON(fuel); // skapa en geojson layer med datan från fuel.js, så att varje punkt i datan blir en marker på kartan

fuelCluster.addLayer(fuelLayer); // lägg till fuelLayer i fuelCluster, så att alla markrar i fuelLayer kommer att klustras ihop i fuelCluster

fuelLayer.eachLayer(function (layer) {
  // loopar igenom varje lager i fuelLayer
  layer.on("click", function () {
    var popupContent = "<h3>" + layer.feature.properties.name + "</h3>";
    layer.bindPopup(popupContent).openPopup(); // först binder en popup till lagret, och sedan öppnas den direkt när lagret klickas på
  });
});
