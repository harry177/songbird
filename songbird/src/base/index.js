import "./index.html";
import "./index.css";



let video = document.querySelector(".looney__video");
let sbutton = document.querySelector(".sound__button");
const soundVoice = document.querySelector(".sound__voice");


sbutton.addEventListener('click',function () {
    if (video.muted === true) {
        video.muted = false;
      }
      else if (video.muted === false) {
        video.muted = true;
      }
    soundVoice.classList.toggle("sound__voice__alarm");
})










