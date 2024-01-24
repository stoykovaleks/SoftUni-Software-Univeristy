import { showView } from "./util.js";
import { spinner } from "./util.js";

const homeSection = document.querySelector("#home-page");
const catalog = homeSection.querySelector("#movie .card-deck.d-flex.justify-content-center")

export function homePage() {
    showView(homeSection);
    displayMovies();
}

async function displayMovies(){
    catalog.replaceChildren(spinner());

    const movies = await getMovies();

    catalog.replaceChildren(...movies.map(createMoviePreview));
}

function createMoviePreview(movie){
    const element = document.createElement("div");
    element.className = "card mb-4";
    element.innerHTML = ``   
}

async function getMovies() {
    const response = await fetch("http://localhost:3030/data/movies");
    const data = response.json();

    return data;
}

window.getMovies = getMovies;