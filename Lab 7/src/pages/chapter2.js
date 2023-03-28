import ('../styles.scss')

let style = document.createElement("link")
style.rel="stylesheet"
style.type="text/css"
style.href="../styles.css"
document.head.appendChild(style)

let a = document.createElement("a")
let h1 = document.createElement("h1")
let div = document.createElement("div")
let p = document.createElement("p")
let footer = document.createElement("footer")
let h3 = document.createElement("h3")
let ul = document.createElement("ul")
let li1 = document.createElement("li")
let a1 = document.createElement("a")
let li2 = document.createElement("li")
let a2 = document.createElement("a")
let br1 = document.createElement("br")
let span = document.createElement("span")
let progress = document.createElement("progress")

a.setAttribute("href", "./chapter1.html")
a.textContent = "Regresar"
h1.textContent = "Capítulo 2"
p.textContent = "La ciudad subterránea de Vort"
a1.setAttribute("href", "./chapter2.html")
a1.textContent = "Concluir"
li1.appendChild(a1)
a2.setAttribute("href", "./chapter2.html")
a2.textContent = "Concluir"
li2.appendChild(a2)
ul.appendChild(li1)
ul.appendChild(li2)
h3.appendChild(ul)
span.setAttribute("for", "R")
span.textContent = "Progreso: "
progress.setAttribute("id", "R")
progress.setAttribute("max", "100")
progress.setAttribute("value", "100")
span.appendChild(progress)
span.appendChild(document.createTextNode(" 100%"))

footer.appendChild(h3)
div.appendChild(p)
h3.appendChild(br1)
h3.appendChild(span)

document.body.appendChild(a)
document.body.appendChild(h1)
document.body.appendChild(div)
document.body.appendChild(footer)

let bg = document.createElement("div")
bg.setAttribute("class", "gradient")
document.body.appendChild(bg)