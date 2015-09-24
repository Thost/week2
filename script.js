var map = L.map('map-container');

map.setView([44.971724, -93.243239], 16);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			maxZoom: 18,
		}).addTo(map);


function getGeoJSON() {
 $.getJSON('https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson', function(data){
    new L.GeoJSON(data).addTo(map);
  });
}  

var boxclick = function() {
	alert("Don't click the red box");
};
$(".red.box").click(boxclick);

function timedate() {
  alert(new Date());
}
