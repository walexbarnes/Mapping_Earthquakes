console.log('working')
// Get data from cities.js
let airportData = "https://raw.githubusercontent.com/walexbarnes/Mapping_Earthquakes/master/majorAirports.json";
console.log('incoming')
// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data,{
	  onEachFeature:function(feature,layer){
		  console.log(layer)
		  layer.bindPopup("<h2>Airport Code:" + feature.properties.faa + "</h2> <hr> <h3>Airport Name: " + feature.properties.name + "</h3>")
	  }
  }).addTo(map);
});


/*
We’re assigning the variable map to the JavaScript class “L,” an acronym for Leaflet, and we’ll instantiate the map object with the given string 'mapid'.
The mapid will reference the id tag in our <div> element on the index.html file.
The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of “4” on a scale 0–18.
*/
// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);
/*
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
	console.log(city)
	L.circleMarker(city.location,{
		radius:city.population/100000
	})
	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});
*/

/*
Let’s break down what's happening in this code block:

We assign the streets variable to the tileLayer() method, as shown in the Quick Start Guide’s “Setting up the map” section. Leaflet doesn't provide a tile layer. Instead, it offers various tile layer APIs.
The following URLs appear in the parentheses of our tileLayer() method:
The API URL with a reference to the accessToken
The OpenStreetMap URL inside the curly braces of our tileLayer() method
We add the maxZoom attribute and assign it a value of 18.
We add the id attribute and assign it mapbox.streets, which will show the streets on the map.
We add the accessToken attribute and assign it the value of our API_KEY.
Finally, we call the addTo() function with our map object, map on our graymap object tile layer. The addTo() function will add the graymap object tile layer to our let map.
To change the map’s style, change the map id using the list of Mapbox ids below:

mapbox.streets
mapbox.light
mapbox.dark
mapbox.satellite
mapbox.streets-satellite
mapbox.wheatpaste
mapbox.streets-basic
mapbox.comic
mapbox.outdoors
mapbox.run-bike-hike
mapbox.pirates
mapbox.emerald
mapbox.high-contrast
*/

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
	Street: streets,
	Dark: dark
  };

  let map = L.map('mapid', {
	center: [30, 30],
	zoom: 2,
	layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
/*
When creating the Layers Control, the argument passed, baseMaps, is the base layer object, which will allow the two different map styles to be shown on the index.html file. The Layers Control will look like the following before it is clicked to show the Street and Dark options:
*/
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// Then we add our 'graymap' tile layer to the map.
console.log(streets)
