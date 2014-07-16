var error = document.querySelector("#error");
var getTask = document.querySelector("#todo");
var getSeconds = document.querySelector("#secondID");

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

/*
var isReady = function(operator, a, b){
	return isDivision(operator, a, b) || isModulus(operator, a, b) ||
	isMultiplication(operator, a, b) || isSubtraction(operator, a, b) || isAddition(operator, a, b);
};
*/
	
//各箱に値が入っていることを確認し、はいってたら画面遷移、はいってなかったらエラー
//jsのみで画面遷移はできるっぽい。
function checkDetails(){

	hideError();
	if(getTask.value != null || getSeconds.value != null){
		loadText();
		location.href="menhera.html";
	} else {
		showError();
	}

//授業でつかったコードを使用して、数値が代入されないと次に進まないようにする。
}




//登録ボタンでcheckDetailsを呼び出す。
//もし時間とやる事に値が入っているのが確認できたら(if(値 != null))画面遷移させる
//値が入っていなかったらエラー




