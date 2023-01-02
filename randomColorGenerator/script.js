let cards = document.querySelector(".cards")
let button = document.querySelector("button")
let plan =8;

button.addEventListener("click",plus => {
    getcolor()
})

function getcolor(){
    for(i=0;i<plan;i++){
        colorGenerator()
    }
}

getcolor()



function colorGenerator(){
    
    let hex= "0123456789ABCDEF"
    let hex1= hex[Math.floor(Math.random()* hex.length)]
    let hex2= hex[Math.floor(Math.random()* hex.length)]
    let hex3= hex[Math.floor(Math.random()* hex.length)]
    let hex4= hex[Math.floor(Math.random()* hex.length)]
    let hex5= hex[Math.floor(Math.random()* hex.length)]
    let hex6= hex[Math.floor(Math.random()* hex.length)]

    let result=`#${hex1}${hex2}${hex3}${hex4}${hex5}${hex6}`

    let card = document.createElement("div")
    card.classList="card"
    card.style.background= result
    card.innerHTML= result
    cards.append(card)

}