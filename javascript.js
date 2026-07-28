// ================= Slider =================

const track = document.querySelector(".slider-track");
const images = document.querySelectorAll(".slider-track img");
const prev = document.querySelector(".slider-prev");
const next = document.querySelector(".slider-next");
const dotsContainer = document.querySelector(".slider-dots");

let index = 0;

// Create dots
images.forEach((img, i) => {

    const dot = document.createElement("span");
    dot.classList.add("dot");

    if(i === 0){
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
        index = i;
        updateSlider();
    });

    dotsContainer.appendChild(dot);

});

const dots = document.querySelectorAll(".dot");

// Update Slider
function updateSlider(){

    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));

    dots[index].classList.add("active");
}

// Next Button
next.addEventListener("click", () => {

    index++;

    if(index >= images.length){
        index = 0;
    }

    updateSlider();

});

// Previous Button
prev.addEventListener("click", () => {

    index--;

    if(index < 0){
        index = images.length - 1;
    }

    updateSlider();

});

// Auto Slide

setInterval(() => {

    index++;

    if(index >= images.length){
        index = 0;
    }

    updateSlider();

},3000);


// ================= Accordion =================

const accordion = document.querySelectorAll(".accordion");

accordion.forEach(button => {

    button.addEventListener("click", function(){

        const panel = this.nextElementSibling;

        if(panel.style.display === "block"){
            panel.style.display = "none";
        }
        else{
            panel.style.display = "block";
        }

    });

});