// board
let board;
const boardWidth = 360;
const boardHeight = 640;
let context; //drawing on canvas

// bird
const birdWidth = 34; //width/height ratio = 408/228 = 17/12
const birdHeight = 24;
const birdX = boardWidth / 8;
const birdY = boardHeight / 2;
let birdImg;

const bird = {
  x: birdX,
  y: birdY,
  width: birdWidth,
  height: birdHeight
}

// pipes
let pipeArray = [];
const pipeWidth = 64; //width/height ratio = 384/3072 = 1/8
const pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

window.onload = () => {
  board = document.getElementById("board");

  board.height = boardHeight;
  board.width = boardWidth;

  context = board.getContext("2d"); //used for drawing on the board

  //draw the bird
  //context.fillStyle = "green";
  //context.fillRect(bird.x, bird.y, bird.width, bird.height);

  //load the image
  birdImg = new Image();
  birdImg.src = "/pic/flappybird.png";
  birdImg.onload = () => {
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
  }

  //load pipes
  topPipeImg = new Image();
  topPipeImg.src = "/pic/toppipe.png";
  
  bottomPipeImg = new Image();
  bottomPipeImg.src = "/pic/bottompipe.png";
  
  requestAnimationFrame(update);
}

function update() {
  requestAnimationFrame(update);
  context.clearRect(0, 0, board.width, board.height);

  //bird
  context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
}