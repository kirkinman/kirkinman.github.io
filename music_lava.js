var songs = [
	"igitrdone.mp3",
	"kick to beats.mp3",
]

$("h1").click(function() {
	$("h1").text("lava blast!");
	$("h1").css("color", "red");
});

$("button").click(function() {
	alert(this.value);
	var nums = this.innerHTML;
	var song1 = new Audio(songs[nums]);
	song1.play();
	
	$("h1").text("Sample: High Horse");
	$("h1").css("color", "blue");	
});
