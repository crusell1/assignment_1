document.getElementById("t5-1").addEventListener("click", function () {
  map.flyTo([59.3609882, 18.0576769], 10);

  if (map.hasLayer(fueldonutCluster)) {
    // samma logik som task 5
    map.removeLayer(fueldonutCluster);
  } else {
    fueldonutCluster.addTo(map);
  }
});

// skapa en donut cluster grupp
var fueldonutCluster = L.DonutCluster(
  //inställningar
  {
    chunkedLoading: true,
  },
  {
    // 'key' talar om för pluginet vilken egenskap i din data som ska användas för gruppering.
    key: "brand",

    // 'arcColorDict' definierar färgerna för varje kategori.
    arcColorDict: {
      Shell: "#FECD00",
      "Circle K": "#EE342A",
      OKQ8: "#2C3B8E",
      St1: "#FEC700",
      ST1: "#FEC700",
      Preem: "#086746",
      Ingo: "#FF7408",
      Tanka: "#19438F",
      IDS: "#FEFEFE",
      Övriga: "#808080",
    },
  },
);

var fuelDonutLayer = L.geoJSON(fuel); // skapa en geojson layer med datan från fuel.js, så att varje punkt i datan blir en marker på kartan

fuelDonutLayer.eachLayer(function (layer) {
  // loopar igenom varje lager i fuelLayer
  layer.on("click", function () {
    var popupContent = "<h3>" + layer.feature.properties.name + "</h3>";
    layer.bindPopup(popupContent).openPopup(); // först binder vi en popup till lagret, och sedan öppnas den direkt när lagret klickas på
  });
});

fueldonutCluster.addLayer(fuelDonutLayer);
