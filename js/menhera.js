var hours = Number(storage.getItem("hourInterval"));
var minutes = Number(storage.getItem("minutesInterval"));
var seconds = Number(storage.getItem("secondInterval"));

console.log(seconds);
console.log(minutes);

var comments = new Array(
		"", "今日はちゃんとやった？", "本当にやったのー？", "ねーこたえてよぉー", "どうせ他の女と連絡してるんでしょ？","私はあなたをこんなに思っているのに","私なんて、その程度だったんだね","ちょっと聞いてるの？","見てるんでしょ？","今なにしてるの？", "なんで無視するの？", "馬鹿にしてんの？","もう無視されるの耐えられない", "なんかいってよ", "最低の彼氏だね","つらぃ","聞いてよ、お願い。。","お願いだからさぁ","鬱になりそう","診察終るまでにはお願いね","死にたいって言ったらやってくれるの？","もう私ダメ","信じてたのに","マジ無理","アアアアァァァァァァ","カラダで許してくれる？","私は何をすればいいの…ねえ。教えてよ。","こんなに面倒くさくて気持ち悪くて性格が悪くて人にも好かれない私だけど、どうか嫌わないでください。愛してください。","死ねばいいんでしょ！！私がいなくなればいいんでしょ！！","もうリスカしよ。")

/* タイマー */

//コメント更新
var counter = 0;
var cmtCount = 0;
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
	
	if(cmtCount == 30){
		cmtCount = 0;
	}
	
/*
	storage.setItem("commentCount",cmtCount);
	console.log(cmtCount); 	
*/

}

// 繰り返し処理の開始

function showPassage(){
   PassSec += seconds;
   PassMin += minutes;
   PassHour += hours;
   
/*
   var msg = "ボタンを押してから " + PassSec + "秒が経過しました。"; // 表示文作成
   document.getElementById("reloadMH").innerHTML = msg; // 表示更新
*/
/*
   
   var menhera = "目標設定から" + PassHour + "時間" + PassMin + "分" + PassSec + "秒たったよ";
   document.getElementById("reloadMH").innerHTML = menhera;
*/

}

var PassSec; 
var PassMin;
var PassHour;
function startTimer() {

   PassSec = 0;
   PassMin = 0;
   PassHour = 0;
   
   cmtID = setInterval('showComment()',hours*3600000 + minutes*60000 + seconds*1000);
   PassageID = setInterval('showPassage()', hours*3600000 + minutes*60000 + seconds*1000); // タイマーをセット(1000ms間隔)
}

function stopTimer(){
	clearInterval( cmtID );
}

function displayCheck(){

	var answer = confirm('本当にやったのー？');
	
	var table1 = document.getElementById("table1");
	var row1 = table1.insertRow(counter);

	if(answer){
		showPassage();
		var menhera = "目標設定から" + PassHour + "時間" + PassMin + "分" + PassSec + "秒たったよ";
        document.getElementById("reloadMH").innerHTML = menhera;
	} else {
		alert('oko');
	}
	
}


