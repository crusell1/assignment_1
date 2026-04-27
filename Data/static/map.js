// Skapar en leaflet karta som placeras inuti div:en för kartan
map = L.map('mapDiv', {
  // Anger startkoordinaterna och zoomen
  center: [60.482391, 15.43367],
  zoom: 13,
});

// Hämtar en kartbild och sätter den som bakgrund på hemsidan
lyrOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(lyrOSM);

// Aktiverar sidopanelen och lägger till den som en kontroll
var sidebar = L.control.sidebar('sidebar', { position: 'left' });
map.addControl(sidebar);
