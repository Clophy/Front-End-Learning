window.addEventListener("keydown",selam)

function selam(a){
    let key = document.querySelector("#event-key")
    key.innerHTML =`${a.key}`
    let keycode = document.querySelector("#event-key-code")
    keycode.innerHTML =`${a.keyCode}`
    let eventCode = document.querySelector("#event-code")
    eventCode.innerHTML =`${a.code}`
}


