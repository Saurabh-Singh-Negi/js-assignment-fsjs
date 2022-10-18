const inp = document.getElementById("text");
const btn = document.getElementById("convert-btn");
const snake = document.getElementById("snake-case");

let text = "";
inp.addEventListener("change", () => {
    text = inp.value;
    text = text.toLowerCase();
})

btn.addEventListener("click", () => {
    //camelCase
    console.log(text.join(" "));


    // snake case
    snake.innerText = text.toLowerCase();

})