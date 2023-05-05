class Nav_Link extends HTMLElement {
	constructor() {
		super()
	}

	static get observedAttributes() {
		return ["navlink", "navtext", "title"];
	}

	connectedCallback() {
		this.render()
	}

	render() {
		const navlink = this.getAttribute("my-link") || "https://www.blender.org/"
		const navtext = this.getAttribute("my-text") || "Link"
		const navtitle = this.getAttribute("my-title") || ""

		const template = `
		<li class="nav-item ">
			<a href="${navlink}" title="${navtitle}" class="nav-link">${navtext}</a>
		</li>
		`
		this.attachShadow({ mode: "open" }).innerHTML = template
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.render()
	}
}
customElements.define("nav-link", Nav_Link)