const ZOOM = 18;
const SIZE = {
  WIDTH: 38,
  HEIGHT: 50
};

const MAP = {
  LAT: 59.9684046045774,
  LNG: 30.31753421574238
};
const PIN = {
  LAT: 59.96834017002364,
  LNG: 30.317673696510635
};
const mapSelector = document.querySelector(".map");

mapSelector.classList.remove("map-nojs");

const map = L.map('map')
  .on('load', () => { })
  .setView({
    lat: MAP.LAT,
    lng: MAP.LNG
  }, ZOOM);


const mapPinIcon = L.icon({
  iconUrl: 'img/location.png',
  iconSize: [SIZE.WIDTH, SIZE.HEIGHT],
  iconAnchor: [SIZE.WIDTH / 2, SIZE.HEIGHT],
});

const mapPinMarker = L.marker({
  lat: PIN.LAT,
  lng: PIN.LNG
}, {
  draggable: false,
  icon: mapPinIcon,
},);

const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

mapPinMarker.addTo(map);
