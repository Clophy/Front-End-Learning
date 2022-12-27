let button = document.querySelectorAll("button")
let mp3 = document.querySelectorAll("audio")

button.forEach(a => a.addEventListener("click" ,selam))

function selam(){

    mp3.forEach(e => {
        if(this.className === e.id){
            e.play()
        }
    })

}