// När man tycker på "Task 4"-knappen så flyger man till Kupolen
document.getElementById('t4').addEventListener('click', function () {
  map.flyTo([60.484205305269505, 15.417914690137755], 17);
});

// Skapar variabler som håller bildadressen och dess koordinater
var imageUrl = '/static/img/Kupolen.png',
  imageBounds = [    
    [60.484919661176754, 15.416398015927456],
    [60.48534513378079, 15.419072906337211],
    [60.4835629493079, 15.420188443129414],
    [60.48332010408592, 15.4177556864354],
  ];
// Skapar en Leaflet imageOverlay och lägger till den på kartan
L.imageOverlay(imageUrl, imageBounds).addTo(map);
