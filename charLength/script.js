let text = document.querySelector("#text")
let total = document.querySelector("#total")
let remain = document.querySelector("#remain")

text.addEventListener("keyup",counter)

function counter(){
    length = text.value.length
    total.innerHTML = length
    remain.innerHTML = 50 - length
}