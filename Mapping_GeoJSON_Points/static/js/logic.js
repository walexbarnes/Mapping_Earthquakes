console.log('working')
// Get data from cities.js
let cityData = cities;
/*
We’re assigning the variable map to the JavaScript class “L,” an acronym for Leaflet, and we’ll instantiate the map object with the given string 'mapid'.
The mapid will reference the id tag in our <div> element on the index.html file.
The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of “4” on a scale 0–18.
*/
let map = L.map('mapid').setView([37.6213, -122.3790], 5);


// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};



/* Our options to add data to a marker are to use the pointToLayer or onEachFeature callback functions. With either of these functions, we can add data to a map from each GeoJSON object. The major difference between the two functions is that the pointToLayer callback function adds markers to a map, whereas the onEachFeature callback function allows you to add styling and bind data to a popup marker.

Let’s look at these two functions more closely.

For the pointToLayer callback function, the basic syntax for adding functionality to a marker follows:

L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
      return L.marker(latlng);
     }
});
Let’s break down what is happening in the L.geoJSON() layer:

We add two arguments: the data and the pointToLayerc allback function.
The data will be our sanFranAirport data.
For the pointToLayer callback function, we are first going to call a function() where we pass each GeoJSON feature as feature, and its latitude and longitude as latlng.
Then we add a marker for each feature with a latitude and longitude in the pointToLayer callback function argument by using return L.marker(latlng).

Even though we have a marker on the previous map, let’s edit our logic.js file to add a marker using the pointToLayer function and add data to a popup marker.

First, let’s edit the logic.js file to add the pointToLayer callback function to the L.geoJSON() layer. To better understand what is passed with the feature argument in the function(), we will add feature in the console.log() function. Edit your L.geoJSON() layer code to look like the following:

L.geoJson(sanFranAirport, {
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
      console.log(feature);
      return L.marker(latlng);
    }

  }).addTo(map);

To add a popup marker, we need to use the bindPopup() method to the pointToLayer callback function. This will add a popup marker for each object in our GeoJSON data even though we only have one object in our data, SFO.

Let’s add the city to the popup marker. In our logic.js file, after the return L.marker(latlng) in our L.geoJSON() layer, add the following code on the next line:

.bindPopup("<h2>" + feature.properties.city + "</h2>")
Using the dot notation, we can traverse through the JSON object to get the city by using feature.properties.city. Now, your logic.js file with L.geoJSON() layer should look like the following:
*/
L.geoJson(sanFranAirport, {
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
      console.log(feature);
	  return L.marker(latlng)
	  .bindPopup("<h2>" + feature.properties.city + "</h2>");
    }

  }).addTo(map);


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
// We create the tile layer that will be the background of our map.
// We create the tile layer that will be the background of our map.
// We create the tile layer that will be the background of our map.
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// Then we add our 'graymap' tile layer to the map.
console.log(streets)
