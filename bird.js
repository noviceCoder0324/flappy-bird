// board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context; //drawing on canvas

// bird
let birdWidth = 34; //width/height ration = 408/228 = 17/12
let birdHeight = 24;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;
let birdImg;

let bird = {
  x: birdX,
  y: birdY,
  width: birdWidth,
  height: birdHeight
}

// pipes


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
  
  requestAnimationFrame(update);
}

function update() {
  requestAnimationFrame(update);
  context.clearRect(0, 0, board.width, board.height);

  //bird
  context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
}