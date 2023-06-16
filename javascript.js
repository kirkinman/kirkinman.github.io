var allowables=[
	"A - Attachments readers walk into.",
	"L - Look at what you is in the scene.",
	"L - Link scenes with voice breakdowns.",
	"O - Organizing scenes with settings by voice, asking.",
	"W - What would I want to see after this?",
	"A - Analyze with geyser sprays of imagination.",
	"B - Bring closure to friction between characters.",
	"L - Logical reasons for the friction?",
	"E - Edit voice by first marking them!!!",
	"S - Select a you proximate to the character.",
]

var styles=[
	"updater",
	"updater2",
	"updater3",
	"updater4",
]

var confirms=[
	"confirm two",
	"confirm three",
	"confirm four",
	"done!",
]

var lst = [];
//var new =5;
var data_number=0;
var data_updater=0;

//every time it loops it adds one to data_number. if it loops 7 times you only see the 7th time it adds a number

//if you .push to the beginning you dont need a data number but it would be backwards

function next(){
	document.getElementsByTagName("li")[data_number].innerHTML=allowables[data_number];
	lst.push(allowables[data_number]);
	document.getElementById("msg").textContent=lst[data_number];
//	document.querySelector("msg").classList.add("updater");
	data_number+=1;
//	for (i=0; i<1; i++){
//		data_number+=1;
////		used to update a specific list item:
////		howevs: as noted before it adds one each time it loops so it doesnt go here
//	
//	}
}
function confirm_one(){
	var one = document.getElementById("msg").classList.add(styles[data_updater]);
//	below is impossible in python:
	var two = document.getElementById("change_one").innerHTML=confirms[data_updater];
	data_updater += 1;
	if (data_updater > 4){
		var two = document.getElementById("change_one").innerHTML="Stop it!";
	}
	document.getElementsByTagName("li").innerHTML="done";
	document.getElementById("msg").textContent= data_updater + " Confirmed! Great Job!";
	
	
}
