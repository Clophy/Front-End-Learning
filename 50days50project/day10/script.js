let btn = document.querySelector(".btn")
let joke = document.querySelector(".joke")

btn.addEventListener("click",getJoke)




async function getJoke(){
    const config = {
    headers: {
      Accept: 'application/json',
    }}
    
    fetch("https://icanhazdadjoke.com", config).then(
        res =>{
           return res.json()

        }
    ).then(jas => {
        joke.innerHTML = jas.joke
    })
}
