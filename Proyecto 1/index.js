window.onload = () => {
	createElements()
}

function createElements() {
	let test = document.createElement("div")
	test.innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
	document.body.appendChild(test)
	let Navbar = document.getElementById("id-top-navbar")
	let li = document.createElement("li")
	let a = document.createElement("a")
	li.class = "nav-item"
	a.class = "nav-link"
	a.title = ""
	a.href = "https://www.blender.org/features/"
	a.innerHTML = "Features"

	li.appendChild(a)
	Navbar.appendChild(li)
}
