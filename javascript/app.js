function loadMap() {
  var mapOptions = {
    center: new google.maps.LatLng(39.916015, -104.984253),
    zoom: 9
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}

google.maps.event.addDomListener(window, 'load', loadMap);

var app = {
  init: function() {

  }
};

$(function() {
  app.init();
})