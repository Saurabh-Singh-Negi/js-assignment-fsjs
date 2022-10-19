const btn = document.getElementById("jokeBtn");
const joke = document.getElementById("joke");

const url = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", ()=> {
    fetch(url)
    .then(response => response.json())
    .then(json => joke.innerText = json.value);
})