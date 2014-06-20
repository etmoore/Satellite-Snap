var app = {
  init: function() {
    //Load the Google map
    google.maps.event.addDomListener(window, 'load', app.loadMap);

    //Listen for click event
    // $('#map-canvas').on('click', function(event){
    //   placeMarker(event.latLng);
    // });
      // get coordinates of click
      // drop marker where user clicks
      // get satellite image from digital globe api
      // add image as background to satellite div
  },

  loadMap: function() {
    var mapOptions = {
      center: new google.maps.LatLng(39.916015, -104.984253),
      zoom: 9
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    google.maps.event.addListener(map, 'click', function(e) {
      app.placeMarker(e.latLng, map);
    });
  },

  placeMarker: function(position, map) {
    var marker = new google.maps.Marker({
      position: position,
      map: map
    });
    map.panTo(position);
  }
};

$(function() {
  app.init();
})