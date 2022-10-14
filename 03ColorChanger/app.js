const btn = document.getElementById("button");
const changeColor = document.getElementById("canvas");

const randomColor = () => {
    const value = "0123456789ABCDEF";
    let hexCode = "#";

    for(let i=0; i<6; i++) {
        let num = value[Math.floor(Math.random() * 16)];
        hexCode += num;
    }

    return hexCode;
}

btn.addEventListener('click', () => {
    changeColor.style.backgroundColor = randomColor();
})


