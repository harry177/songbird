import "./game.html";
import "./game.css";

/*import "./../../assets/sounds/daffy-duck-hoo-hoo.mp3";
import "./../../assets/sounds/porky-pig-all-folks.mp3";
import "./../../assets/sounds/bugs-bunny.mp3";
import "./../../assets/sounds/taz-tasmanian-devil.mp3";
import "./../../assets/sounds/road-runner.mp3";
import "./../../assets/sounds/tweety-canary.mp3"; */




const playList = [
    {      
      name: "Утка Даффи",
      title: "Duffy Duck",
      src: "assets/sounds/assets/sounds/daffy-duck-hoo-hoo.mp3",
      duration: "00:04",
      picture: "./../../assets/images/duffy-duck.jpg"
    },  
    {
      name: "Поросенок Порки",
      title: "Porky Pig",
      src: "./../../assets/sounds/porky-pig-all-folks.mp3",
      duration: "00:03",
      picture: "./../../assets/images/porky-pig.jpg"
    },
    {
      name: "Багз Банни",
      title: "Bugs Bunny",
      src: "./../../assets/sounds/bugs-bunny.mp3",
      duration: "00:03",
      picture: "./../../assets/images/bugs-bunny.jpg"
    },
    {
      name: "Таз - тасманский дьявол",
      title: "Taz - tasmanian devil",
      src: "./../../assets/sounds/taz-tasmanian-devil.mp3",
      duration: "00:05",
      picture: "./../../assets/images/taz.jpg"
    },
    {
      name: "Бегун",
      title: "Road Runner",
      src: "./../../assets/sounds/road-runner.mp3",
      duration: "00:01",
      picture: "./../../assets/images/road-runner.jpg"
    },
    {
      name: "Канарейка Твити",
      title: "Tweety",
      src: "./../../assets/sounds/tweety-canary.mp3",
      duration: "00:03",
      picture: "./../../assets/images/tweety.jpg"
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


  // Player

  let isPlay = false;

  let playNum = 0;

  const audio = new Audio();

  function playAudio() {
    audio.src = playList[playNum].src;
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


  // Mixed playlist

  let mixedPlaylist;
  

  // Quiz

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
    if (el.target.classList.contains("variant")) {
      el.target.classList.toggle("variant__onclick");
    }
  })



  