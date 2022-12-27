const BOX = document.querySelectorAll(".box")


window.addEventListener("scroll", e=>{
    BOX.forEach(item => item.classList.add("show"))
})