function playSound(e) {
  const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
  const key = document.querySelector(`div.key[data-key= "${e.keyCode}"]`);
  if (!audio) return; // stop function from executing unmentioned keys

  key.classList.add("playing");
  audio.currentTime = 0; // this allows the audio to be played the moment key is pressed, so that if someone keeps pressig the key, it will keep on making the sound
  audio.play();
}

const removeTransition = function (e) {
  if (e.propertyName !== "transform") return; //skip all properties that don't have a transform
  e.target.classList.remove("playing");
};

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound); // this listens for which key is played
