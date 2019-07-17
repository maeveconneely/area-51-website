var ourLoc;
var view;
var map;

// Step 3: We should initalize our variables!
function init() {
	// Initalize things here
	ourLoc = ol.proj.fromLonLat([41.043316, 28.862457]);

	view = new ol.View({
		center: ourLoc,
		zoom: 6 // Students can play around with the starting zoom.
	});

	map = new ol.Map({
		target: 'map', // The "Target" is our <div> name.
		layers: [
		  new ol.layer.Tile({
		    source: new ol.source.OSM() // Explain: this is a required variable.
		  })
		  // Explain: Open Layer offers different types of layers. Layers are like
		  // different brushes used to make the same image. They look different.
		  // Some might take more time than others.
		],
		// Note from the View Animation website:
		// Improve user experience by loading tiles while animating. Will make
		// animations stutter on mobile or slow devices.
		loadTilesWhileAnimating: true,
		view: view
	});
}

// Step 4: We can run the init function when the window loads.
window.onload = init;


var index = 0
var images = ["aliens.png", "battle_plan.jpg"]

function weOutside() {
  index = index + 1;
  if (index == images.length) {
    index = 0;
  }
  var image1 = document.getElementById("aliens");
  image1.src = images[index]
}

function submit() {
  document.getElementById("result").innerHTML = document.getElementById("b").value;
}
