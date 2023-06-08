var bench = ["175"]
var pulldown = ["140"]
var shlders = ["115"]
var squats = ["155"]
var deadlift = ["155"]
var abs = ["60"]

function chest(){
	document.getElementsByTagName("li")[0].innerHTML = "monday" + bench;
}
function back(){
	document.getElementsByTagName("li")[0].innerHTML = "tuesday" + pulldown;
}
function legs(){
	document.getElementsByTagName("li")[0].innerHTML = "thursday" + squats;
}
function shoulders(){
	document.getElementsByTagName("li")[0].innerHTML = "friday" + shlders;
}

function abdo(){
	document.getElementsByTagName("li")[0].innerHTML = "monday, wednesday, sat abcoaster " + abs;
}



