
function output(){
 var outputArea = document.getElementById("#outputArea").value;
 outputArea.innerHTML = todo + "したー？" ;
}

var comments = new Array(
		"", "今日はちゃんとやった？", "本当にやったのー？", "ねーこたえてよぉー", "今なにしてるの？", "なんで無視するの？", "もう無視されるの耐えられない", "なんかいってよ", "もう私ダメ", "信じてたのに", "リスカしよ。")

var counter = 0;
var cmtCount = 0;
function AddTableRows(){
	// カウンタを回す
	counter++;
	cmtCount++;

	var table1 = document.getElementById("table1");
	var row1 = table1.insertRow(counter);
	var cell1 = row1.insertCell(0);
	cell1.setAttribute("class","name");
	cell1.className = 'name';
/* 	var HTML1 = 'あああ'; */
	var HTML1 = comments[cmtCount];
	cell1.innerHTML = HTML1;

}


var PassSec; // 秒数カウント用変数

// 繰り返し処理の中身
function showPassage() {
   PassSec++; // カウントアップ
   var msg = "ボタンを押してから " + PassSec + "秒が経過しました。"; // 表示文作成
   document.getElementById("PassageArea").innerHTML = msg; // 表示更新
}

// 繰り返し処理の開始
function startShowing() {
   PassSec = 0; // カウンタのリセット
   PassageID = setInterval('showPassage()',1000); // タイマーをセット(1000ms間隔)
   document.getElementById("startcount").disabled = true; // 開始ボタンの無効化
}









