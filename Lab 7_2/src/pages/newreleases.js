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

let html = document.createElement("html")
let head = document.createElement("head")
let title = document.createElement("title")
let body = document.createElement("body")
let a1 = document.createElement("a")
let h1 = document.createElement("h1")
let book1 = document.createElement("my-cover")
let book2 = document.createElement("my-cover")
let book3 = document.createElement("my-cover")
let book4 = document.createElement("my-cover")

html.lang = ""
title.textContent = "Lab 7"
a1.textContent = "Home"
a1.setAttribute("href", "../index.html")
h1.textContent = "New Releases"

book1.setAttribute("mc-title", "Fallen Stars")
book1.setAttribute("mc-subtitle", "Alejandro Martinez")
book1.setAttribute("mc-description", "A young child awakens in a ruthless world, her home. Will she survive or live?")
book1.setAttribute("mc-linkurl", "Chapter 1.html")
book1.setAttribute("mc-image", "../components/logo.jpg")

book2.setAttribute("mc-title", "Re:Zero Kasaneru")
book2.setAttribute("mc-subtitle", "Tappei Nagatsuki")
book2.setAttribute("mc-description", "Greed")
book2.setAttribute("mc-linkurl", "https://witchculttranslation.com/2019/02/11/kasaneru-if-re-repeating-life-in-another-world-from-zero/")
book2.setAttribute("mc-image", "https://img-9gag-fun.9cache.com/photo/aZyNDEz_460s.jpg")

book3.setAttribute("mc-title", "Re:Zero Oboreru")
book3.setAttribute("mc-subtitle", "Tappei Nagatsuki")
book3.setAttribute("mc-description", "Wrath")
book3.setAttribute("mc-linkurl", "https://witchculttranslation.com/2018/08/23/rezero-if-oboreru/")
book3.setAttribute("mc-image", "https://i.pinimg.com/originals/9b/36/8d/9b368d5c73afe99e7d5465a73c5e2c41.png")

book4.setAttribute("mc-title", "Re:Zero Ayamatsu")
book4.setAttribute("mc-subtitle", "Tappei Nagatsuki")
book4.setAttribute("mc-description", "Pride")
book4.setAttribute("mc-linkurl", "https://witchculttranslation.com/wp-content/uploads/2019/02/ayamatsu-april-fools-2017.pdf")
book4.setAttribute("mc-image", "https://i.imgur.com/7knPOyK_d.webp?maxwidth=760&fidelity=grand")

document.body.appendChild(a1)
document.body.appendChild(h1)
document.body.appendChild(book1)
document.body.appendChild(book2)
document.body.appendChild(book3)
document.body.appendChild(book4)

let bg = document.createElement("div")
bg.setAttribute("class", "gradient")
document.body.appendChild(bg)