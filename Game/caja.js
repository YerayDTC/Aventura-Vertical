class Caja {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 100;
        this.y = 100;
        this.w = 32; // Ancho del sprite
        this.h = 32; // Alto del sprite
        this.vx = 0;
        this.vy = 0;
        this.spriteSpeed = 0.2; //velocidad del sprite
        this.imgFrame = 0;
        this.framesPorFila = 4; // Número de cuadros por fila en el sprite

        // Carga la imagen del sprite
        this.img = new Image();
        this.img.src = "../Public/img/cajaRota.png"; 
    }

    draw() {
        const frameX = this.imgFrame % this.framesPorFila;
        const frameY = Math.floor(this.imgFrame / this.framesPorFila);

        this.ctx.drawImage(
            this.img,
            frameX * this.w,
            frameY * this.h,
            this.w,
            this.h,
            this.x,
            this.y,
            this.w,
            this.h
        );
    }

    move() {
   
    }

    collides(player) {
        if (
            this.x < player.x + player.w &&
            this.y < player.y + player.h &&
            this.x + this.w > player.x &&
            this.y + this.h > player.y
        ) {
            // Hay colisión con el jugador, inicia la animación del sprite
            this.animateSprite();
        }
    }

    animateSprite() {
        // Actualiza la animación del sprite cuando hay colisión
        this.imgFrame += this.spriteSpeed;
        if (this.imgFrame >= this.framesPorFila * 3) {
            // Reinicia la animación cuando alcanza el final del sprite
            this.imgFrame = 0;
        }
    }
}

