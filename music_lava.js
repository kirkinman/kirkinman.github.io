$("h1").click(function() {
	$("h1").text("lava blast!");
	$("h1").css("color", "red");
});

$("img").click(function() {
	alert("music lava")
	
})

$("button").click(function() {
	var song = this.innerHTML;
	var song1 = new Audio(song+".mp3");
	song1.play();
	
	$("h1").text("Sample: "+song);
	$("h1").css("color", "blue");
//	$("img").attr("src" (song"+,mp3")),
		
//	})
});

//##auto make buttons with 

