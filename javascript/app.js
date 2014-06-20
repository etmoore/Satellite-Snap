var map = L.map('map').setView([39.916015, -104.984253], 10);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/etmoore.iico2pe3/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

var popup = L.popup();

function onMapClick(e) {
    var coordinates = e.latlng;
    popup
        .setLatLng(coordinates)
        .setContent(getSatImage(coordinates))
        .openOn(map);
}

function getSatImage(coordinates) {
  return '<img style="width:300px;height:300px;" src="http://dev1.tomnod.com/chip_api/chip/lat/' + coordinates.lat + '/lng/' + coordinates.lng + '"/>'
}

map.on('click', onMapClick);