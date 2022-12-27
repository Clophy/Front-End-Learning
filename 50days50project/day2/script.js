const PREV = document.querySelector("#prev")
const NEXT = document.querySelector("#next")
const CIRCLE = document.querySelectorAll(".circle")
let counter = 1;


PREV.addEventListener("click", e => {
    counter -= 1;
    if(counter=== 0){counter+=1}
    let newID = `#c${counter}`
    let item = document.querySelector(newID)
    item.classList ="circle active"
    let lastID = `#c${counter + 1}`
    let prevItem = document.querySelector(lastID)
    prevItem.classList="circle"
    NEXT.removeAttribute("disabled")
    if(counter === 1 ){PREV.setAttribute("disabled","")}
})


NEXT.addEventListener("click", e => {
    counter += 1;
    if(counter === 5){counter=4}
    let newID = `#c${counter}`
    let item = document.querySelector(newID)
    item.classList ="circle active"
if(counter === 4 ){NEXT.setAttribute("disabled","")}
    PREV.removeAttribute("disabled")
})

