let toggle = document.querySelector("#toggle")
let nav = document.querySelector("#nav")

toggle.addEventListener("click", e=>{
    nav.classList=="active" ? nav.classList.remove("active") : nav.classList.add("active")
})