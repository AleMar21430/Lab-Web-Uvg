class MyCard extends HTMLElement {Image
	constructor() {
		super()
	}

	static get observedAttributes() {
		return ["card-Image", "card-Title", "card-Subtitle", "card-Description", "link1", "link2", "action1", "action2", "width", "height", "bg-color", "border-color", "text-color", "link-color", "img-height", "img-shiftx", "img-shifty"];
	}

	connectedCallback() {
		this.render()
	}

	render() {
		const cardImage = this.getAttribute("card-Image") || "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg"
		const cardTitle = this.getAttribute("card-Title") || "Title"
		const cardSubtitle = this.getAttribute("card-Subtitle") || "Subtitle"
		const cardDesc = this.getAttribute("card-Description") || "Description"
		const link1Text = this.getAttribute("link1") || "Action 1"
		const link2Text = this.getAttribute("link2") || "Action 2"
		const link1 = this.getAttribute("action1") || "../index.nginx-debian.html"
		const link2 = this.getAttribute("action2") || "../index.nginx-debian.html"

		const width = this.getAttribute("width") || "400px"
		const height = this.getAttribute("height") || "250px"
		const bgColor = this.getAttribute("bg-color") || "rgb(250,250,250)"
		const borderColor = this.getAttribute("border-color") || "rgb(200,250,200)"
		const textColor = this.getAttribute("text-color") || "rgb(200,200,200)"
		const linkColor = this.getAttribute("link-color") || "rgb(100,100,100)"
		const imgHeight = this.getAttribute("img-height") || "50px"
		const imgShiftX = this.getAttribute("img-shiftx") || "center"
		const imgShiftY = this.getAttribute("img-shifty") || "top"

		const template = `
		<style>
			.card {
				width: ${width};
				height: ${height};
				background-color: ${bgColor};
				border-style: solid;
				border-width: 2px;
				border-radius: 20px;
				border-color: ${borderColor};
				overflow: hidden;
			}
			.cardImage {
				width: ${width};
				height: ${imgHeight};
				object-position: ${imgShiftX} ${imgShiftY};
				object-fit: cover;
			}
			.textItems {
				color: ${textColor};
				margin-left: 20px;
			}
			.linkItems {
				color: ${linkColor};
			}
		</style>
		
		<div class="card">
			<img class="cardImage" src="${cardImage}">
			<h1 class="textItems">${cardTitle}</h1>
			<h3 class="textItems">${cardSubtitle}</h3>
			<p class="textItems">${cardDesc}</p>
			<p class="textItems">
				<a class="linkItems" href="${link1}">${link1Text}</a>
				&emsp;
				<a class="linkItems" href="${link2}">${link2Text}</a>
			</p>
		</div>
		`
		this.attachShadow({ mode: "open" }).innerHTML = template
	}
	
	attributeChangedCallback(name, oldValue, newValue) {
		this.render()
	}
}
customElements.define("my-card", MyCard)