const box = document.querySelector("#box");
const mainBox = document.querySelector("#main-box");

mainBox.addEventListener("mousemove",  _.debounce(moveBox, 10));

function moveBox(event){
    const x = event.clientX;
    const y = event.clientY;

    box.style.left = x + "px";
    box.style.top = y + "px";
};