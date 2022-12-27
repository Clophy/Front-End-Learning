const ICON = document.querySelector("#icon")
const INPUT = document.querySelector("#input")
ICON.addEventListener("click",e=>{
    if(INPUT.classList.value==="display"){
        INPUT.classList.remove("display")
    }
    else if(INPUT.classList.value===""){
        INPUT.classList.add("display")
    }
})