let firstNum = document.querySelector(".firstNum")
let secondNum = document.querySelector(".secondNum")
let score = document.querySelector("#score")
let input = document.querySelector("#input")
let submit = document.querySelector("#submit")


let num1=Math.floor((Math.random()*9)+1)
let num2=Math.floor((Math.random()*9)+1)
firstNum.innerHTML = num1   
secondNum.innerHTML = num2


window.addEventListener("keyup", enter => {
    enter.key==="Enter" ? calc() : ""
})
submit.addEventListener("click",calc)


function calc(){
    if(input.value == num1 * num2){
        score.innerHTML = Number(score.innerHTML) + 1
        num1=Math.floor((Math.random()*9)+1)
        num2=Math.floor((Math.random()*9)+1)
        firstNum.innerHTML = num1   
        secondNum.innerHTML = num2
        input.value=""
    }
    else{
        score.innerHTML = Number(score.innerHTML) - 1
        num1=Math.floor((Math.random()*9)+1)
        num2=Math.floor((Math.random()*9)+1)
        firstNum.innerHTML = num1   
        secondNum.innerHTML = num2
        input.value=""
    }

    score.innerHTML>0 ? score.style.color="green" : score.style.color="red"
}