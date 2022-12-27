const LEFT = document.querySelector(".left-side")
const RIGHT = document.querySelector(".right-side")

LEFT.addEventListener("mouseenter", a)
LEFT.addEventListener("mouseleave", r)
RIGHT.addEventListener("mouseenter", a1)
RIGHT.addEventListener("mouseleave", r)

function a(){
    LEFT.classList.add("seven")
    RIGHT.classList.add("thirty")
}

function a1(){
    console.log("geldi")
    RIGHT.classList.add("seven")
    LEFT.classList.add("thirty")
}

function r(){
    console.log("geldi")
    LEFT.classList.remove("seven")
    RIGHT.classList.remove("seven")
    LEFT.classList.remove("thirty")
    RIGHT.classList.remove("thirty")
}