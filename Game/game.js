import Player from "./players.js"

class Game{
    constructor(ctx){
        this.ctx = ctx;
        this.interval = null;
        this.player = new Player(ctx);
    }

    start(){
        this.interval = setInterval(() =>{
            this.clear();
            this.move();
            this.draw();
            this.checkCollision();
        },1000/60)
    }

    stop(){
        clearInterval(this.interval);
    }

    clear(){
        this.ctx.clearRect(0,0,canvas.width,canvas.height);
    }

    draw(){
        this.player.draw();
    }

    move(){
        this.player.move();
    }

    checkCollision(){

    }

}

export default Game;