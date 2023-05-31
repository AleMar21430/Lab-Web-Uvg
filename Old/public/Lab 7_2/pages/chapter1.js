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
let br1 = document.createElement("br")
let span = document.createElement("span")
let progress = document.createElement("progress")

a.setAttribute("href", "../index.html")
a.textContent = "Return"
h1.textContent = "Prologue: Morning Star"
p.textContent = `
There are no stars. 

Even at the age of six she knew that much. 

The townsfolk always told the same old story. 

Humans had existed for hundreds of centuries, they thrived, populating the land and expanding their borders. They lived in big societies... massive cities that spanned hundreds of kilometers wide, where they led comfortable, happy lives. 

Families. 
They went on trips, had festivities and shared every moment together.
The children played with their friends, played in parks and in their home, with their parents, living a life without worries.  

But life is a fragile thing. 

And as all things that rise, they will eventually fall. 

The forsought day came, when the human’s rule over the planet ended. 

It is said that on that day, the sky fell. Shining stars of blue and yellow came crashing onto earth, erasing everything in their path, ending life as we know it. 

But not everything was lost, for life, though designed to end, is resilient, and with the loss of the old, new life rose from the ashes, settling on earth and starting a new era. 

The strong became weak, the intelligent, naive. Humans had entered a time where the few survivors had to learn to fight, or die in the wild.

Die ?

Why live ?

Stars aren’t real...

And if they were, she’d never get to see them.

To see the sky, or feel the sun's warmth.

People are made of stardust, and it was the same stars that once made them, the ones that had brought them to their knees.

`
a1.setAttribute("href", "./chapter2.html")
a1.textContent = "Next Chapter"
li1.appendChild(a1)
ul.appendChild(li1)
h3.appendChild(ul)
span.setAttribute("for", "R")
span.textContent = "Progress: "
progress.setAttribute("id", "R")
progress.setAttribute("max", "100")
progress.setAttribute("value", "50")
span.appendChild(progress)
span.appendChild(document.createTextNode(" 50%"))

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