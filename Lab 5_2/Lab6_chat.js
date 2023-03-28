window.onload = () => {
	createElements()
	document.addEventListener("keydown", function (e) {
		if (e.key === "Enter") {
			document.getElementById("enterbtn").click();
		}
	})
}

function createElements() {
	document.body.style.background = "rgb(0,50,25)"

	let linker = document.createElement("a")
	linker.href = "../index.nginx-debian.html"
	linker.style.color = "rgb(200,200,200)"
	linker.innerHTML = "Labs"
	document.body.appendChild(linker)

	let header = document.createElement("h2")
	header.innerHTML = "Chatss Wapp"
	header.style.color = "rgb(0,200,50)"
	header.style.width = "90%"
	header.style.textAlign = "center";
	header.style.position = "absolute"
	header.style.top = "0.5%"
	document.body.appendChild(header)

	let messageDisplay = document.createElement("div")
	messageDisplay.id = "message_container"
	messageDisplay.style.display = "flex"
	messageDisplay.style.flexDirection = "column-reverse"
	messageDisplay.style.color = "rgb(0,250,250)"
	messageDisplay.style.position = "absolute"
	messageDisplay.style.width = "90%"
	messageDisplay.style.height = "70%"
	messageDisplay.style.top = "7.5%"
	messageDisplay.style.whiteSpace = "pre-line"
	messageDisplay.style.overflow = "auto"

	let footer = document.createElement("footer")
	footer.id = "footer"
	footer.style.position = "absolute"
	footer.style.width = "90%"
	footer.style.height = "15%"
	footer.style.bottom = "5%"
//NAME
	let description = document.createElement("div")
	description.innerHTML = "Name:&nbsp;" + localStorage.getItem("Username") + "&emsp;&emsp;Text: 0/140"
	description.style.color = "rgb(250,250,250)"
	description.style.width = "100%"
	description.style.margin = "2px"
	description.style.padding = "2px"
	description.style.height = "15%"

//TEXT
	let textInput = document.createElement("textarea")
	textInput.id = "text"
	textInput.rows = 10
	textInput.maxLength = 140
	textInput.style.background = "rgb(0,40,20)"
	textInput.style.color = "rgb(250,250,250)"
	textInput.style.borderStyle = "solid"
	textInput.style.borderWidth = "2px"
	textInput.style.margin = "2px"
	textInput.style.padding = "2px"
	textInput.style.resize = "none"
	textInput.style.width = "100%"
	textInput.style.height = "60%"

	textInput.addEventListener("keydown", function (e) {
		if (e.key === "Enter") {
			document.getElementById("enterbtn").click();
		}
	})

	textInput.oninput = function() {
		description.innerHTML = "Name:&nbsp;" + localStorage.getItem("Username") + "&emsp;&emsp;Text: " + textInput.value.length + "/140"
	}
//ENTER BUTTON
	let enterButton = document.createElement("button")
	enterButton.id = "enterbtn"
	enterButton.style.color = "rgb(0,0,0)"
	enterButton.style.background = "rgb(0,200,50)"
	enterButton.style.width = "20%"
	enterButton.innerHTML = "Enter"

	enterButton.onclick = function () {
		var inputname = localStorage.getItem("Username")
		var inputtext = document.getElementById("text").value
		if (inputname == null || inputname == "") {var name = "No Username"} else {var name = inputname};
		if (inputtext == null || inputtext == "") {var text = "No Message"}  else {var text = inputtext};
		if(inputtext.length > 140) {alert("Más de 140 caracteres")} else { sendMessage(name, text)}
		document.getElementById("text").value = ""
	}
//REFRESH BUTTON
	let refreshButton = document.createElement("button")
	refreshButton.id = "refreshbtn"
	refreshButton.style.color = "rgb(0,0,0)"
	refreshButton.style.background = "rgb(0,200,50)"
	refreshButton.style.width = "20%"
	refreshButton.innerHTML = "Refresh"

	refreshButton.onclick = function () {
		displayMessages(getAllMessages())
	}
//WORD COUNT
	document.body.appendChild(messageDisplay)
	document.body.appendChild(footer)

	footer.appendChild(description)
	footer.appendChild(textInput)
	footer.appendChild(enterButton)
	footer.appendChild(refreshButton)

}

function validateURL(str) {
	patron = new RegExp("^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,=.]+$")
	return patron.test(str)
}

async function sendMessage(username, message) {
	date = new Date()
	payload = { user: username, chat: message, date: (date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + "|" + date.getHours() + ":" + date.getSeconds() + ":" + date.getMilliseconds()) }

	response = await fetch("http://stw-uvg-23.site:3002/chat", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(payload),
	})

	if (!response.ok) {
		//alert("Failed to send message")
	}
	}

async function getAllMessages() {
	response = await fetch("http://stw-uvg-23.site:3002/chats")
	messages = await response.json()
	return messages
}

var MessageCache = []

function displayInitial(messages) {
	messages.forEach((message) => {
		let messageElement = document.createElement("div")
		let iconElement = document.createElement("div")
		let iconUserElement = document.createElement("div")
		let usernameElement = document.createElement("div")
		let textElement = document.createElement("div")
		let previewElement = document.createElement("img")

		messageElement.style.background = "rgb(0,75,50)"
		messageElement.style.borderColor = "rgb(0,0,0)"
		messageElement.style.borderWidth = "3px"
		messageElement.style.borderRadius = "10px"
		messageElement.style.borderStyle = "solid"
		messageElement.style.margin = "10px"

		iconElement.style.width = "50px"
		iconElement.style.aspectRatio = "1/1"
		iconElement.style.borderRadius = "50%"
		iconElement.style.background = "rgb(250,250,250)"
		iconElement.style.color = "rgb(0,0,0)"
		iconElement.style.fontSize = "30px"
		iconElement.style.display = "inline-block"
		iconElement.style.margin = "10px"

		iconUserElement.style.textAlign = "center"
		iconUserElement.style.position = "relative"
		iconUserElement.style.top = "30%"
		iconUserElement.style.lineHeight = "15px"
		iconUserElement.innerHTML = message.user.charAt(0)

		usernameElement.textContent = message.user
		usernameElement.style.fontSize = "20px"
		usernameElement.style.color = "rgb(250,250,250)"
		usernameElement.style.display = "inline-block"
		usernameElement.style.margin = "10px"
		usernameElement.style.position = "relative"
		usernameElement.style.top = "10px"

		textElement.textContent = message.chat
		textElement.style.color = "rgb(250,250,250)"
		textElement.style.margin = "10px"
		textElement.style.marginLeft = "100px"

		previewElement.style.height = "150px"
		previewElement.style.aspectRatio = "1.4/1";
		previewElement.style.objectFit = "cover"
		previewElement.style.borderRadius = "10px"
		previewElement.style.margin = "10px"
		previewElement.style.marginLeft = "100px"

		iconElement.appendChild(iconUserElement)
		messageElement.appendChild(iconElement)
		messageElement.appendChild(usernameElement)
		messageElement.appendChild(textElement)

		if (validateURL(message.chat)) {
			previewElement.src = message.chat
			messageElement.appendChild(previewElement)
		}

		document.getElementById("message_container").appendChild(messageElement)
		MessageCache.push(message.date)
	})
}

function displayMessages(messages) {
	messages.forEach((message) => {
		if (!MessageCache.includes(message.date)) {
			let messageElement = document.createElement("div")
			let iconElement = document.createElement("div")
			let iconUserElement = document.createElement("div")
			let usernameElement = document.createElement("div")
			let textElement = document.createElement("div")
			let previewElement = document.createElement("img")

			messageElement.style.background = "rgb(0,75,50)"
			messageElement.style.borderColor = "rgb(0,0,0)"
			messageElement.style.borderWidth = "3px"
			messageElement.style.borderRadius = "10px"
			messageElement.style.borderStyle = "solid"
			messageElement.style.margin = "10px"

			iconElement.style.width = "50px"
			iconElement.style.aspectRatio = "1/1"
			iconElement.style.borderRadius = "50%"
			iconElement.style.background = "rgb(250,250,250)"
			iconElement.style.color = "rgb(0,0,0)"
			iconElement.style.fontSize = "30px"
			iconElement.style.display = "inline-block"
			iconElement.style.margin = "10px"

			iconUserElement.style.textAlign = "center"
			iconUserElement.style.position = "relative"
			iconUserElement.style.top = "30%"
			iconUserElement.style.lineHeight = "15px"
			iconUserElement.innerHTML = message.user.charAt(0)

			usernameElement.textContent = message.user
			usernameElement.style.fontSize = "20px"
			usernameElement.style.color = "rgb(250,250,250)"
			usernameElement.style.display = "inline-block"
			usernameElement.style.margin = "10px"
			usernameElement.style.position = "relative"
			usernameElement.style.top = "10px"

			textElement.textContent = message.chat
			textElement.style.color = "rgb(250,250,250)"
			textElement.style.margin = "10px"
			textElement.style.marginLeft = "100px"

			previewElement.style.height = "150px"
			previewElement.style.aspectRatio = "1.4/1";
			previewElement.style.objectFit = "cover"
			previewElement.style.borderRadius = "10px"
			previewElement.style.margin = "10px"
			previewElement.style.marginLeft = "100px"

			iconElement.appendChild(iconUserElement)
			messageElement.appendChild(iconElement)
			messageElement.appendChild(usernameElement)
			messageElement.appendChild(textElement)

			if (validateURL(message.chat)) {
				previewElement.src = message.chat
				messageElement.appendChild(previewElement)
			}

			document.getElementById("message_container").insertBefore(messageElement, document.getElementById("message_container").firstChild)
			MessageCache.push(message.date)
		}
	})
}

doOnce = true

setInterval(async () => {
	messages = await getAllMessages()
	if (doOnce){
		displayInitial(messages)
		doOnce = false
	}else{
		displayMessages(messages)
	}
}, 1000)