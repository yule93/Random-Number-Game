// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const chooseNumber = document.querySelector(".choose-number");
const betweenNumber = document.querySelector(".between-number");
const sliderVal = document.querySelector(".random-slider");
const vsResult = document.querySelector(".js-result");

function selectRange() {
  const max = sliderVal.value; // 최대값 받아오기
  chooseNumber.setAttribute("max", max);
  betweenNumber.innerHTML = "Generate a number between";
  betweenNumber.innerHTML += " 0 and " + max;
}

function clickPlay(event) {
  const playBtn = event.target;
  const myChosen = chooseNumber.innerText;
  if (myChosen === Math.random()) {
    vsResult.innerHTML = "You won!";
  } else {
  }
}

function init() {}

init();
document.addEventListener("mousemove", selectRange);
