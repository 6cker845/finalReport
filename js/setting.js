var storage = localStorage;

function textin(){
	if (document.getElementById){
		  storage.setItem("aim",document.form1.text1.value);
		  storage.setItem("timeInterval", document.form1.time1.value);
		 /* document.getElementById("output").innerHTML=document.form1.text1.value;　*/
    console.log(document.form1.text1.value); 	
    console.log(document.form1.time1.value); 	
	}
}

function textout(){
	document.getElementById("output").innerHTML=storage.getItem("aim");
	
	startTimer();
}