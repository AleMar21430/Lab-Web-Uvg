document.body.style.background = "rgb(250,250,250)"

let linker = document.createElement("a")
linker.href = "../index.nginx-debian.html";
linker.style.color = "rgb(200,200,200)";
linker.innerHTML = "Labs";
document.body.appendChild(linker);

const AmiyaCard= document.createElement("my-card");
AmiyaCard.setAttribute("card-Image", "https://media.tenor.com/3QNoEyOTw6sAAAAC/amiya-arknights.gif")
AmiyaCard.setAttribute("card-Title", "Amiya")
AmiyaCard.setAttribute("card-Subtitle", "Arknights")
AmiyaCard.setAttribute("card-Description", "Will Amiya become a savior or destroyer of all Terra? It's all up to you, Doctor. It's all up to you.")
AmiyaCard.setAttribute("link1", "Pop")
AmiyaCard.setAttribute("link2", "Amiya Dance")
AmiyaCard.setAttribute("action1", "https://media.tenor.com/mmdn7NdAq_oAAAAC/arknights-amiya.gif")
AmiyaCard.setAttribute("action2", "https://media.tenor.com/dfUTZDtXdw0AAAAC/arknights-amiya.gif")

AmiyaCard.setAttribute("width", "80em")
AmiyaCard.setAttribute("height", "50em")
AmiyaCard.setAttribute("bg-color", "rgb(150,150,250)")
AmiyaCard.setAttribute("border-color", "rgb(0,0,0)")
AmiyaCard.setAttribute("text-color", "rgb(0,0,0)")
AmiyaCard.setAttribute("link-color", "rgb(0,0,175)")
AmiyaCard.setAttribute("img-height", "35em")
AmiyaCard.setAttribute("img-shifty", "-5em")

const AmberCard = document.createElement("my-card");
AmberCard.setAttribute("card-Image", "https://media.tenor.com/UBavGnJ3ugAAAAAd/amber-genshin-impact.gif")
AmberCard.setAttribute("card-Title", "Amber")
AmberCard.setAttribute("card-Subtitle", "Genshin Impact")
AmberCard.setAttribute("card-Description", "Amber is an Outrider of the Knights of Favonius. In an age where Outriders are becoming obsolete, she continues on with her responsibilities.")
AmberCard.setAttribute("link1", "Roll")
AmberCard.setAttribute("link2", "Baron Bunny Dance")
AmberCard.setAttribute("action1", "https://media.tenor.com/KC3CYPw0FpQAAAAC/amber-genshinimpact-roll.gif")
AmberCard.setAttribute("action2", "https://media.tenor.com/WU3rWFX4lKIAAAAi/genshin-impact-amber.gif")

AmberCard.setAttribute("width", "50em")
AmberCard.setAttribute("height", "35em")
AmberCard.setAttribute("bg-color", "rgb(250,150,150)")
AmberCard.setAttribute("border-color", "rgb(0,0,0)")
AmberCard.setAttribute("text-color", "rgb(0,0,0)")
AmberCard.setAttribute("link-color", "rgb(175,0,0)")
AmberCard.setAttribute("img-height", "20em")
AmberCard.setAttribute("img-shifty", "-5em")

const AronaCard = document.createElement("my-card");
AronaCard.setAttribute("card-Image", "https://media.tenor.com/C3uY_LmPe5MAAAAC/blue-archive-arona.gif")
AronaCard.setAttribute("card-Title", "Arona")
AronaCard.setAttribute("card-Subtitle", "Blue Archive")
AronaCard.setAttribute("card-Description", "Arona is a self-proclaimed high-performance AI who serves as the OS of the Shittim Chest.")
AronaCard.setAttribute("link1", "Squishy")
AronaCard.setAttribute("link2", "POWER!!!")
AronaCard.setAttribute("action1", "https://media.tenor.com/Mrd6bSUj934AAAAd/arona-blue-archive.gif")
AronaCard.setAttribute("action2", "https://media.tenor.com/tMG5L0p59QcAAAAd/arona-push-ups.gif")

AronaCard.setAttribute("width", "40em")
AronaCard.setAttribute("height", "45em")
AronaCard.setAttribute("bg-color", "rgb(250,150,250)")
AronaCard.setAttribute("border-color", "rgb(0,0,0)")
AronaCard.setAttribute("text-color", "rgb(0,0,0)")
AronaCard.setAttribute("link-color", "rgb(175,0,175)")
AronaCard.setAttribute("img-height", "30em")

document.body.appendChild(document.createElement("my-card"));
document.body.appendChild(document.createElement("br"));
document.body.appendChild(AronaCard);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(AmberCard);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(AmiyaCard);