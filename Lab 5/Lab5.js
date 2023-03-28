window.onload = () => {
	createElements();
	document.getElementById("msg").textContent = localStorage.getItem("val");
	document.addEventListener("keyup", function(event) {
		if (event.key == "Enter") {
			event.preventDefault();
			document.getElementById("enterbtn").click();
		}
	});
};

function createElements() {
	document.body.style.background = "rgb(0,50,25)";

	let linker = document.createElement("a")
	linker.href = "../index.nginx-debian.html";
	linker.style.color = "rgb(200,200,200)";
	linker.innerHTML = "Labs";
	document.body.appendChild(linker);

	let header = document.createElement("h2");
	header.innerHTML = "Chatss Wapp"
	header.style.color = "rgb(0,200,50)";
	document.body.appendChild(header);

	let messageDisplay = document.createElement("div");
	messageDisplay.id = "msg";
	messageDisplay.style.display = "flex";
	messageDisplay.style.flexDirection = "column-reverse";
	messageDisplay.style.color = "rgb(0,250,250)";
	messageDisplay.style.position = "absolute";
	messageDisplay.style.width = "90%";
	messageDisplay.style.height = "50%";
	messageDisplay.style.top = "10%";
	messageDisplay.style.whiteSpace = "pre-line";
	messageDisplay.style.overflow = "auto";

	let footer = document.createElement("footer");
	footer.id = "footer"
	footer.style.position = "absolute";
	footer.style.width = "90%";
	footer.style.height = "30%";
	footer.style.bottom = "5%";
//NAME
	let nameDescription = document.createElement("p");
	nameDescription.innerHTML = "Name: ";
	nameDescription.style.color = "rgb(250,250,250)";
	nameDescription.style.width = "100%";
	nameDescription.style.margin = "2px";
	nameDescription.style.padding = "2px";

	let nameInput = document.createElement("input");
	nameInput.id = "name";
	nameInput.style.background = "rgb(0,40,20)";
	nameInput.style.color = "rgb(250,250,250)";
	nameInput.style.borderStyle = "solid";
	nameInput.style.borderWidth = "2px";
	nameInput.style.margin = "2px";
	nameInput.style.padding = "2px";
	nameInput.style.width = "100%";
//TEXT
	let textDescription = document.createElement("p");
	textDescription.innerHTML = "Text: 0/140";
	textDescription.style.color = "rgb(250,250,250)";
	textDescription.style.width = "100%";
	textDescription.style.margin = "2px";
	textDescription.style.padding = "2px";

	let textInput = document.createElement("textarea");
	textInput.id = "text";
	textInput.rows = 10;
	textInput.style.background = "rgb(0,40,20)";
	textInput.style.color = "rgb(250,250,250)";
	textInput.style.borderStyle = "solid";
	textInput.style.borderWidth = "2px";
	textInput.style.margin = "2px";
	textInput.style.padding = "2px";
	textInput.style.resize = "none";
	textInput.style.width = "100%";

	textInput.oninput = function() {
		textDescription.textContent = "Text: " + textInput.value.length + "/140";
	}
//ENTER BUTTON
	let enterButton = document.createElement("button");
	enterButton.id = "enterbtn";
	enterButton.style.color = "rgb(0,0,0)";
	enterButton.style.background = "rgb(0,200,50)";
	enterButton.style.width = "20%";
	enterButton.innerHTML = "Enter";

	enterButton.onclick = function () {
		var inputname = document.getElementById("name").value;
		var inputtext = document.getElementById("text").value;
		var date = new Date();
		document.getElementById("name").value;
		if (inputname == null || inputname == "") {var name = "No Username"} else {var name = inputname};
		if (inputtext == null || inputtext == "") {var text = "No Message"}  else {var text = inputtext};

		document.getElementById("msg").textContent = localStorage.getItem("val");
		if (localStorage.getItem('val') == null) {
			if(inputtext.length > 140) {alert("Más de 140 caracteres")} else {
				localStorage.setItem('val', date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + "|" + date.getHours() + ":" + date.getSeconds() + ":" + date.getMilliseconds() + " [ " + name + " ] " + text);
			}
		} else {
			if(inputtext.length > 140) {alert("Más de 140 caracteres")} else {
				localStorage.setItem('val', localStorage.getItem("val") + "\n" + (date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + "|" + date.getHours() + ":" + date.getSeconds() + ":" + date.getMilliseconds() + " [ " + name + " ] " + text));
			}
		}
			document.getElementById("msg").textContent = localStorage.getItem("val");
	};
//CLEAR BUTTON
	let clearButton = document.createElement("button");
	clearButton.id = "clearbtn";
	clearButton.style.color = "rgb(0,0,0)";
	clearButton.style.background = "rgb(0,200,50)";
	clearButton.style.width = "20%";
	clearButton.innerHTML = "Delete History";

	clearButton.onclick = function () {
		localStorage.clear();
		document.getElementById("msg").textContent = "";
	};
//WORD COUNT

	document.body.appendChild(messageDisplay);
	document.body.appendChild(footer)
	footer.appendChild(nameDescription);
	nameDescription.appendChild(nameInput);
	footer.appendChild(textDescription);
	footer.appendChild(textInput);
	footer.appendChild(enterButton);
	footer.appendChild(clearButton);
};