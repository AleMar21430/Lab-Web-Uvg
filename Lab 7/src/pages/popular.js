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
h1.textContent = "Popular Books"

book1.setAttribute("mc-title", "Shingeki no Kyojin")
book1.setAttribute("mc-subtitle", "Hajime Isayama")
book1.setAttribute("mc-description", "---")
book1.setAttribute("mc-linkurl", "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin")
book1.setAttribute("mc-image", "https://cdn.myanimelist.net/images/anime/10/47347.jpg")
book1.setAttribute("mc-img-shifty", "-200px")

book2.setAttribute("mc-title", "Violet Evergarden")
book2.setAttribute("mc-subtitle", "Kana Akatsuki")
book2.setAttribute("mc-description", "---")
book2.setAttribute("mc-linkurl", "https://myanimelist.net/anime/33352/Violet_Evergarden")
book2.setAttribute("mc-image", "https://cdn.myanimelist.net/images/anime/1795/95088.jpg")
book2.setAttribute("mc-img-shifty", "-100px")

book3.setAttribute("mc-title", "Cyberpunk: Edgerunners")
book3.setAttribute("mc-subtitle", "CDPR")
book3.setAttribute("mc-description", "---")
book3.setAttribute("mc-linkurl", "https://myanimelist.net/anime/42310/Cyberpunk__Edgerunners")
book3.setAttribute("mc-image", "https://cdn.myanimelist.net/images/anime/1818/126435.jpg")
book3.setAttribute("mc-img-shifty", "-100px")

book4.setAttribute("mc-title", "Made in Abyss")
book4.setAttribute("mc-subtitle", "Akihito Tsukushi")
book4.setAttribute("mc-description", "---")
book4.setAttribute("mc-linkurl", "https://myanimelist.net/anime/34599/Made_in_Abyss")
book4.setAttribute("mc-image", "https://cdn.myanimelist.net/images/anime/6/86733.jpg")
book4.setAttribute("mc-img-shifty", "-50px")

document.body.appendChild(a1)
document.body.appendChild(h1)
document.body.appendChild(book1)
document.body.appendChild(book2)
document.body.appendChild(book3)
document.body.appendChild(book4)

let bg = document.createElement("div")
bg.setAttribute("class", "gradient")
document.body.appendChild(bg)