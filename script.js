let currentSong = new Audio();
let songs;
let lang;
let langarr;
var songcollections = {
  TollywoodHits: ["Chuttamalle", "DheeraDheera", "GaramGaram", "KeshavaMadhava", "Sooseki", "ThemeofKalki"],
  TollywoodHitss: ["ShilpaRao, Anirudh", "Santosh Venky", "Vishal Dadlani", "Santosh Narayan", "Shreya Goshal", "Santosh Narayan"],
  BollywoodHits: ["Bekhayali", "Satranga", "TaubaTauba", "TujMeRabDikhtaHai", "TumHiHo"],
  BollywoodHitss: ["Arijit Singh", "Arijit Singh", "Karan Aujla", "Shreya Goshal", "Arijit Singh"],
  EnglishHits: ["Believer", "BlindingLights", "CountingStars", "MockingBird", "Senorita"],
  EnglishHitss: ["Imagine Dragons", "The Weekend", "One Republic", "Eminem", "Shawn Mendes"]
} 
function secondsToMinutesSeconds(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
async function getSongs(lang) {
  console.log(lang)
  let langs = lang + 's';
  langarr = songcollections[lang];
  let langsarr = songcollections[langs];
  let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
  songUL.innerHTML = "";
  for (let songer = 0; songer < langarr.length; songer++) {
    songUL.innerHTML = songUL.innerHTML +
      `<li class="flex">
                <img class="musicicon invert" src="music.svg">
                <div class="songinfo">
                        <div class="musicname">${langarr[songer]}</div>
                        <div class="song singer">${langsarr[songer]}</div>
                </div>
                <div class="flex playe">
                        <p>Play Now</p>
                        <i class="fa-solid fa-play playeplay "></i>
                </div>    
      </li>`;
  }
}
function PlayMusic(track) {
  // currentSong.src = "/songs/" + track + ".m4a"
  // currentSong.play();
  // play.src = "pause.svg";
}
async function main() {
  console.log("hello")
  let currentSong = new Audio();
  // songs = await getSongs();
  // console.log(songs);
  currentSong.src = "JavaScript/SpotifyClone/songs2/TollywoodHits/" + "Chuttamalle" + ".m4a";
  currentSong.addEventListener("timeupdate", () => {
    // console.log(currentSong.currentTime, currentSong.duration);
    document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`;
  })
  // currentSong.play();

  songnames = ["KeshavaMadhava", "Senorita", "ThemeofKalki", "TumHiHo", "Sooseki", "KeshavaMadhava", "Senorita", "ThemeofKalki", "TumHiHo", "Sooseki"];
  document.querySelector(".songinfo_").innerHTML = songnames[0];

  songsingers = ["SantoshNarayan", "ShawnMendes", "SantoshNarayan", "ArjitSingh", "ShreyaGoshal", "SantoshNarayan", "ShawnMendes", "SantoshNarayan", "ArjitSingh", "ShreyaGoshal"]

  // var songcollections = {
  //   TollywoodHits: ["Chuttamalle", "DheeraDheera", "GaramGaram", "KeshavaMadhava", "Sooseki", "ThemeofKalki"],
  //   TollywoodHitss: ["ShilpaRao, Anirudh", "Santosh Venky", "Vishal Dadlani", "Santosh Narayan", "Shreya Goshal", "Santosh Narayan"],
  //   BollywoodHits: ["Bekhayali", "Satranga", "TaubaTauba", "TujMeRabDikhtaHai", "TumHiHo"],
  //   BollywoodHitss: ["Arijit Singh", "Arijit Singh", "Karan Aujla", "Shreya Goshal", "Arijit Singh"],
  //   EnglishHits: ["Believer", "BlindingLights", "CountingStars", "MockingBird", "Senorita"],
  //   EnglishHitss: ["Imagine Dragons", "The Weekend", "One Republic", "Eminem", "Shawn Mendes"]
  // }
  // const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
  Array.from(document.querySelector(".cardholder").getElementsByClassName("card")).forEach((cardd) => {
    cardd.addEventListener("click", async () => {
      lang = cardd.querySelector("h2").innerText;
      // console.log(lang);
      getSongs(lang);
      currentSong.src=`JavaScript/SpotifyClone/songs2/${lang}/` + langarr[0]+ ".m4a";
      currentSong.play();
      document.querySelector(".songinfo_").innerHTML = langarr[0];
      play.src = "pause.svg";
      Array.from(document.querySelector(".songListUL").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", () => {
          // console.log(e.querySelector(".songinfo").firstElementChild.innerHTML);
          // PlayMusic(e.querySelector(".songinfo").firstElementChild.innerHTML)
          console.log(e);
          let track = e.querySelector(".songinfo").firstElementChild.innerHTML;
          console.log(track);
          currentSong.src = `JavaScript/SpotifyClone/songs2/${lang}/` + e.querySelector(".songinfo").firstElementChild.innerHTML + ".m4a"
          currentSong.play();
          play.src = "pause.svg";
          document.querySelector(".songinfo_").innerHTML = track;
          document.querySelector(".songtime").innerHTML = "00:00/00:00";
        })
        // console.log(e.querySelector(".songinfo").firstElementChild.innerHTML);
      })
    })
  })
  play.addEventListener("click", async () => {
    console.log("Button clicked");
    if (currentSong.paused) {
      // console.log("paused");
      currentSong.play();
      play.src = "pause.svg";
    } else {
      currentSong.pause();
      play.src = "play.svg";
    }
  })
  currentSong.addEventListener("timeupdate", () => {
    // console.log(currentSong.currentTime, currentSong.duration);
    document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`;
    document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 98 + "%";
    if (currentSong.currentTime == currentSong.duration) {
      play.src = "play.svg";
    }
  })
  let seek = document.querySelector(".seekbar");
  seek.addEventListener("click", e => {
    console.log(e.target.getBoundingClientRect().width);  //seek ka width.
    // console.log(seek.width);
    let seekwidth = e.target.getBoundingClientRect().width
    let percentsong = (e.offsetX / seekwidth) * 98;
    console.log(percentsong);
    document.querySelector(".circle").style.left = percentsong + "%";
    currentSong.currentTime = (percentsong * currentSong.duration) / 98;
  })
  let hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", () => {
    document.querySelector(".left").style.left = -2 + "%";
  })
  let close = document.querySelector(".close");
  close.addEventListener("click", () => {
    document.querySelector(".left").style.left = -100 + "%";
  })
  let previous = document.querySelector("#previous");
  let next = document.querySelector("#next");
  previous.addEventListener("click", () => {
    let currentsong_ = (currentSong.src.split('/').slice(-1));
    // console.log(currentsong_[0].split('.')[0]);
    let index = langarr.indexOf(currentsong_[0].split('.')[0]);
    if (index > 0) {
      currentSong.src = `JavaScript/SpotifyClone/songs2/${lang}/` + langarr[index - 1] + ".m4a";
      currentSong.play();
      document.querySelector(".songinfo_").innerHTML = langarr[index - 1];
    }


  })
  next.addEventListener("click", () => {
    let currentsong_ = (currentSong.src.split('/').slice(-1));
    console.log(currentsong_)
    // console.log(currentsong_[0].split('.')[0]);
    let index = langarr.indexOf(currentsong_[0].split('.')[0]);
    console.log(index)
    let length = langarr.length;
    console.log(length)
    if (index < length-1) {
      console.log("hi")
      currentSong.src = `/songs2/${lang}/` + langarr[index + 1] + ".m4a";
      currentSong.play();
      document.querySelector(".songinfo_").innerHTML = langarr[index + 1];
    }
    else if (index==length-1)  {
      console.log("hishk")
      currentSong.src = `JavaScript/SpotifyClone/songs2/${lang}/` + langarr[0] + ".m4a";
      currentSong.play();
      document.querySelector(".songinfo_").innerHTML = langarr [0];
    }

  })
  document.querySelector("#volrange").addEventListener("change", e => {
    console.log(e.target.value);
    currentSong.volume = (e.target.value) / 100;
  })
  document.querySelector(".vol>img").addEventListener("click", e=>{
      if(e.target.src.includes("volume.svg")){
        e.target.src= e.target.src.replace("volume.svg", "mute.svg");
        currentSong.volume=0;
        document.querySelector("#volrange").value=0;
      }
      else if(e.target.src.includes("mute.svg")){
        e.target.src= e.target.src.replace("mute.svg", "volume.svg");
        currentSong.volume=0.1;
        document.querySelector("#volrange").value=50;
      }
  });
}

main();

