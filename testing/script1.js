let play=document.getElementById("play");
let blah=document.getElementById("blah");
let audio=new Audio("http://127.0.0.1:3000/songs/KeshavaMadhava.m4a");
blah.addEventListener("click", ()=>{
    audio.play();
    play.innerHTML="pause";
})

play.addEventListener("click", ()=>{
    if(audio.paused){
        console.log("playing");
        audio.play();
        play.innerHTML="pause";
    }
    else{
        console.log("pausing")
        audio.pause();
        play.innerHTML="play";
    }
})