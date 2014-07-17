var error = document.getElementById("error");
var getTask = document.getElementById("todo");
var getSeconds = document.form1.second.value;

var storage = localStorage;

var isNumber = function(a){
	return !Number.isNaN(a);
};

var showError = function(){
	error.setAttribute("class", "");
};

var hideError = function(){
	error.setAttribute("class", "hidden");
};

function loadText(){
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

var isReady = function(a){
	return isNumber(a);
};
	
//各箱に値が入っていることを確認し、はいってたら画面遷移、はいってなかったらエラー
//jsのみで画面遷移はできるっぽい。
function checkDetails(){
	var a = getSeconds.value;
	hideError();
	if(!isReady(a)){
		showError();
	} else {
		loadText();
		location.href="menhera.html";
	}

//授業でつかったコードを使用して、数値が代入されないと次に進まないようにする。
}

var initApp = function(){
	var checkButton = document.querySelector("#checkButton");

	checkButton.addEventListener("click", checkDetails);
};

initApp();




