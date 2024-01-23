const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const game = new Game(ctx);

//todo: funcionalidades de los botones
let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");

startButton.addEventListener("click", function() {
if(game.interval) {
    game.stop();
    startButton.innerText = "Start";
} else {
    game.start();
    startButton.innerText = "Stop";
}
});