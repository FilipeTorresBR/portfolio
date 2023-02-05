const audio = new Audio();
audio.src = "assets/sound/joey-easteregg.mp3"

function toogleEaster() {
    var element = document.getElementById("easteregg-btn");
    element.classList.toggle("show");
}
function checkLocalStorage(){
    let number = localStorage.getItem('visitNumber');
    if(number == 0){
        toogleEaster();
    }
    else{
        localStorage.setItem('visitNumber', 0);
    }
}

window.onload = checkLocalStorage;

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}

    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}
