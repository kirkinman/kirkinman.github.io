$("h1").click(function() {
	$("h1").text("lava blast!");
	$("h1").css("color", "red");
	
});

$("button").click(function() {
	$("h1").text("Sample: Kicks");
	$("h1").css("color", "blue");
	var song1 = new Audio("igitrdone.mp3");
	song1.play();
	
});
