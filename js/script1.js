const slide = document.querySelector(".slider__input");
const img = document.querySelector(".slider__image");

slide.addEventListener("input", changeSize);

function changeSize() {
    const slideValue = Number(slide.value);

    const width = slideValue * 6 + "px";
    const height = slideValue * 6 + "px";

    img.style.width = width;
    img.style.height = height;
};