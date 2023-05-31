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
a.textContent = "Return"
h1.textContent = "Chapter 2"
p.textContent = `
	The subway city of Vort, home to the only known large human settlement. The vast gray, empty, dead caves that surrounded it having formed in the day sought were all she had ever known.
	The ramshackle alleys and jumbled streets that formed the poorer quarter within the walls were the only memories of her childhood.
	She was born in one of the most disgusting and oldest areas of the city. Having died during childbirth, her mother, and her father, who disappeared soon after, left her alone.
	They lived in a nicer part of the city, in the third district, but the back of the building was as disgusting as the worst parts of the city, the fourth and fifth districts.
	Night was approaching. The few outside lights in the city began to come on, as only the first and second districts were allowed to have street lighting. Since they were in the third district, only interior lights were allowed. For the past two years, every day had been the same. The moment the bioplants turned off their light, it was time to sleep and hope they didn't come.
	He wandered through the corridors, the light from the plants slowly dimmed illuminating his path. The wooden floors creaked with every step giving it a gloomy air.
	- "The other children have told me you don't believe in stars"-.
	It was true, it was stupid to believe such things existed. No one had ever seen one and yet everyone believed in them. Having lived for four years in the dark with no hope of survival taught one hard lessons. Even as a six-year-old she considered herself more experienced than most adults, and being beaten by life taught her more about the world than anything else. People believed in the stars, in gods, harboring the hope of seeing them someday, but she was no longer capable of hope.
	-I'm talking to you...".
	The boy came over and gave her a shove, knocking her to the ground.
	-Children from the orphanage are not welcome here, get out!
	She shook off her dress and stood up, surrounded by three boys a little older than she was not sure what to do.
`
a1.setAttribute("href", "./story.html")
a1.textContent = "To be continued..."
li1.appendChild(a1)
a2.setAttribute("href", "./story.html")
a2.textContent = "To be continued..."
li2.appendChild(a2)
ul.appendChild(li1)
ul.appendChild(li2)
h3.appendChild(ul)
span.setAttribute("for", "R")
span.textContent = "Progress: "
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