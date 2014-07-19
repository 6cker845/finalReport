var PassSec; 
var PassMin;
var PassHour;

var counter = 0;
var cmtCount = 0;

var seconds = Number(storage.getItem("secondInterval"));
var minutes = Number(storage.getItem("minutesInterval"));
var hours = Number(storage.getItem("hourInterval"));

var inputHour = Number(storage.getItem("startHour"));
var inputMinute = Number(storage.getItem("startMinute"));
/* var inputOperator = storage.getItem("operator"); */
console.log(inputHour);
console.log(inputMinute);

var days = hours*24;

var alarm = {
		message: ""
};

var menheraComments = new Array(
		"今日はちゃんとやった？", "ねえ、今日はちゃんとやった？", "本当にやったのー？", "ねーこたえてよぉー", "どうせ他の女と連絡してるんでしょ？","私はあなたをこんなに思っているのに","私なんて、その程度だったんだね","ちょっと聞いてるの？","見てるんでしょ？","今なにしてるの？", "なんで無視するの？", "馬鹿にしてんの？","もう無視されるの耐えられない", "なんかいってよ", "最低の彼氏だね","つらぃ","聞いてよ、お願い。。","お願いだからさぁ","鬱になりそう","診察終るまでにはお願いね","死にたいって言ったらやってくれるの？","もう私ダメ","信じてたのに","マジ無理","アアアアァァァァァァ","カラダで許してくれる？","私は何をすればいいの…ねえ。教えてよ。","こんなに面倒くさくて気持ち悪くて性格が悪くて人にも好かれない私だけど、どうか嫌わないでください。愛してください。","死ねばいいんでしょ！！私がいなくなればいいんでしょ！！","もうリスカしよ。");

/*
var ikemenComments = new Array(
		"今日はしっかりやったのか？","俺のこと考えすぎて、手がついてないだろ","早く終らして、出かけようぜ","何にも言わないと本気チューしちゃうぞ!","お前が心配だからだぞ。","おい、大丈夫か？","いつまでも待ってるからな。","会いたいんだから、早く終らしてくれよ。","おまえの好きってのはその程度か？","もぅﾏﾁﾞ無理。 ﾘｽｶしょ。。。");
		
var aneComments = new Array(
		"今日はちゃんとやったのよね？", "ねえ、今日はちゃんとやったのよね？", "本当に、やったのよね？信じていいのよね？", "こらッ!答えなさいよ！", "どうせ他の女と連絡してるんじゃないの？","私はあなたのこと、こんなに思っているのに何様だと思っているの？","私なんて、その程度だったんだんだね。","ちょっと聞いてるのかしら？返事しなさいよ！","見てるんでるの、ばれてるわよ？","今なにしてるのかしら？答えられないのかしら？");
*/


/* タイマー */

function getDate(){
	var now = new Date();
	var hourNow = now.getHours();
	var minuteNow = now.getMinutes();
	var secondsNow = now.getSeconds();
	
	console.log(hourNow);
	console.log(minuteNow);
	
	var leftover = Number((inputHour - hourNow)*3600000 + (inputMinute - minuteNow)*60000 - secondsNow*1000);
	
	if(inputHour == hourNow && inputMinute == minuteNow){
		startTimer();
	} else{ 	
		setTimeout('startTimer()', leftover);
	}

	console.log(leftover);
}

// 繰り返し処理の開始

function showPassage(){
   PassSec += seconds;
   PassMin += minutes;
   PassHour += hours;
}

function showAlarmMessage(){
/* 	var operator = inputOperator.value; */
	cmtCount++
	
	var message = menheraComments[cmtCount];
	
/*
	if(operator == "メンヘラ"){
		var message = menheraComments[cmtCount];
	} else if(operator == "年上お姉さん"){
		var message = aneCommens[cmtCount];
	} else if(operator == "イケメン風"){
		var message = ikemenComments[cmtCount];
	}
*/

	if(Notification.permission == "granted"){
		var notification = new Notification(message);
	}
	alarm.output.textContent = message;
	
	if(cmtCount == 30){
		cmtCount = 0;
	}
};

function startTimer() {
   PassSec = 0;
   PassMin = 0;
   PassHour = 0;
   
   cmtID = setInterval('showAlarmMessage()',hours*3600000 + minutes*60000 + seconds*1000);
   PassageID = setInterval('showPassage()', hours*3600000 + minutes*60000 + seconds*1000); // タイマーをセット(1000ms間隔)
/*    timeID = setInterval('getDate()', 1000); */
/*    cellID = setInterval('showComment()', hours*3600000 + minutes*60000 + seconds*1000); */
   
   	Notification.requestPermission(function(status){
   		if(Notification.permission != status){
			Notification.permission = status;
		}
	});
}

function displayCheck(){
	var answer = confirm('本当にやったのー？');

	if(answer){
		showPassage();
		var menhera = "目標時間から<br>" + PassHour + "時間" + PassMin + "分" + PassSec + "秒<br>だったよ!<br>お疲れさま(･ᴗ･)";
//      本当は日にち毎に更新されるようにする。
/* 		var menhera = day + "日目だね！おめでとう！"; */
        document.getElementById("reloadMH").innerHTML = menhera;
        cmtCount = 0;
	} else {
		alert('リスカする、知らないっ！');
	　　location.href="oko.html";
	}
}

/* getDate(); */

//コメントをcellに表示したい場合 
/*
function showComment() {
	counter++;
	cmtCount++;
	
	var table1 = document.getElementById("table1");
	var row1 = table1.insertRow(counter);
	var cell1 = row1.insertCell(0);
	cell1.setAttribute("class","name");
	cell1.className = 'name';
	var HTML1 = menheraComments[cmtCount];
	cell1.innerHTML = HTML1;
	
	if(cmtCount == 29){
		cmtCount = 0;
	}
}
*/

