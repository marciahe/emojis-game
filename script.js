const canvas = document.querySelector('#game');
const game = canvas.getContext ('2d');

let canvasSize;
let elementSize;

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
            game.fillText(emoji, posX, posY);

        });
    });

    // for (let row = 1; row <= 10; row++) {
    //     for (let col = 1; col <= 10; col++) {
    //         game.fillText(emojis[mapCols[row-1][col-1]], elementSize * col, elementSize * row);
    //     }
    // }

}