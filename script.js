const canvas = document.querySelector('#game');
const game = canvas.getContext ('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

let canvasSize;
let elementSize;

const playerPosition = {
    x: undefined,
    y: undefined,
  };

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.75;
    } else{
        canvasSize = window.innerHeight * 0.75;
    }
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementSize = canvasSize / 10.15;

    startGame();

}

function startGame() {
    // console.log({ canvasSize, elementSize });

    game.font = elementSize + 'px Roboto';
    game.textAlign = 'end';

    const map = maps[0];
    const mapRows = map.trim().split('\n');
    const mapCols = mapRows.map(row => row.trim().split(''));


    mapCols.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            const emoji = emojis[col];
            const posX = elementSize * (colIndex + 1);
            const posY = elementSize * (rowIndex + 1);

            if (col == 'O') {
                playerPosition.x = posX;
                playerPosition.y = posY;
                console.log({playerPosition});
              }

            game.fillText(emoji, posX, posY);

        });
    });

    movePlayer();
}

function movePlayer(){
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
}

window.addEventListener('keydown', moveByKeys);
btnUp.addEventListener("click", moveUp);
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
btnDown.addEventListener("click", moveDown);

function moveUp() {
  console.log("Me movere hacia arriba");
}
function moveLeft() {
  console.log("Me movere hacia izq");
}
function moveRight() {
  console.log("Me movere hacia dere");
}
function moveDown() {
  console.log("Me movere hacia abajo");
}

function moveByKeys(event){
    if(event.key == 'ArrowUp') moveUp();
    else if (event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if (event.key == 'ArrowDown') moveDown();
}