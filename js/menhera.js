/*
var slot = new Array('指定開始日','指定終了日','処理開始時間');
var today = new Date();         //今現在の年・月・日・時・分・秒を取得
var day = today.getDate();      //todayから日付の取得
var hour = today.getHours();   //todayから現時刻の取得</pre>

function firstTimer(){
 //指定日期間以外の日付の場合の処理
 if(!(day >= slot[0] && day <= slot[1])){
 	firstTimer();
 //指定日期間の指定時間になった場合の処理
 }else{
 	startTimer();
 }
});
*/

var PassSec; 
var PassMin;
var PassHour;

var counter = 0;
var cmtCount = 0;

var seconds = Number(storage.getItem("secondInterval"));
var minutes = Number(storage.getItem("minutesInterval"));
var hours = Number(storage.getItem("hourInterval"));
var days = hours*24;

var alarm = {
		message: ""
};

var comments = new Array(
		"今日はちゃんとやった？", "ねえ、今日はちゃんとやった？", "本当にやったのー？", "ねーこたえてよぉー", "どうせ他の女と連絡してるんでしょ？","私はあなたをこんなに思っているのに","私なんて、その程度だったんだね","ちょっと聞いてるの？","見てるんでしょ？","今なにしてるの？", "なんで無視するの？", "馬鹿にしてんの？","もう無視されるの耐えられない", "なんかいってよ", "最低の彼氏だね","つらぃ","聞いてよ、お願い。。","お願いだからさぁ","鬱になりそう","診察終るまでにはお願いね","死にたいって言ったらやってくれるの？","もう私ダメ","信じてたのに","マジ無理","アアアアァァァァァァ","カラダで許してくれる？","私は何をすればいいの…ねえ。教えてよ。","こんなに面倒くさくて気持ち悪くて性格が悪くて人にも好かれない私だけど、どうか嫌わないでください。愛してください。","死ねばいいんでしょ！！私がいなくなればいいんでしょ！！","もうリスカしよ。")

/* タイマー */

//コメントをcellに表示したい場合 
function showComment() {
	counter++;
	cmtCount++;
	
	var table1 = document.getElementById("table1");
	var row1 = table1.insertRow(counter);
	var cell1 = row1.insertCell(0);
	cell1.setAttribute("class","name");
	cell1.className = 'name';
	var HTML1 = comments[cmtCount];
	cell1.innerHTML = HTML1;
	
	if(cmtCount == 29){
		cmtCount = 0;
	}
}

// 繰り返し処理の開始

function showPassage(){
   PassSec += seconds;
   PassMin += minutes;
   PassHour += hours;
}

function startTimer() {
   PassSec = 0;
   PassMin = 0;
   PassHour = 0;
   
   cmtID = setInterval('showAlarmMessage()',hours*3600000 + minutes*60000 + seconds*1000);
   PassageID = setInterval('showPassage()', hours*3600000 + minutes*60000 + seconds*1000); // タイマーをセット(1000ms間隔)
   cellID = setInterval('showComment()', hours*3600000 + minutes*60000 + seconds*1000);
   
   	Notification.requestPermission(function(status){
   		if(Notification.permission != status){
			Notification.permission = status;
		}
	});
}

var showAlarmMessage = function(){
	cmtCount++
	var message = comments[cmtCount];

	if(Notification.permission == "granted"){
		var notification = new Notification(message);
	}
	alarm.output.textContent = message;
	
	if(cmtCount == 30){
		cmtCount = 0;
	}
};

function displayCheck(){
	var answer = confirm('本当にやったのー？');

	if(answer){
		showPassage();
		var menhera = "目標設定から" + PassHour + "時間" + PassMin + "分" + PassSec + "秒たったよ!おめでとう！";
/* 		var menhera = day + "日目だね！おめでとう！"; */
        document.getElementById("reloadMH").innerHTML = menhera;
        cmtCount = 0;
	} else {
		alert('リスカする、知らないっ！');
	location.href="oko.html";
	}
}


