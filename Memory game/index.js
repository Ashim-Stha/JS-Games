const arr = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];

let chosenCard = [];
let chosenCardbyId = [];
let cardsWon = [];

arr.sort(() => 0.5 - Math.random());

const grid = document.getElementById("grid");
const displayResult = document.getElementById("result");
// console.log(arr);

function createBoard() {
  let card;
  for (let i = 0; i < arr.length; i++) {
    card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard);
    grid.append(card);
  }
}

createBoard();

function checkMatch() {
  let cards = document.querySelectorAll("#grid img");
  const opt1id = chosenCardbyId[0];
  const opt2id = chosenCardbyId[1];
  if (opt1id === opt2id) {
    alert("You clicked the same image");
  } else if (chosenCard[0] === chosenCard[1]) {
    alert("you got a match");
    cards[chosenCardbyId[0]].setAttribute("src", "images/white.png");
    cards[chosenCardbyId[1]].setAttribute("src", "images/white.png");
    cards[chosenCardbyId[0]].removeEventListener("click", flipcard);
    cards[chosenCardbyId[1]].removeEventListener("click", flipcard);

    cardsWon.push(chosenCard);
    displayResult.textContent = cardsWon.length;
  } else {
    cards[opt1id].setAttribute("src", "images/blank.png");
    cards[opt2id].setAttribute("src", "images/blank.png");
  }

  chosenCard = [];
  chosenCardbyId = [];

  if (cardsWon.length === arr.length / 2) {
    displayResult.innerHTML = "You have won all";
  }
}

function flipcard() {
  let dataId = this.getAttribute("data-id");
  //   console.log("clicked", dataId);
  chosenCard.push(arr[dataId].name);

  //   console.log(chosenCard);
  chosenCardbyId.push(dataId);
  console.log(chosenCardbyId);
  this.setAttribute("src", arr[dataId].img);
  if (chosenCard.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
