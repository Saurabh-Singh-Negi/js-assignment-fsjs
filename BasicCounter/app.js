const num = document.getElementById("number");
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");

count = 0;
num.innerText = count;

decrease.addEventListener("click", () => {
    count = count - 1;
    num.innerText = count;
});

increase.addEventListener("click", () => {
    count = count + 1;
    num.innerText = count;
});
