
const button = document.getElementById("Button");
const video = document.getElementById("myVideo");

button.onclick = function(){
    if (video.paused){
        video.play();
        button.innerHTML = ("Pause");
    }
    else{
        video.pause();
        button.innerHTML = ("Play");
    }
}