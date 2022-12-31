let hour = document.querySelector("#hour")
let minute = document.querySelector("#minute")
let second = document.querySelector("#second")
let pm = document.querySelector(".pm")


let set = setInterval(clock,1000)

function clock(){
let date = new Date;
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()

if(hours>12){
    hours = hours - 12
    pm.innerHTML="PM"
}else{
    pm.innerHTML="AM"
}

hours < 10 ? hours=`0`+ hours : hours
minutes < 10 ? minutes=`0`+ minutes : minutes
seconds < 10 ? seconds=`0`+ seconds : seconds



hour.innerHTML = hours
minute.innerHTML= minutes
second.innerHTML= seconds

}

