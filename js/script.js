let mySong = document.getElementById("mySong");
let icon = document.getElementById("icon");

icon.onclick = function(){
    if (mySong.paused){
        mySong.play();
        icon.src = "bi bi-pause-circle";

    }else{
        mySong.pause();
        icon.src = "bi bi-play-circle-fill";
         
    }

}