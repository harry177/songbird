import "./game.html";
import "./game.css";

import "./../../assets/sounds/daffy-duck-hoo-hoo.mp3";
import "./../../assets/sounds/porky-pig-all-folks.mp3";
import "./../../assets/sounds/bugs-bunny.mp3";
import "./../../assets/sounds/taz-tasmanian-devil.mp3";
import "./../../assets/sounds/road-runner.mp3";
import "./../../assets/sounds/tweety-canary.mp3";


import "./../../assets/icons/pause.svg";
import "./../../assets/icons/play.svg";

import "./../../assets/images/question.jpg";

import "./../../assets/images/bugs-bunny.jpg";
import "./../../assets/images/daffy-duck.jpg";
import "./../../assets/images/porky-pig.jpg";
import "./../../assets/images/road-runner.jpg";
import "./../../assets/images/taz.jpg";
import "./../../assets/images/tweety.jpg";


const playList = [
    {      
      name: "Утка Даффи",
      title: "Daffy Duck",
      src: "assets/sounds/daffy-duck-hoo-hoo.mp3",
      duration: "00:04",
      picture: "url(assets/images/daffy-duck.jpg)",
      description: "oooooooo"
    },  
    {
      name: "Поросенок Порки",
      title: "Porky Pig",
      src: "assets/sounds/porky-pig-all-folks.mp3",
      duration: "00:03",
      picture: "url(assets/images/porky-pig.jpg)",
      description: "iiiiiiiiii"
    },
    {
      name: "Багз Банни",
      title: "Bugs Bunny",
      src: "assets/sounds/bugs-bunny.mp3",
      duration: "00:03",
      picture: "url(assets/images/bugs-bunny.jpg)",
      description: "99999999"
    },
    {
      name: "Таз - тасманский дьявол",
      title: "Taz - tasmanian devil",
      src: "assets/sounds/taz-tasmanian-devil.mp3",
      duration: "00:05",
      picture: "url(assets/images/taz.jpg)",
      description: "zzzzzzzz"
    },
    {
      name: "Бегун",
      title: "Road Runner",
      src: "assets/sounds/road-runner.mp3",
      duration: "00:01",
      picture: "url(assets/images/road-runner.jpg)",
      description: "uuuuuuuuuu"
    },
    {
      name: "Канарейка Твити",
      title: "Tweety",
      src: "assets/sounds/tweety-canary.mp3",
      duration: "00:03",
      picture: "url(assets/images/tweety.jpg)",
      description: "eeeeeeeeeee"
    }

  ]


  const playerButton = document.querySelector(".player__button");
  const statusPlay = document.querySelector(".button__play");
  const statusPause = document.querySelector(".button__pause");

  let seekSlider = document.querySelector(".seek__slider");
  let curr_time = document.querySelector(".current-time");
  let total_duration = document.querySelector(".total-duration");

  let volumeSlider = document.querySelector(".volume__slider");

  const heroesContainer = document.querySelector(".answers");
  const activeSong = heroesContainer.childNodes;

  const heroName = document.querySelector(".hero__name");
  const heroPicture = document.querySelector(".hero__picture");

  const heroText = document.querySelector(".description__footer");

  const nextQuestion = document.querySelector(".next__question");

  nextQuestion.setAttribute("disabled", true);

  const descriptionPicture = document.querySelector(".description__header__picture");



  
  

  playerButton.addEventListener("click", () => {
    playerButton.classList.toggle("button__play");
    playerButton.classList.toggle("button__pause");
  })


  // Mixed playlist

  let mixedPlaylist = Array.from(playList);

  function shuffle() {
    mixedPlaylist.sort(() => Math.random() - 0.5);
  };

  window.onload = shuffle();


  // Player

  let isPlay = false;

  let playNum = 0;

  let updateTimer;

  const audio = new Audio();

  function playAudio() {
    audio.src = mixedPlaylist[playNum].src;
    audio.currentTime = 0;

    if (isPlay === false) {
        clearInterval(updateTimer);
        audio.play();
        isPlay = true;
        resetValues();
        updateTimer = setInterval(seekUpdate, 1000);
      
    
      } else if (isPlay === true) {
        audio.pause();
        isPlay = false;
    }

    console.log(audio.src);
  }


 

  playerButton.addEventListener("click", playAudio);


  function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seekSlider.value = 0;
  }

  

  seekSlider.onchange = function() {
    audio.currentTime = audio.duration * (seekSlider.value / 100);
  }

  volumeSlider.onchange = function() {
    audio.volume = volumeSlider.value / 100;
  }

  


  function seekUpdate() {
    let seekPosition = 0;
   
    // Check if the current track duration is a legible number
    if (!isNaN(audio.duration)) {
      seekPosition = audio.currentTime * (100 / audio.duration);
      seekSlider.value = seekPosition;
   
      // Calculate the time left and the total duration
      let currentMinutes = Math.floor(audio.currentTime / 60);
      let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
      let durationMinutes = Math.floor(audio.duration / 60);
      let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);
   
      // Add a zero to the single digit time values
      if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
      if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
      if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
      if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
   
      // Display the updated duration
      curr_time.textContent = currentMinutes + ":" + currentSeconds;
      total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
  }


  

 


  
  

  // Quiz

  let counter = 0;

  let step = 6;

  let scoreContainer = document.querySelector(".results__block__score");

  scoreContainer.textContent = counter;

  function content() {
    playList.forEach(el => {
      const singer = document.createElement("div");
      singer.classList.add("variant");
      singer.textContent = `${el.title}`;
      heroesContainer.append(singer);

    })
  }
  content();

  const variant = document.querySelector(".variant");


  heroesContainer.addEventListener("click", function(el) {
    if (el.target.classList.contains("variant") && el.target.textContent === mixedPlaylist[playNum].title) {
      el.target.classList.add("variant__true");
      heroText.textContent = mixedPlaylist[playNum].description;
      nextQuestion.removeAttribute("disabled");
    
      counter += step;
      scoreContainer.textContent = counter;
    };
    if (el.target.classList.contains("variant") && el.target.textContent !== mixedPlaylist[playNum].title) {
      el.target.classList.add("variant__false");
    
      step--;
      scoreContainer.textContent = counter;
    };
    if (el.target.textContent === mixedPlaylist[playNum].title) {
      heroName.textContent = el.target.textContent;
      heroPicture.style.backgroundImage = mixedPlaylist[playNum].picture;
      descriptionPicture.style.backgroundImage = mixedPlaylist[playNum].picture;
      
      
        heroesContainer.childNodes.forEach(item => {
          item.classList.remove("variant__false");
        })

        step = 6;
        
      
    }
    
  })


  nextQuestion.addEventListener("click", () => {
    heroPicture.style.backgroundImage = "url(assets/images/question.jpg)";
    descriptionPicture.style.backgroundImage = "url(assets/images/question.jpg)";
    heroesContainer.childNodes.forEach(item => {
      item.classList.remove("variant__false");
    })
    mixedPlaylist.shift(playNum);
    console.log(mixedPlaylist)
    heroName.textContent = "******";
    playerButton.classList.remove("button__pause");
    playerButton.classList.add("button__play");
    isPlay = false;
    nextQuestion.setAttribute("disabled", true);
    clearInterval(updateTimer);
    resetValues();
    audio.pause();
  })


  // Score

  


  