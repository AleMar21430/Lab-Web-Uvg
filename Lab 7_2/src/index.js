import ('./styles.scss')
import ("@babel/polyfill")

let style = document.createElement("link")
style.rel="stylesheet"
style.type="text/css"
style.href="./styles.css"
document.head.appendChild(style)

let a1 = document.createElement("a")
let h1 = document.createElement("h1")
let h2 = document.createElement("h2")
let ul1 = document.createElement("ul")
let ul2 = document.createElement("ul")
let ul3 = document.createElement("ul")
let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")
let a2 = document.createElement("a")
let a3 = document.createElement("a")
let a4 = document.createElement("a")

a1.textContent = "Labs"
a1.setAttribute("href", "../index.html")
h1.textContent = "Lab 7 Alejandro Martinez 21430"
a2.textContent = "Popular Books"
a2.setAttribute("href", "./pages/popular.html")
a3.textContent = "New Releases"
a3.setAttribute("href", "./pages/newreleases.html")
a4.textContent = "Story"
a4.setAttribute("href", "./pages/story.html")

h2.appendChild(ul1)
h2.appendChild(ul2)
h2.appendChild(ul3)
ul1.appendChild(li1)
ul2.appendChild(li2)
ul3.appendChild(li3)
li1.appendChild(a2)
li2.appendChild(a3)
li3.appendChild(a4)

document.body.appendChild(a1)
document.body.appendChild(h1)
document.body.appendChild(h2)

let bg = document.createElement("div")
bg.setAttribute("class", "gradient")
document.body.appendChild(bg)