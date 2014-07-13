

var storage = localStorage;

function textin(){
	if (document.getElementById){
		  storage.setItem("key",document.form1.text1.value);
		 /* document.getElementById("output").innerHTML=document.form1.text1.value;　*/
    console.log(document.form1.text1.value); 		  
	}
}

function textout(){
	document.getElementById("output").innerHTML=storage.getItem("key");
}
