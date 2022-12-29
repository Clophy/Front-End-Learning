const mainDOM = document.querySelector(".main")
const inputDOM = document.querySelector("input")



async function baran(){
    for(i=1;i<400;i++){
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(response=> response.json())
    .then(data => api = data)
     const newElement = document.createElement("div")
     const newImg = document.createElement("img")
     const newTitle = document.createElement("div")
     const newType = document.createElement("div")
     newElement.classList="card"
     newTitle.classList="title"
     newType.classList="description"

     mainDOM.append(newElement)

     newImg.src = api.sprites.front_default
     newElement.append(newImg)

     newTitle.innerHTML= api.name.toUpperCase()
     newElement.append(newTitle)
    
     newType.innerHTML = api.types[0].type.name.toUpperCase()
     newElement.append(newType)

     
     inputDOM.addEventListener("keyup", findIt)

     let title = document.querySelectorAll(".title")
     function findIt(e){
        let input = inputDOM.value.toUpperCase()
       title.forEach(item => {
        item.innerHTML.search(input) !== -1 ? newElement.style.display="" : newElement.style.display="none"
       })
        
    }
    







    }
}

baran()








