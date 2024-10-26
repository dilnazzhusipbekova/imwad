const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const progressBar = document.getElementById("progress-bar");
const trackTitle = document.getElementById("track-title");
const cover = document.getElementById("cover");

let isPlaying = false;
let currentTrack = 0;

const tracks = [
  { title: "Chanel - Frank Ocean", src: "track1.mp3", cover: "cover1.jpg" },
  { title: "Kiss Me More - SZA (feat. Doja Cat)", src: "track2.mp3", cover: "cover2.jpg" },
  { title: "APT. - Rose (feat. Bruno Mars)", src: "track3.mp3", cover: "cover3.jpg" },
];

function loadTrack(track) {
  audio.src = track.src;
  trackTitle.textContent = track.title;
  cover.src = track.cover;
  updateProgressBar();
}

function playPause() {
  if (isPlaying) {
    audio.pause();
    playPauseButton.textContent = "Play";
  } else {
    audio.play();
    playPauseButton.textContent = "Pause";
  }
  isPlaying = !isPlaying;
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(tracks[currentTrack]);
  if (isPlaying) audio.play();
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(tracks[currentTrack]);
  if (isPlaying) audio.play();
}

function updateProgressBar() {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
}

audio.addEventListener("timeupdate", updateProgressBar);
playPauseButton.addEventListener("click", playPause);
nextButton.addEventListener("click", nextTrack);
prevButton.addEventListener("click", prevTrack);


loadTrack(tracks[currentTrack]);
