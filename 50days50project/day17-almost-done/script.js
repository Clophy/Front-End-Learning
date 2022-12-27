const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=380252036c0c9514576ad6b6cd12feb1&page=2";
const IMG_PATH = "https://image.tmdb.org/t/p/w300";
const SEARCH_API ="https://api.themoviedb.org/3/search/movie?api_key=380252036c0c9514576ad6b6cd12feb1&query=";

let container = document.querySelector(".container");
let form = document.querySelector("#form");
let input = document.querySelector("#search");
let result;

async function getApi(url) {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => getMovies(data.results));
}

function getMovies(data) {
  data.forEach((data) => {
    let movies = document.createElement("div");
    movies.classList.add("movie-box");
    movies.innerHTML = `
    <h2>${data.title}</h2>
    <img src="${IMG_PATH + data.poster_path}">
    <p>${data.overview}</p>
    `;
    container.append(movies);
  });
}

getApi(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = input.value;
  if (searchTerm && searchTerm !== "") {
    kol = SEARCH_API + searchTerm
    getApi(kol);

    input.value = "";
} 
  else {
    window.location.reload();
  }
});

