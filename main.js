let ustawieniaButton = document.getElementById('ustawieniaButton')
let zmienkolor = document.getElementById('zmienkolor')
let colorff6699 = document.getElementById('colorff6699')
let color0066ff = document.getElementById('color0066ff')
let colorcc3300 = document.getElementById('colorcc3300')
let randomowykolorek = document.getElementById('randomowykolor')
function zmianakoloru() {
    colorff6699.style.opacity = 1
    color0066ff.style.opacity = 1
    colorcc3300.style.opacity = 1
    randomowykolorek.style.opacity = 1
}
let sekcjatytul = document.getElementsByClassName('sekcjatytul') /*BACKGROUND-COLOR*/
let forumbignapis = document.getElementById('forumbignapis') /*TEXT-DECORATION UNDERLINE*/
let ahover = document.getElementsByClassName('ahover','ahover1','ahover2','ahover3') /*COLOR*/
let elements = sekcjatytul
let elements2 = ahover
let forum = document.getElementById('forum')
function randomowykolor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    for(let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = '#' + randomColor
    }
    forumbignapis.style.textDecoration = "underline #" + randomColor 
    forum.style.color = "#" + randomColor
}