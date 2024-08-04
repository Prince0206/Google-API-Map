function initMap() {
  var location = { lat: 5.534, lng: -0.42376 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
