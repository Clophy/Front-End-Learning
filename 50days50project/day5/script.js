const BLUR = document.querySelector(".container")

// BLUR.style =`filter: blur(0px); transition: filter 3s;`

const COUNTER = document.querySelector(".counter")

let set = setInterval(counter,20)
let i = 101;
let x = 0;
function counter(){
    i--
    x++
    if(i===0 || x===101){clearInterval(set)}
    BLUR.style=`filter:blur(${i}px)`
    COUNTER.innerHTML=`${x}%`
    COUNTER.style=`opacity:${i}%`
    if(x===101){COUNTER.style=`display:none;position:absolute;`}
}