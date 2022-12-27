const CONTAINER = document.querySelector(".container")
const ROTATE = document.querySelector(".rotate-container")
const BTN = document.querySelector(".btn")

BTN.addEventListener("click", e => {
     if(BTN.childNodes[0].classList.value==="fas fa-bars"){
    CONTAINER.classList.add("show")
    ROTATE.classList.remove("display")
    BTN.childNodes[0].classList = "fas fa-times"
    }
    else if(BTN.childNodes[0].classList.value==="fas fa-times"){
        CONTAINER.classList.remove("show")
        ROTATE.classList.add("display")
        BTN.childNodes[0].classList = "fas fa-bars"
        }
})
