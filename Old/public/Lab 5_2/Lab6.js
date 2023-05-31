window.onload = () => {
	createElements();
	displayMessages(getAllMessages());
	if (event.key == "Enter") {
		event.preventDefault();
		document.getElementById("enterbtn").click();
	}
};

function createElements() {
	document.body.style.background = "rgb(0,50,25)";

	let header = document.createElement("h2");
	header.innerHTML = "Chatss Wapp"
	header.style.color = "rgb(0,200,50)";
	document.body.appendChild(header);

	let messageDisplay = document.createElement("div");
	messageDisplay.id = "message_container";
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
		sendMessage(inputname, inputtext)
	};
//REFRESH BUTTON
	let refreshButton = document.createElement("button");
	refreshButton.id = "refreshbtn";
	refreshButton.style.color = "rgb(0,0,0)";
	refreshButton.style.background = "rgb(0,200,50)";
	refreshButton.style.width = "20%";
	refreshButton.innerHTML = "Refresh";

	refreshButton.onclick = function () {
		displayMessages(getAllMessages());
	};
//WORD COUNT

	document.body.appendChild(messageDisplay);
	document.body.appendChild(footer)
	footer.appendChild(nameDescription);
	nameDescription.appendChild(nameInput);
	footer.appendChild(textDescription);
	footer.appendChild(textInput);
	footer.appendChild(enterButton);
	footer.appendChild(refreshButton);
};


function validateURL(str) {
	patron = new RegExp("^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$");
	return patron.test(str);
}

async function sendMessage(username, message) {
	date = new Date()
	payload = { user: username, chat: message, date: (date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + "|" + date.getHours() + ":" + date.getSeconds() + ":" + date.getMilliseconds()) };

	response = await fetch("http://stw-uvg-23.site:3002/chat", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(payload),
	});

	if (!response.ok) {
		//alert("Failed to send message");
	}
	}

async function getAllMessages() {
	response = await fetch("http://stw-uvg-23.site:3002/chats");
	messages = await response.json();
	return messages;
}

// Function to display chat messages on the webpage
function displayMessages(messages) {
	document.getElementById("message_container").innerHTML = "";
	messages.forEach((message) => {
		messageElement = document.createElement("div");
		if (validateURL(message.chat)) {
			messageElement.textContent = `${message.user}: ${message.chat} (${message.date})`;
			let previewElement = document.createElement("img");
			previewElement.style.width = "25%";
			previewElement.style.objectFit = "cover";
			previewElement.src = message.chat;
			document.getElementById("message_container").appendChild(messageElement);
			document.getElementById("message_container").appendChild(previewElement);
		} else {
			messageElement.textContent = `${message.user}: ${message.chat} (${message.date})`;
			document.getElementById("message_container").appendChild(messageElement);
		}
	});
}

// Periodically fetch all chat messages from the server and display them
setInterval(async () => {
try {
	messages = await getAllMessages();
	displayMessages(messages);
} catch (error) {
	//alert(error);
}
}, 5000);