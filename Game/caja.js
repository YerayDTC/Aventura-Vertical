class Caja {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 150;
        this.y = 50;
        this.w = 10; // Ancho del sprite
        this.h = 10; // Alto del sprite
        this.vx = 0;
        this.vy = 0;
        this.spriteSpeed = 0.1; //velocidad del sprite
        this.imgFrame = 0;
        this.framesPorFila = 4; // Número de cuadros por fila en el sprite
        this.framesPorColumn = 3 //Número de cuadros por columna en el sprite

        // Carga la imagen del sprite
        this.imgBox = new Image();
        this.imgBox.src = "../Public/img/cajaRota128.png"; 
    }

    draw() {
        // Calcula la posición en el sprite del cuadro actual
        const frameX = this.imgFrame % this.framesPorFila;
        const frameY = Math.floor(this.imgFrame / this.framesPorFila);

        // Dibuja el sprite en el lienzo usando drawImage
        this.ctx.drawImage(
            this.imgBox,        // Imagen del sprite
            frameX * this.w,    // Posición X en el sprite del cuadro actual
            frameY * this.h,    // Posición Y en el sprite del cuadro actual
            this.w,             // Ancho del cuadro en el sprite
            this.h,             // Alto del cuadro en el sprite
            this.x,             // Posición X en el lienzo
            this.y,             // Posición Y en el lienzo
            this.w,             // Ancho en el lienzo
            this.h              // Alto en el lienzo
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
            console.log("hola")
        }
    }

    animateSprite() {
        // Actualiza la animación del sprite cuando hay colisión
        this.imgFrame += this.spriteSpeed;
        if (this.imgFrame >= this.framesPorFila * undefined) {
            // Reinicia la animación cuando alcanza el final del sprite
            this.imgFrame = 0;
        }
    }
}

