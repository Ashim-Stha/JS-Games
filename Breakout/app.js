const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;

class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    this.topLeft = [xAxis, yAxis + blockHeight];
  }
}

const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

const userB = [230, 10];
let userposition = userB;

for (let i = 0; i < blocks.length; i++) {
  const block = document.createElement("div");
  block.classList.add("block");
  block.style.left = blocks[i].bottomLeft[0] + "px";
  block.style.bottom = blocks[i].bottomLeft[1] + "px";
  grid.appendChild(block);
}

const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

function drawUser() {
  user.style.left = userposition[0] + "px";
  user.style.bottom = userposition[1] + "px";
}
function moveUser(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (userposition[0] > 0) {
        userposition[0] -= 10;
        drawUser();
      }
  }
}

document.addEventListener("keydown", moveUser);
