document.getElementById("t5").addEventListener("click", function () {
  map.flyTo([59.3609882, 18.0576769], 10);
});

var fuel = L.geoJson(fuel);
fuel.addTo(map);
