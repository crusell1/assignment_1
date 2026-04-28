// När man trycker på "Task 2"-knappen så flyger man till Skellefteå
document.getElementById('t2').addEventListener('click', function () {
  map.flyTo([64.75147094750132, 20.953463372608912], 13);
});

// Skapar en leaflet marker och lägger till den på kartan
var bonnstan = L.marker([64.75140072628723, 20.929323271618994]).addTo(map);
// När markens klickas på så visas en sidopanel med information om platsen
bonnstan.on('click', function () {
  sidebar.setContent(
    "<h1>Bonnstan</h1><p>Bonnstan är en historisk stadsdel i Skellefteå, Sverige. Det är en av de äldsta delarna av staden och har bevarat sin charmiga atmosfär med trähus och smala gator. Bonnstan är känd för sin rika historia och kulturella betydelse, och det är en populär plats för både lokalbefolkningen och besökare att utforska.</p><img src='static/img/bonnstan.jpg' width='400px'>",
  );
  sidebar.show();
});

// Följande kod fungerar på samma sätt som överstående kod

var skelleftealasarett = L.marker([
  64.75581175672313, 20.943621132571465,
]).addTo(map);
skelleftealasarett.on('click', function () {
  sidebar.setContent(
    "<h1>Skellefteå lasarett</h1><p>Skellefteå lasarett är ett sjukhus i Skellefteå, Sverige. Det är en del av Västerbottens läns landsting och erbjuder vård inom flera olika specialiteter.</p><img src='static/img/skelleftea_lasarett.jpg' width='400px'>",
  );
  sidebar.show();
});

var anderstorpgymnasiet = L.marker([
  64.74116804530777, 20.969041644522484,
]).addTo(map);
anderstorpgymnasiet.on('click', function () {
  sidebar.setContent(
    "<h1>Anderstorpsgymnasiet</h1><p>Anderstorpsgymnasiet är en gymnasieskola i Skellefteå, Sverige. Skolan erbjuder utbildningar inom flera olika program, inklusive teknik, ekonomi, samhällsvetenskap och naturvetenskap.</p><img src='static/img/anderstorpskolan.jpg' width='400px'>",
  );
  sidebar.show();
});

var sarakulturhus = L.marker([64.75243131945044, 20.954218540386652]).addTo(
  map,
);
sarakulturhus.on('click', function () {
  sidebar.setContent(
    "<h1>Sarakulturhus</h1><p>Sarakulturhus är en kulturinstitution i Skellefteå, Sverige. Det är en plats där olika kulturella evenemang och aktiviteter äger rum, inklusive konserter, teaterföreställningar, utställningar och workshops.</p><img src='static/img/sarakulturhus.jpg' width='400px'>",
  );
  sidebar.show();
});

var nordana = L.marker([64.74898752885942, 20.940727029087714]).addTo(map);
nordana.on('click', function () {
  sidebar.setContent(
    "<h1>Nordanå</h1><p>Nordanå är en byggnad i Skellefteå, Sverige. Det är en modern kontorsbyggnad som rymmer flera företag och organisationer. Nordanå är känd för sin unika arkitektur och sin centrala placering i staden.</p><img src='static/img/nordana.jpg' width='400px'>",
  );
  sidebar.show();
});
