import "./game.html";
import "./game.css";

import "./../../assets/sounds/daffy-duck-hoo-hoo.mp3";
import "./../../assets/sounds/porky-pig-all-folks.mp3";
import "./../../assets/sounds/pole.mp3";


const playList = [
    {      
      title: 'Duffy Duck',
      src: "./../../assets/sounds/daffy-duck-hoo-hoo.mp3",
      duration: '00:39',
      picture: "./../../assets/images/duffy-duck.jpg"
    },  
    {
      title: 'Porky Pig',
      src: "./../../assets/sounds/porky-pig-all-folks.mp3",
      duration: '01:37',
      picture: "./../../assets/images/porky-pig"
    }
  ]


  const playerButton = document.querySelector(".player__button");
  const statusPlay = document.querySelector(".button__play");
  const statusPause = document.querySelector(".button__pause");

  const heroesContainer = document.querySelector(".answers");
  const activeSong = heroesContainer.childNodes;

  playerButton.addEventListener("click", () => {
    playerButton.classList.toggle("button__play");
    playerButton.classList.toggle("button__pause");
  })

  let isPlay = false;

  let playNum = 0;

  const audio = new Audio();

  function playAudio() {
    audio.src = "assets/sounds/assets/sounds/daffy-duck-hoo-hoo.mp3";
    audio.currentTime = 0;

    if (isPlay === false) {
        audio.play();
        isPlay = true;
      } else if (isPlay === true) {
        audio.pause();
        isPlay = false;
    }

    console.log(audio.src);
  }

  playerButton.addEventListener("click", playAudio);
  

  console.log(audio.src);