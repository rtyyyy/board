const board = document.querySelector("#board")
const squares_number = 1300;
const color = [ "#08d2ec" ," #0b7de9", "#5306e2 "," #06eca0","#be06ec"]

for(let i = 0 ; i < squares_number; i++ ){
const square = document.createElement("div")
square.classList.add("square")
square.addEventListener("mouseover", ()=>
setColor(square))
square.addEventListener("mouseleave", ()=>
removeColor(square))
board.append(square)
}
function setColor(element){
const color = getColor()
element.style.backgroundColor = color
element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
element.style.backgroundColor = "#1d1d1d"
element.style.boxShadow = `0 0 2px #000`
}
function getColor (){
const index = Math.floor(Math.random() * color.length)
return color[index]}