function output(){
 var outputArea = document.getElementById("#outputArea").value;
 outputArea.innerHTML = todo + "したー？" ;
}

var comments = new Array(
		"", "今日はちゃんとやった？", "本当にやったのー？", "ねーこたえてよぉー", "今なにしてるの？", "なんで無視するの？", "もう無視されるの耐えられない", "なんかいってよ", "もう私ダメ", "信じてたのに", "リスカしよ。")

var counter = 0;
function AddTableRows(){
	// カウンタを回す
	counter++;

	var table1 = document.getElementById("table1");
	var row1 = table1.insertRow(counter);
	var cell1 = row1.insertCell(0);
	cell1.setAttribute("class","name");
	cell1.className = 'name';
/* 	var HTML1 = 'あああ'; */
	var HTML1 = comments[counter];
	cell1.innerHTML = HTML1;

}