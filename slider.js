const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div)
}
const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "transparent";
    });
};

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        resetBg();
        slider.style.transform = `translate(-${i * 650}px)`;
        slideNumber = i + 1;
        button.style.backgroundColor = "white";
    });
});

/*----right arrow----*/

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 650}px)`;
    slideNumber++;
};
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

right.addEventListener("click", () => {
    if (slideNumber < length) {
        nextSlide();
    } else {
        getFirstSlide();
    }
    resetBg();
    buttons[slideNumber - 1].style.backgroundColor = "white";
});
/*slideNumber < length ? nextSlide() : prevSlide();......same as the above */

/*----left arrow----*/

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber-2) * 650}px)`;
    slideNumber--;
}

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 650}px)`;
    slideNumber = length;
}

left.addEventListener("click", () => {
    if (slideNumber > 1) {
        prevSlide();
    } else {
        getLastSlide();
    }
    resetBg();
    buttons[slideNumber - 1].style.backgroundColor = "white";
});