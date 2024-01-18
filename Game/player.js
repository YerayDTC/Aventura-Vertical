class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 100;
        this.y = 100;
        this.w = 10;
        this.h = 10;
        this.vx = 0;
        this.vy = 0;
    }

    draw() {
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    //todo: hace el efecto del movimiento segun la tecla pulsada
    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    //todo: recibe el evento del setListener de la clase Game y detecta que tecla se esta pulsando
    keyDown(key) {
        if(key === A) this.vx = -1;
        if(key === D) this.vx = 1;
        if(key === W) this.vy = -1;
        if(key === S) this.vy = 1;
    }

    keyUp(key) {
        if (key === A) this.vx = 0;
        if (key === D) this.vx = 0;
        if (key === W) this.vy = 0;
        if (key === S) this.vy = 0;
    }

    // keyDown(e) {
    //     switch (e.key) {
    //         case 'a':
    //             this.vx += 1;
    //             break;
    //         case 'd':
    //             this.vx -= 1;
    //             break;
    //         case 'w':
    //             this.vy += 1;
    //             break;
    //         case 's':
    //             this.vy -= 1;
    //             break;
    //         default:
    //             this.x = 0;//si pulsa cualquier tecla se pone en 0
    //             this.y = 0;
    //     }
    // }


    // keyUp() {
    //     this.x += 1;
    //     this.y += 1;
    // }

    collides(obstaculo) {
        if (this.x < obstaculo.x + obstaculo.width &&
            this.y < obstaculo.y + obstaculo.height &&
            this.x + this.width > obstaculo.x &&
            this.y + this.height > obstaculo.y) {
            // collision detected!
        }
    }
}