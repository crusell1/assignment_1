map = L.map('mapDiv', {
  center: [60.482391, 15.43367],
  zoom: 13,
});

lyrOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(lyrOSM);
