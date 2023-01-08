const button = document.querySelector("button")
const display = document.querySelector(".display")
const inputs = document.querySelectorAll("input")
const email = document.querySelector("#email")


button.addEventListener("click",(e)=>{
    e.preventDefault()
    inputs.forEach(input=> {
          
        if(input.value.length > 0){
            input.nextElementSibling.style.display="none"
            input.nextElementSibling.nextElementSibling.style.display="none"
        }
        else{
            input.nextElementSibling.style.display="inline"
            input.nextElementSibling.nextElementSibling.style.display="inline"
        }
        
    })
    if(email.value.search(".com") === -1 || email.value.search("@") === -1){
        email.nextElementSibling.style.display="inline"
        email.nextElementSibling.nextElementSibling.style.display="inline"
    }
})