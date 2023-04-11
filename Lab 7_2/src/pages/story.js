import ('../components/bookcover.js')
import ('../styles.scss')

let style = document.createElement("link")
style.rel="stylesheet"
style.type="text/css"
style.href="../styles.css"
document.head.appendChild(style)

let components = document.createElement("script")
components.src = "../components/bookcover.js"
document.body.appendChild(components)

let a1 = document.createElement("a")
let h1 = document.createElement("h1")
let book1 = document.createElement("my-cover")

a1.textContent = "Home"
a1.setAttribute("href", "../index.html")
h1.textContent = "Story"

book1.setAttribute("mc-title", "Fallen Stars")
book1.setAttribute("mc-subtitle", "Alejandro Martinez")
book1.setAttribute("mc-description", "A young child awakens in a ruthless world, her home. Will she survive or live?")
book1.setAttribute("mc-linkurl", "chapter1.html")
book1.setAttribute("mc-image", "../components/logo.jpg")

document.body.appendChild(a1)
document.body.appendChild(h1)
document.body.appendChild(book1)

let bg = document.createElement("div")
bg.setAttribute("class", "gradient")
document.body.appendChild(bg)