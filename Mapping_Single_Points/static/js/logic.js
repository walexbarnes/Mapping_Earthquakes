console.log('working')

/*
We’re assigning the variable map to the JavaScript class “L,” an acronym for Leaflet, and we’ll instantiate the map object with the given string 'mapid'.
The mapid will reference the id tag in our <div> element on the index.html file.
The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of “4” on a scale 0–18.
*/
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

//let marker = L.marker([34.0522, -118.2437]).addTo(map);

L.circleMarker([34.0522, -118.2437], {
	radius: 300,
	color:'black',
	fillColor:'#ffffa1'
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
