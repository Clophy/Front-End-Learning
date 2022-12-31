let btnDOM = document.querySelector("button")


btnDOM.addEventListener("mouseover",position)

function position(event){
   let x = event.pageX - btnDOM.offsetLeft
   let y = event.pageY - btnDOM.offsetTop

   btnDOM.style.setProperty("--xPosition", x + "px")
   btnDOM.style.setProperty("--yPosition", y +"px")
}