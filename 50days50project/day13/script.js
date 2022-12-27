let area = document.querySelector("textarea");
let boxes = document.querySelector(".boxes");
let index = ""

area.addEventListener("keyup", value)

function value(){
    index = this.value

}

window.addEventListener("keyup", createElement =>{
    if(createElement.key==="Enter"){
        let element = document.createElement("div")
        element.classList ="btn"
        element.innerHTML = `${index}`
        boxes.append(element)
        area.value = ""
    }
    else if(createElement.key===","){
        let element = document.createElement("div")
        element.classList ="btn"
        index = index.replace(",","")
        element.innerHTML = `${index}`
        boxes.append(element)
        area.value = ""
    }
})