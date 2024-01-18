class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.interval = null;
        this.player = new Player(ctx);
        this.setListeners();
    }

    start() {
        this.interval = setInterval(() => {
            this.clear();
            this.move();
            this.draw();
            this.checkCollision();
        }, 1000 / 60)
    }

    stop() {
        clearInterval(this.interval);
    }

    clear() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    draw() {
        this.player.draw();
    }

    move() {
        this.player.move();


    }

    checkCollision() {

    }

    setListeners() { //permite hacer keyup y keydown para usar teclado para mover el personaje
        document.addEventListener("keydown", (ev) => {
            this.player.keyDown(ev.keyCode);
        });
        document.addEventListener("keyup", (ev) => {
            this.player.keyUp(ev.keyCode);
        });
    }


}
