var error = document.getElementById("error");
var getTask = document.getElementById("todo");
/* var getSeconds = document.form1.second.value; */

var storage = localStorage;

/*
var isNumber = function(a){
	return !Number.isNaN(a);
};

var showError = function(){
	error.setAttribute("class", "");
};

var hideError = function(){
	error.setAttribute("class", "hidden");
};
*/

function loadText(){
	var inputOperator = document.getElementById("operator");
	
	if (document.getElementById){
		  storage.setItem("aim",document.form1.text1.value);
		  
		  storage.setItem("startHour", document.form1.startHour.value);
		  storage.setItem("startMinute", document.form1.startMinute.value);
		  
		  storage.setItem("hourInterval", document.form1.hour.value);
		  storage.setItem("minutesInterval", document.form1.minute.value);
		  storage.setItem("secondInterval", document.form1.second.value);
		  storage.setItem("operator", document.selectOperator.value);
	}
}

function textout(){
	document.getElementById("output").innerHTML=storage.getItem("aim");
	getDate();
}

/*
function loadOption(){
	var i=0;
	while(i<=23){
		document.getElementById("hourOption").innerHTML=document.write('<option value="' + i + '">' + i + '歳</option>');
	}
}
*/

/*
var isReady = function(a){
	return isNumber(a);
};
	
function checkDetails(){
	var a = getSeconds.value;
	hideError();
	if(!isReady(a)){
		showError();
	} else {
		loadText();
		location.href="menhera.html";
	}
}

var initApp = function(){
	var checkButton = document.querySelector("#checkButton");

	checkButton.addEventListener("click", checkDetails);
};

initApp();
*/