// let takeClick = document.querySelectorAll(".img-card")


// takeClick.forEach(active => active.addEventListener("click", addClass))

// function addClass(){
//     takeClick.forEach(a=>a.classList="img-card")
//     this.classList="img-card active"
// }







let imgDOM = document.querySelectorAll(".img-card")


imgDOM.forEach(e => e.addEventListener("click", active))

function active(){
    imgDOM.forEach(e => e.classList ="img-card")
    this.classList = "img-card active"
}















































