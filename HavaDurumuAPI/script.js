let city = document.querySelector("#city")
let degrees = document.querySelector("#degrees")
let cityname = document.querySelector("#cityname")
let form = document.querySelector("#form")
let durum =""



form.addEventListener("submit",e)

async function e(item){
    item.preventDefault()
    await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname.value}&limit=1&appid=c9251ededf4fe4a0b605f963e3a1bafe`)
    .then(r => r.json())
    .then(data => durum = data)
    lat= durum[0].lat
    lon= durum[0].lon

    getcity(lat,lon)
}



async function getcity(lat,lon){
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c9251ededf4fe4a0b605f963e3a1bafe&units=metric`)
    .then(r => r.json())
    .then(data => hava = data)
    city.innerHTML = hava.name
    degrees.innerHTML =`${hava.main.temp}°`
}