class bookcover extends HTMLElement {Image
	constructor() {
		super()
	}

	get observedAttributes() {
		return ["mc-image", "mc-title", "mc-subtitle", "mc-description", "mc-link", "mc-linkurl", "mc-width", "mc-height", "mc-bg-color", "mc-border-color", "mc-text-color", "mc-link-color", "mc-img-height", "mc-img-shiftx", "mc-img-shifty"];
	}

	connectedCallback() {
		this.render()
	}

	render() {
		const cardImage = this.getAttribute("mc-image") || "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg"
		const cardTitle = this.getAttribute("mc-title") || "Title"
		const cardSubtitle = this.getAttribute("mc-subtitle") || "Subtitle"
		const cardDesc = this.getAttribute("mc-description") || "Description"
		const link1Text = this.getAttribute("mc-link") || "Read"
		const link1 = this.getAttribute("mc-linkurl") || "../../index.html"

		const width = this.getAttribute("mc-width") || "400px"
		const height = this.getAttribute("mc-height") || "600px"
		const borderColor = this.getAttribute("mc-border-color") || "rgb(0,0,0)"
		const imgHeight = this.getAttribute("mc-img-height") || "400px"
		const imgShiftX = this.getAttribute("mc-img-shiftx") || "center"
		const imgShiftY = this.getAttribute("mc-img-shifty") || "top"

		const template = `
		<div style="display: inline-block; width: ${width}; height: ${height}; border-style: solid; border-width: 2px; border-radius: 20px; border-color: ${borderColor}; overflow: hidden;">
			<img style="width: ${width}; height: ${imgHeight}; object-position: ${imgShiftX} ${imgShiftY}; object-fit: cover;" src="${cardImage}">
			<h1 style="margin-left: 20px;">${cardTitle}</h1>
			<h3 style="margin-left: 20px;">${cardSubtitle}</h3>
			<p style="margin-left: 20px;">${cardDesc}</p>
			<a style="margin-left: 20px; color: rgb(250,250,250);" href="${link1}">${link1Text}</a>
		</div>
		`
		this.attachShadow({ mode: "open" }).innerHTML = template
	}
	
	attributeChangedCallback(name, oldValue, newValue) {
		this.render()
	}
}
customElements.define("my-cover", bookcover)