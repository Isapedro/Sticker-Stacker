const grid = document.querySelector(".grid");
const stackBtn = document.querySelector(".stack");
const scoreCounter = document.querySelector(".score-counter");
const endGameScreen = document.querySelector(".end-game-screen");
const endGameText = document.querySelector(".end-game-text");
const playAgainAgain = document.querySelector(".play-again");

const gridMatrix = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0], //this is the starting row
];
//Variables to keep track of the game values as we play
let currentRowIndex = gridMatrix.length - 1;
let barDirection = "right";
let barSize = 3;
let isGameOver = false;
let score = 0;

function draw(){
  //first makes sure we always reset the display when we call this function
  grid.innerHTML="";
  gridMatrix.forEach(function(rowContent){
    rowContent.forEach(function(cellContent){
      const cell = document.createElement("div");
      cell.classList.add("cell")
      grid.appendChild(cell);
    });
    
  });
}
draw();