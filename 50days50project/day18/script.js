const arrow = document.querySelectorAll(".arrow")
const container = document.querySelector(".container")


arrow.forEach(e => e.addEventListener("click",change))

function change(){
  container.style= `background-image: url("https://picsum.photos/19${(Math.floor(Math.random()*20)+10)}/1080");`
}

console.log()