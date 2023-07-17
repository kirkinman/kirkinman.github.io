$("h1").click(function() {
	$("h1").text("lava blast!");
	$("h1").css("color", "red");
	
});

$("button").click(function() {
	$("h1").text("Sample: Kick 2 It");
	$("h1").css("color", "blue");
	var song1 = new Audio("git_r_dun.mp3");
	song1.play();
	
});
