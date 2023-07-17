$("h1").click(function() {
	$("h1").text("lava blast!");
	$("h1").css("color", "red");
});

$("button").click(function() {
	var nums = this.innerHTML;
	var song1 = new Audio(nums+".mp3");
	song1.play();
	
	$("h1").text("Sample: High Horse");
	$("h1").css("color", "blue");	
});
