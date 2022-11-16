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
      src: "./../../assets/sounds/assets/sounds/daffy-duck-hoo-hoo.mp3",
      duration: "00:04",
      picture: "url(./../../assets/images/daffy-duck.jpg)",
      description: "oooooooo"
    },  
    {
      name: "Поросенок Порки",
      title: "Porky Pig",
      src: "./../../assets/sounds/assets/sounds/porky-pig-all-folks.mp3",
      duration: "00:03",
      picture: "url(./../../assets/images/porky-pig.jpg)",
      description: "iiiiiiiiii"
    },
    {
      name: "Багз Банни",
      title: "Bugs Bunny",
      src: "./../../assets/sounds/assets/sounds/bugs-bunny.mp3",
      duration: "00:03",
      picture: "url(./../../assets/images/bugs-bunny.jpg)",
      description: "99999999"
    },
    {
      name: "Таз - тасманский дьявол",
      title: "Taz - tasmanian devil",
      src: "./../../assets/sounds/assets/sounds/taz-tasmanian-devil.mp3",
      duration: "00:05",
      picture: "url(./../../assets/images/taz.jpg)",
      description: "zzzzzzzz"
    },
    {
      name: "Бегун",
      title: "Road Runner",
      src: "./../../assets/sounds/assets/sounds/road-runner.mp3",
      duration: "00:01",
      picture: "url(./../../assets/images/road-runner.jpg)",
      description: "uuuuuuuuuu"
    },
    {
      name: "Канарейка Твити",
      title: "Tweety",
      src: "./../../assets/sounds/assets/sounds/tweety-canary.mp3",
      duration: "00:03",
      picture: "url(./../../assets/images/tweety.jpg)",
      description: "eeeeeeeeeee"
    }

  ]


  const playerButton = document.querySelector(".player__button");
  const statusPlay = document.querySelector(".button__play");
  const statusPause = document.querySelector(".button__pause");

  const heroesContainer = document.querySelector(".answers");
  const activeSong = heroesContainer.childNodes;

  const heroName = document.querySelector(".hero__name");
  const heroPicture = document.querySelector(".hero__picture");

  const heroText = document.querySelector(".description__footer");

  const nextQuestion = document.querySelector(".next__question");

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

  console.log(mixedPlaylist);

  // Player

  let isPlay = false;

  let playNum = 0;

  const audio = new Audio();

  function playAudio() {
    audio.src = mixedPlaylist[playNum].src;
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
    console.log(mixedPlaylist)
  })


  nextQuestion.addEventListener("click", () => {
    heroPicture.style.backgroundImage = "url(./../../assets/images/question.jpg)";
    descriptionPicture.style.backgroundImage = "url(./../../assets/images/question.jpg)";
    heroesContainer.childNodes.forEach(item => {
      item.classList.remove("variant__false");
    })
    mixedPlaylist.shift(playNum);
    heroName.textContent = "******";
  })


  // Score

  


  