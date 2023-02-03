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