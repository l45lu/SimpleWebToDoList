var button = document.getElementById("enter");

var input = document.getElementById('userinput');

var ul = document.querySelector("ul");

function inputLen() {
	return input.value.trim().length;
};

function creatListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
};

function addListAfterClick(){
	if (inputLen() > 0) {
		creatListElement();
	} else {
		alert("Please enter the item into the list that you wish to finish.")
	}
};

function addListAfterPress(key){
	if (inputLen() > 0 && key.keyCode === 13) {
		creatListElement();
	}
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterPress);