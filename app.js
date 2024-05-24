const audioEl = document.getElementById("audio");
const coverEl = document.getElementById("cover");
const titleEl = document.getElementById("title");
const musicContainer = document.getElementById("music-container");
const volumeEl = document.getElementById("volume");

console.log(audioEl.volumeEl);

const backwardBtn = document.getElementById("backward");
const playBtn = document.getElementById("play");
const forwardBtn = document.getElementById("forward");


const musics = [
    'Bolaligim',
    'Etot-bit',
    'Jononim',
    "O'zbegim",
    'Ota-Ona',
    'Yoroney'
];

let = currentMusic = 0;

const changeMusic = (curMusic) => {
    coverEl.src = `./img/${curMusic}.jpg`;
    audioEl.src = `./sounds/${curMusic}.mp3`;
    titleEl.textContent = curMusic;
}

const playMusic = () => {
    musicContainer.classList.add("play");
    playBtn.innerHTML = `<i class="fa-sharp fa-solid fa-pause"></i>`
    audioEl.play();
};

const pauseMusic = () => {
    musicContainer.classList.add("play");
    playBtn.innerHTML = `<i class="fa-sharp fa-solid fa-pause"></i>`
    audioEl.pause();
};


const play = () => {
    const state = musicContainer.classList.contains("play");

    if (state) {
        pauseMusic();
    } else {
        playMusic();
    }
};

const next = () => {
    if (currentMusic > musics.length - 1) {
        currentMusic = 0;
    } else {
        currentMusic++;
    }

    changeMusic(musics[currentMusic]);
    playMusic();
}


const prev = () => {
    if (currentMusic == 0) {
        currentMusic =  musics.length - 1;
    } else {
        currentMusic--;
    }

    changeMusic(musics[currentMusic]);
    playMusic();
}

const changeVolume = () => {
    console.log(volumeEl.value);
}

playBtn.addEventListener("click", play);
forwardBtn.addEventListener("click", next);
backwardBtn.addEventListener("click", prev);
volumeEl.addEventListener("input", change)