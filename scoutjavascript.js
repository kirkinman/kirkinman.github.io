var scouts=[
	"S - select items with querySelector",
	".C - .classList with .css uses .add, .remove and .toggle",
	"O - Objects in js class constructors work the same as other languages",
	"U - Use this. in js classes!",
	"T - The date object is new Date();",
	"S - set Attribute takes two: (property-new_value)",
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


function check_it(num){
	
	document.getElementById("msg").textContent=scouts[num];
}

function clear_all() {
	location.reload()
}


function next(){
	
	document.getElementsByTagName("li")[data_number].innerHTML=scouts[data_number];
	lst.push(scouts[data_number]);
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
	document.getElementById("msg").textContent=data_updater + " confirmed";
	
	
}
