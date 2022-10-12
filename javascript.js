function gameEnded(){
    sleepingsound.pause();
    audiosound.pause();
    jumpscaresound.play();
    var but = document.getElementById("Endgame");
    but.style.display = "block";
    clearInterval(downloadTimer);
    var take = document.getElementById("Gameatas");
    var bonehide = document.getElementById("bones");
    bonehide.style.display = "none";
    take.style.display = "none";
    var gambar = document.getElementById("anjing");
    gambar.setAttribute("src","assets/scarydwg.jpeg");
    gambar.style.animation= "shake 0.5s";

}