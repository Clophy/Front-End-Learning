let open = document.querySelectorAll("i")

open.forEach(e => {
    e.addEventListener("click", selam)
    function selam(){
        if(this.className==="fas fa-times"){
            this.nextSibling.classList.add("display")
            this.classList="fa-solid fa-arrow-down"
            this.parentElement.classList.remove("img")
            
        }
        else if(this.className==="fa-solid fa-arrow-down"){
            this.nextSibling.classList.remove("display")
            this.classList="fas fa-times"
            this.parentElement.classList.add("img")
        }
        
    }
})