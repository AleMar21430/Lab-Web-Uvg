(self.webpackChunk=self.webpackChunk||[]).push([[320],{9320:()=>{class t extends HTMLElement{Image;constructor(){super()}get observedAttributes(){return["mc-image","mc-title","mc-subtitle","mc-description","mc-link","mc-linkurl","mc-width","mc-height","mc-bg-color","mc-border-color","mc-text-color","mc-link-color","mc-img-height","mc-img-shiftx","mc-img-shifty"]}connectedCallback(){this.render()}render(){const t=this.getAttribute("mc-image")||"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg",e=this.getAttribute("mc-title")||"Title",i=this.getAttribute("mc-subtitle")||"Subtitle",r=this.getAttribute("mc-description")||"Description",c=this.getAttribute("mc-link")||"Read",s=this.getAttribute("mc-linkurl")||"../../index.html",h=this.getAttribute("mc-width")||"400px",m=`\n\t\t<div style="display: inline-block; width: ${h}; height: ${this.getAttribute("mc-height")||"600px"}; border-style: solid; border-width: 2px; border-radius: 20px; border-color: ${this.getAttribute("mc-border-color")||"rgb(0,0,0)"}; overflow: hidden;">\n\t\t\t<img style="width: ${h}; height: ${this.getAttribute("mc-img-height")||"400px"}; object-position: ${this.getAttribute("mc-img-shiftx")||"center"} ${this.getAttribute("mc-img-shifty")||"top"}; object-fit: cover;" src="${t}">\n\t\t\t<h1 style="margin-left: 20px;">${e}</h1>\n\t\t\t<h3 style="margin-left: 20px;">${i}</h3>\n\t\t\t<p style="margin-left: 20px;">${r}</p>\n\t\t\t<a style="margin-left: 20px; color: rgb(250,250,250);" href="${s}">${c}</a>\n\t\t</div>\n\t\t`;this.attachShadow({mode:"open"}).innerHTML=m}attributeChangedCallback(t,e,i){this.render()}}customElements.define("my-cover",t)}}]);