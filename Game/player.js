class Player{
    constructor(ctx){
        this.ctx = ctx;
        this.x = 100;
        this.y = 100;
        this.w = 40;
        this.h = 40;
        this.vx = 0;
        this.vy = 0;

    }

    draw(){
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    move(){
        this.x += this.vx;
        this.y += this.vy;
    }

    collides(obstaculo){
        if (this.player.x < obstaculo.x + obstaculo.width &&
            this.player.y < obstaculo.y + obstaculo.height &&
            this.player.x + this.player.width > obstaculo.x &&
            this.player.y + this.player.height > obstaculo.y) {
            // collision detected!
        }
    }
}

export default Player;