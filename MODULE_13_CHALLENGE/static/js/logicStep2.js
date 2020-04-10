console.log('working')
// Get data from cities.js
let torontoHood = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
console.log('incoming')


let myStyle = {
	color:'#ffffa1',
	weight: 2
}

// Grabbing our GeoJSON data.


d3.json(torontoHood).then(function(data) {

	// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
/*
In the styleInfo() function, we passed the argument feature to reference each object’s features.
The opacity and fillOpacity are set at 1, the stroke is “true,” and the weight is 0.5.
The fillColor is light orange, and the color is "#000000" (black).
The getRadius() function retrieves the earthquake’s magnitude. Next, we’ll create the getRadius() function to calculate the radius of the circle from the magnitude.
*/
function styleInfo(feature) {
	return {
	  opacity: 1,
	  fillOpacity: 1,
	  fillColor: getColor(feature.properties.mag),
	  color: "#000000",
	  radius: getRadius(feature.properties.mag),
	  stroke: true,
	  weight: 0.5
	};
  }
// This function determines the color of the circle based on the magnitude of the earthquake.
function getColor(magnitude) {
	if (magnitude > 5) {
	  return "#ea2c2c";
	}
	if (magnitude > 4) {
	  return "#ea822c";
	}
	if (magnitude > 3) {
	  return "#ee9c00";
	}
	if (magnitude > 2) {
	  return "#eecc00";
	}
	if (magnitude > 1) {
	  return "#d4ee00";
	}
	return "#98ee00";
  }
  // This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
/*
In the getRadius() function, we’ll pass the magnitude argument that will reference the feature.properties.mag in the styleInfo() function. Then we’ll use a conditional statement that sets the magnitude to 1 if the magnitude of the earthquake in the JSON file is 0 so that the earthquake is plotted on the map. If the magnitude is greater than 0, then the magnitude is multiplied by 4.
*/
function getRadius(magnitude) {
	if (magnitude === 0) {
	  return 1;
	}
	return magnitude * 4;
  }
// Creating a GeoJSON layer with the retrieved data.
// Creating a GeoJSON layer with the retrieved data.
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
        console.log(data);
        return L.circleMarker(latlng);
      },
    // We set the style for each circleMarker using our styleInfo function.
  style: styleInfo,
    // We create a popup for each circleMarker to display the magnitude and
    //  location of the earthquake after the marker has been created and styled.
    onEachFeature: function(feature, layer) {
    layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
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
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
	'Streets': streets,
	'Satellite Streets': satelliteStreets
  };

  let map = L.map('mapid', {
	center: [39.5, -98.5],
	zoom: 3,
	layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
/*
When creating the Layers Control, the argument passed, baseMaps, is the base layer object, which will allow the two different map styles to be shown on the index.html file. The Layers Control will look like the following before it is clicked to show the Street and Dark options:
*/
L.control.layers(baseMaps).addTo(map);

