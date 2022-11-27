import "./index.html";
import "./index.css";



let video = document.querySelector(".looney__video");
let sbutton = document.querySelector(".sound__button");
const soundVoice = document.querySelector(".sound__voice");


sbutton.addEventListener('click',function () {
    video.muted = false;
    soundVoice.classList.toggle("sound__voice__alarm");
})










