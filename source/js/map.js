const MAP_ZOOM = 19;
const SIZE_PIN = {
  WIDTH: 38,
  HEIGHT: 50
};
const IMAGE_PIN = 'img/location.png';
const MAP_COORDINATES = {
  LAT: 59.9684046045774,
  LNG: 30.31753421574238
};
const PIN_COORDINATES = {
  LAT: 59.96834017002364,
  LNG: 30.317673696510635
};
const mapSelector = document.querySelector(".map");

mapSelector.classList.remove("map-nojs");

const map = L.map('map')
  .on('load', () => { })
  .setView({
    lat: MAP_COORDINATES.LAT,
    lng: MAP_COORDINATES.LNG
  },
    MAP_ZOOM);


const mapPinIcon = L.icon({
  iconUrl: IMAGE_PIN,
  iconSize: [SIZE_PIN.WIDTH, SIZE_PIN.HEIGHT],
  iconAnchor: [SIZE_PIN.WIDTH / 2, SIZE_PIN.HEIGHT],
});

const mapPinMarker = L.marker({
  lat: PIN_COORDINATES.LAT,
  lng: PIN_COORDINATES.LNG
}, {
  draggable: false,
  icon: mapPinIcon,
},);

const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

mapPinMarker.addTo(map);
