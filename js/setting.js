var storage = localStorage;

function textin(){
	if (document.getElementById){
		  storage.setItem("aim",document.form1.text1.value);
		  storage.setItem("hourInterval", document.form1.hour.value);
		  storage.setItem("minutesInterval", document.form1.minute.value);
		  storage.setItem("secondInterval", document.form1.second.value);


	}
}

function textout(){
	document.getElementById("output").innerHTML=storage.getItem("aim");
	
	startTimer();
}