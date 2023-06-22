const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.querySelector(".score");
const timer = document.querySelector(".timer");

let hitId = 0;
let result = 0;
let time = 10;

function randomMole() {
  squares.forEach((element) => {
    element.classList.remove("mole");
  });
  let randomSquares = squares[Math.floor(Math.random() * 9)];
  randomSquares.classList.add("mole");
  hitId = randomSquares.id;
  // console.log(hitId);
}

function moveMole() {
  let timerID = setInterval(randomMole, 1000);
}

moveMole();

squares.forEach((element) => {
  element.addEventListener("mousedown", () => {
    if (element.id === hitId) {
      result++;
    }
    score.innerHTML = result;
  });
});

function timeoutFun() {
  time--;
  timer.innerHTML = time;
  if (time == 0) {
    alert("Game over.Your score is " + result);
    clearInterval(timeout);
    clearInterval(timerID);
  }
}

let timeout = setInterval(timeoutFun, 1000);
