const inp = document.getElementById("text");
const btn = document.getElementById("convert-btn");
const camel = document.getElementById("camel-case");
const pascal = document.getElementById("pascal-case");
const snake = document.getElementById("snake-case");
const screaming_snake = document.getElementById("screaming-snake-case");
const kebab = document.getElementById("kebab-case");
const screaming_kebab = document.getElementById("screaming-kebab-case");

let text = "";
inp.addEventListener("change", ()=> {
    text = inp.value;
    CamelCase();
    PascalCase();
    SnakeCase();
    ScreamingSnakeCase();
    KebabCase();
    ScreamingKebabCase();
})

function CamelCase() {
    let res = text.split(" ");
    for(let i=1; i<res.length; i++) {
        res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1);
    }

    res = res.join("");
    camel.innerText = res;
}

function PascalCase() {
    let res = text.split(" ");
    for(let i=0; i<res.length; i++) {
        res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1);
    }

    res = res.join("");
    pascal.innerText = res;
}

function SnakeCase() {
    let res = text;
    res = res.replace(/\s/g, "_");
    snake.innerText = res;
}
function ScreamingSnakeCase() {
    let res = text.toUpperCase();
    res = res.replace(/\s/g, "_");
    screaming_snake.innerText = res;
}
function KebabCase() {
    let res = text;
    res = res.replace(/\s/g, "-");
    kebab.innerText = res;
}
function ScreamingKebabCase() {
    let res = text.toUpperCase();
    res = res.replace(/\s/g, "-");
    screaming_kebab.innerText = res;
}




