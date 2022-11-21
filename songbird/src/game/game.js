import "./game.html";
import "./game.css";
import {looneyTunes, disney, simpsons, rickMorty, familyGuy, southPark} from "./../heroes.js";



import "./../../assets/sounds/error.mp3";
import "./../../assets/sounds/success.mp3";

import "./../../assets/icons/pause.svg";
import "./../../assets/icons/play.svg";

import "./../../assets/images/question.jpg";

// Looney Tunes import

import "./../../assets/sounds/daffy-duck-hoo-hoo.mp3";
import "./../../assets/sounds/porky-pig-all-folks.mp3";
import "./../../assets/sounds/bugs-bunny.mp3";
import "./../../assets/sounds/taz-tasmanian-devil.mp3";
import "./../../assets/sounds/road-runner.mp3";
import "./../../assets/sounds/tweety-canary.mp3";

import "./../../assets/images/bugs-bunny.jpg";
import "./../../assets/images/daffy-duck.jpg";
import "./../../assets/images/porky-pig.jpg";
import "./../../assets/images/road-runner.jpg";
import "./../../assets/images/taz.jpg";
import "./../../assets/images/tweety.jpg";

// Disney import

import "./../../assets/sounds/mickey-mouse.mp3";
import "./../../assets/sounds/goofy.mp3";
import "./../../assets/sounds/scrooge-mcduck.mp3";
import "./../../assets/sounds/pluto.mp3";
import "./../../assets/sounds/minni-mouse.mp3";
import "./../../assets/sounds/donald-duck.mp3";

import "./../../assets/images/mickey-mouse.jpg";
import "./../../assets/images/goofy.jpg";
import "./../../assets/images/scrooge-mcduck.jpg";
import "./../../assets/images/pluto.jpg";
import "./../../assets/images/minni-mouse.jpg";
import "./../../assets/images/donald-duck.jpg";

// Simpsons import

import "./../../assets/sounds/homer-simpson.mp3";
import "./../../assets/sounds/barney.mp3";
import "./../../assets/sounds/bart-simpson.mp3";
import "./../../assets/sounds/ned-flanders.mp3";
import "./../../assets/sounds/nelson.mp3";
import "./../../assets/sounds/ralph.mp3";

import "./../../assets/images/homer-simpson.jpg";
import "./../../assets/images/barney.jpg";
import "./../../assets/images/bart-simpson.jpg";
import "./../../assets/images/ned-flanders.jpg";
import "./../../assets/images/nelson.jpg";
import "./../../assets/images/ralph.jpg";

// Family Guy import

import "./../../assets/sounds/peter-griffin.mp3";
import "./../../assets/sounds/lois-griffin.mp3";
import "./../../assets/sounds/stewie-griffin.mp3";
import "./../../assets/sounds/brian.mp3";
import "./../../assets/sounds/quagmire.mp3";
import "./../../assets/sounds/meg-griffin.mp3";

import "./../../assets/images/peter-griffin.jpg";
import "./../../assets/images/lois-griffin.jpg";
import "./../../assets/images/stewie-griffin.jpg";
import "./../../assets/images/brian.jpg";
import "./../../assets/images/quagmire.jpg";
import "./../../assets/images/meg-griffin.jpg";

// Rick and Morty import

import "./../../assets/sounds/rick-sanchez.wav";
import "./../../assets/sounds/morty.wav";
import "./../../assets/sounds/summer.mp3";
import "./../../assets/sounds/jerry.mp3";
import "./../../assets/sounds/birdperson.mp3";
import "./../../assets/sounds/mr-meeseeks.wav";

import "./../../assets/images/rick-sanchez.jpg";
import "./../../assets/images/morty.jpg";
import "./../../assets/images/summer.jpg";
import "./../../assets/images/jerry.jpg";
import "./../../assets/images/birdperson.jpg";
import "./../../assets/images/mr-meeseeks.jpg";

// South Park import

import "./../../assets/sounds/eric-cartman.mp3";
import "./../../assets/sounds/randy-marsh.mp3";
import "./../../assets/sounds/jimmy.mp3";
import "./../../assets/sounds/kyle-broflovski.mp3";
import "./../../assets/sounds/mr-mackey.mp3";
import "./../../assets/sounds/butters.mp3";

import "./../../assets/images/eric-cartman.jpg";
import "./../../assets/images/randy-marsh.jpg";
import "./../../assets/images/jimmy.jpg";
import "./../../assets/images/kyle-broflovski.jpg";
import "./../../assets/images/mr-mackey.jpg";
import "./../../assets/images/butters.jpg";



const soundReaction = [
  {
    name: "успех",
    title: "success",
    src: "assets/sounds/success.mp3"
  },
  {
    name: "ошибка",
    title: "error",
    src: "assets/sounds/error.mp3",
  }
]

const stages = [
  {
    name: disney,
    titleRu: "Дисней",
    titleEn: "Disney"
  },
  {
    name: simpsons,
    titleRu: "Симпсоны",
    titleEn: "Simpsons"
  },
  {
    name: familyGuy,
    titleRu: "Гриффины",
    titleEn: "Family Guy"
  },
  {
    name: rickMorty,
    titleRu: "Рик и Морти",
    titleEn: "Rick and Morty"
  },
  {
    name: southPark,
    titleRu: "Южный Парк",
    titleEn: "South Park"
  },
  {
    name: looneyTunes,
    titleRu: "Луни Тьюнс",
    titleEn: "Looney Tunes"
  }
];


  let shadowBody = document.querySelector(".shadow__body");

  shadowBody.addEventListener('click', function() {
    shadowBody.classList.remove('show__shadow');
    resultsDesk.classList.remove('show__results');
  });

  let resultsDesk = document.querySelector(".results__desk");

  resultsDesk.addEventListener('click', function() {
    shadowBody.classList.remove('show__shadow');
    resultsDesk.classList.remove('show__results');
  });

  let resultsList = document.querySelector(".results__list");

  resultsList.textContent = null;

  let resultsButton = document.querySelector(".results__button");

  resultsButton.addEventListener('click', function() {
    resultsDesk.classList.add('show__results');
    shadowBody.classList.add('show__shadow');
    showResults();
  })

  let questions = document.querySelector(".questions");

  let questionsActive = document.querySelector(".questions__active")

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

  const descriptionBlock = document.querySelector(".description");

  descriptionBlock.innerHTML = "Послушайте плеер.<br>Выберете персонажа из списка."


  let inputContent = `<div class="description__header"> \
  <div class="description__header__picture"></div> \
  <div class="description__header__content"> \
    <div class="description__header__content__name"></div> \
    <div class="description__header__content__nickname"></div> \
    <div class="description__header__content__player"> \
      <button class="player__button button__play"></button> \
      <div class="slider__container"> \
        <div class="current-time">00:00</div> \
        <input type="range" min="1" max="100"value="0" class="seek__slider"> \
        <div class="total-duration">00:00</div> \
      </div> \
      <div class="slider_container"> \
        <i class="fa-volume-down"></i> \
        <input type="range" min="1" max="100" value="99" class="volume__slider"> \
        <i class="fa-volume-up"></i> \
      </div> \
    </div> \
  </div>`;




  const effect = new Audio();

  let playList;

  let stage;

  stage = 0;

  playList = stages[stage].name;

  

  playerButton.addEventListener("click", () => {
    playerButton.classList.toggle("button__play");
    playerButton.classList.toggle("button__pause");
  })



  // Mixed playlist

  let mixedPlaylist;
  
  mixedPlaylist = Array.from(playList);

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
        playerButton.classList.remove("button__play");
        playerButton.classList.add("button__pause");
      
    
      } else if (isPlay === true) {
        audio.pause();
        isPlay = false;
    }
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


  

  function contentQuestions() {
    for (let i = 0; i < stages.length; i++) {
      questions.children[i].textContent = stages[i].titleRu;

      if (i === stage && questions.children[i-1] !== undefined) {
        questions.children[i].style.backgroundColor = "violet";
        questions.children[i-1].style.backgroundColor = "";
      } else if (i === stage) {
        questions.children[i].style.backgroundColor = "violet";
      }
    }

  }

  contentQuestions();


  
  

  // Quiz

  let resultBeginning = "Результатов пока нет.";
  let resultEnding = "Сыграйте!";

  let counter = 0;

  let step = 5;

  let scoreContainer = document.querySelector(".results__block__score");

  scoreContainer.textContent = counter;

  let singer;

  heroName.textContent = "******";

  function content() {
    heroesContainer.innerHTML = "";
    playList.forEach(el => {
      singer = document.createElement("button");
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
      effect.src = soundReaction[0].src;
      effect.play();
      audio.pause();
      playerButton.classList.remove("button__pause");
      playerButton.classList.add("button__play");
      isPlay = false;
      audio.currentTime = 0;
      descriptionBlock.innerHTML = inputContent;
      heroText.textContent = mixedPlaylist[playNum].description;
      heroesContainer.childNodes.forEach(childNodes => {
        childNodes.setAttribute("disabled", true);
    }) 
      nextQuestion.removeAttribute("disabled");

     
    
      counter += step;
      scoreContainer.textContent = counter;



      showResults();
    };

    if (el.target.classList.contains("variant") && el.target.textContent !== mixedPlaylist[playNum].title) {
      el.target.classList.add("variant__false");

      effect.src = soundReaction[1].src;
      effect.play();

      descriptionBlock.innerHTML = inputContent;
    
      step--;
      scoreContainer.textContent = counter;
    };
    if (el.target.textContent === mixedPlaylist[playNum].title) {
      heroName.textContent = el.target.textContent;
      heroPicture.style.backgroundImage = mixedPlaylist[playNum].picture;
      descriptionPicture.style.backgroundImage = mixedPlaylist[playNum].picture;
      
      
   

        step = 5;
        
      
    }
    
  })


  nextQuestion.addEventListener("click", () => {
    heroPicture.style.backgroundImage = "url(assets/images/question.jpg)";
    descriptionPicture.style.backgroundImage = "url(assets/images/question.jpg)";
    heroesContainer.childNodes.forEach(item => {
      item.classList.remove("variant__false");
      item.classList.remove("variant__true");
    })
   // mixedPlaylist.shift(playNum);
    audio.pause();
    stage += 1
    playList = stages[stage].name;
    mixedPlaylist = Array.from(playList);
    shuffle();
    playNum++;
    content();
    heroName.textContent = "******";
    
    
    isPlay = false;

    playerButton.classList.remove("button__pause");
    playerButton.classList.add("button__play");

    heroesContainer.childNodes.forEach(childNodes => {
      childNodes.removeAttribute("disabled", true);
  })
    nextQuestion.setAttribute("disabled", true);
    clearInterval(updateTimer);
    resetValues();
    contentQuestions();
    
    
    descriptionBlock.innerHTML = "Послушайте плеер.<br>Выберете персонажа из списка."
  
  })


  // Saving results 
/*

  function saveResults() {
    localStorage.setItem(resultBeginning, resultEnding);
  } */
  
  
  // Showing results

function showResults() {

  if (counter === 30) {
    resultBeginning = `Поздравляем! Вы набрали максимальное количество баллов - ${counter}!`;
    resultEnding = "Мультики - ваше призвание:)";
    resultsDesk.classList.add('show__results');
    shadowBody.classList.add('show__shadow');
  } else if (stage === 5 && heroesContainer.children[stage].disabled === true) {
    resultBeginning = `Вы дошли до конца! Ваш счет - ${counter} баллов!`;
    resultEnding = "Не желаете попробавать снова?";
    resultsDesk.classList.add('show__results');
    shadowBody.classList.add('show__shadow');
  } else {
    resultBeginning = `Ваш текущий счет - ${counter} баллов!`;
    resultEnding = "Попробуйте дойти до конца :)";
  }
  
  resultsList.textContent = `${resultBeginning} ${resultEnding}`;
  
}


const playAgain = document.querySelector(".play__again");

function restartGame() {
  resultsDesk.classList.remove('show__results');
  shadowBody.classList.remove('show__shadow');
  questions.children[stage].style.backgroundColor = "";
  stage = 0;
  counter = 0;
  scoreContainer.textContent = counter;
  playList = stages[stage].name;
  mixedPlaylist = Array.from(playList);
  heroPicture.style.backgroundImage = "url(assets/images/question.jpg)";
  descriptionPicture.style.backgroundImage = "url(assets/images/question.jpg)";
  shuffle();
  contentQuestions();
  content();
  nextQuestion.setAttribute("disabled", true);
  heroName.textContent = "******";
  console.log(playList);
}

playAgain.addEventListener("click", restartGame);

  


  