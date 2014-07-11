function output(){
 var outputArea = document.getElementById("#outputArea").value;
 outputArea.innerHTML = todo + "したー？" ;
}

var counter = 0;
function AddTableRows(){
	// カウンタを回す
	counter++;

	var table1 = document.getElementById("table1");
	var row1 = table1.insertRow(counter);
	var cell1 = row1.insertCell(0);

	cell1.setAttribute("class","name");
	cell1.className = 'name';
	var HTML1 = 'あああ';
	cell1.innerHTML = HTML1;

}