window.onload = () => {
	createElements()
}

function createElements() {
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

function slide() {
	let value = document.getElementById("Video_Slider").value
	document.getElementById("Video").style.clipPath = "polygon(0 0, " + value + "% 0, " + value + "% 100%, 0 100%)"
	if (value > 78) {
		document.getElementById("Label_Left").style.clipPath = "polygon(100% 0, " + (value-77)*5 + "% 0, " + (value-77)*5 + "% 100%, 100% 100%)"
	} else {
		document.getElementById("Label_Left").style.clipPath = "polygon(100% 0, 0 0, 0 100%, 100% 100%)"
	}
	
}