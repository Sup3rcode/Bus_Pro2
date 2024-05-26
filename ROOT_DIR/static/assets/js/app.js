function initMap() {
  let map;
  const API = "AIzaSyCClagirEbcFsHwY7YipA6CeqEPyT7ciRo";

  const init_center = { lat: 24.518666007864717, lng: 44.40283962795828 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: init_center,
    zoom: 13.5,
    disableDefaultUI: true
  });
  bounds = new google.maps.LatLngBounds();
  // URL of the API that returns location data
  var apiUrl = "/data";

  // Fetch data using Axios
  axios
    .get(apiUrl)
    .then(function(response) {
      // Handle success
      var locations = response.data;
      locations.forEach(function(location) {
        addMarker(
          {
            coords: { lat: location.lat, lng: location.longitude },
            content: `<h1>${location.name}</h1>`
          },
          map
        );
      });
    })
    .catch(function(error) {
      // Handle error
      console.log("Error fetching data: ", error);
    });
}

