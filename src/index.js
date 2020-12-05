// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const chooseNumber = document.querySelector(".choose-number");
const betweenNumber = document.querySelector(".between-number");
const sliderVal = document.querySelector(".random-slider");
const vsResult = document.querySelector(".js-result");
const playBtn = document.querySelector(".play-button");

function filterRange() {
  // 최대값 넘지 못하게 필터링 해주는 함수
  const max = sliderVal.value;
  if (max < chooseNumber.value) {
    chooseNumber.value = max;
  }
}

function selectRange() {
  const max = sliderVal.value; // 최대값 받아오기
  chooseNumber.setAttribute("max", max);
  betweenNumber.innerHTML = `Generate a number between 0 and ${max}`;
}

function clickPlay() {
  const max = sliderVal.value; // 최대값 받아오기
  const myChosen = parseInt(chooseNumber.value);
  const machineChosen = Math.floor(Math.random() * max); // 난수 발생
  if (myChosen === machineChosen) {
    vsResult.innerHTML =
      "You chose: " +
      myChosen +
      ", the machine chose: " +
      machineChosen +
      `<br>` +
      `<b>` +
      "You won!";
  } else {
    vsResult.innerHTML =
      "You chose: " +
      myChosen +
      ", the machine chose: " +
      machineChosen +
      `<br>` +
      `<b>` +
      "You lose.";
  }
}

document.addEventListener("mousemove", selectRange);
playBtn.addEventListener("click", clickPlay);
chooseNumber.addEventListener("keyup", filterRange);
