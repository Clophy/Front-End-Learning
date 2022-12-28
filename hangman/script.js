let sehir =["Samsun","Bursa","İzmir","İstanbul","Osmaniye"]
let esya =["Bilgisayar","Mouse","Klavye","Monitör"]
let gida =["Çikolata","Peynir","Domates"]
let kategory =[sehir,esya,gida]
let kategoryDOM = document.querySelector("#kategory")
let guessDOM = document.querySelector(".guess")
let buttonDOM = document.querySelector("button")
let keysDOM = document.querySelectorAll(".active")
let imgDOM = document.querySelector("img")
let containerDOM = document.querySelector(".container")

let first = kategory[Math.floor(Math.random() * kategory.length)]
let second = first[Math.floor(Math.random() * first.length)]
let span;

function generator(){
    for(i=0;i<second.length;i++){
        span = document.createElement("span")
        guessDOM.append(span)
    }
}
generator()
console.log(second)

if(first=== kategory[0]){
    kategoryDOM.innerHTML= "Şehir"
}
if(first=== kategory[1]){
    kategoryDOM.innerHTML= "Eşya"
}
if(first=== kategory[2]){
    kategoryDOM.innerHTML= "Gıda"
}

buttonDOM.addEventListener("click",reload)

function reload(){
    location.reload()
}


keysDOM.forEach(e => e.addEventListener("click",reverseDiv))
i = 0;
function reverseDiv(){
    this.classList ="passive"
    this.classList.remove="active"
    littleSecond = second.toLocaleLowerCase()
    littleHTML = this.innerHTML.toLocaleLowerCase()
    let index = littleSecond.indexOf(littleHTML)
    let lastIndex = littleSecond.lastIndexOf(littleHTML)
    if(index !== -1 || lastIndex !== -1){
    guessDOM.childNodes[index].innerHTML = littleHTML.toLocaleUpperCase()
    guessDOM.childNodes[lastIndex].innerHTML = littleHTML.toLocaleUpperCase()
    }
    else{
        
        if(i<11){
            i += 1
            imgDOM.src=`./img/${i}.png`
        }
        if(i===11){
            imgDOM.src=`./img/11.png`
            keysDOM.forEach(e => e.classList="passive")
            popup()
    
        }
    }
}


function popup(){
    let popap = document.createElement("div")
    popap.innerHTML = "KAYBETTİN"
    popap.classList="popup"
    containerDOM.append(popap)
}
