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

function lightgroupChange(type) {
	if (type == 1) {
		document.getElementById("Lightgroups_Img").style.backgroundImage = 'url("./resources/cycles_light_groups_pavilion_combined.jpg")'
	} else if (type == 2) {
		document.getElementById("Lightgroups_Img").style.backgroundImage = 'url("./resources/cycles_light_groups_pavilion_interior.jpg")'
	} else if (type == 3) {
		document.getElementById("Lightgroups_Img").style.backgroundImage = 'url("./resources/cycles_light_groups_pavilion_pool.jpg")'
	} else if (type == 4) {
		document.getElementById("Lightgroups_Img").style.backgroundImage = 'url("./resources/cycles_light_groups_pavilion_bench.jpg")'
	} else if (type == 5) {
		document.getElementById("Lightgroups_Img").style.backgroundImage = 'url("./resources/cycles_light_groups_pavilion_world.jpg")'
	}
}