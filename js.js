var bench = ["195"]
var pulldown = ["180"]
var shlders = ["125"]
var squats = ["180"]
var deadlift = ["180"]
var abs = ["70"]

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



