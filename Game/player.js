class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 100; // posision horizontal
        this.y = 100; //posision vertical
        this.w = 75; //ancho
        this.h = 75; //alto
        this.vx = 0; //velocidad horizontal
        this.vy = 0; //velcidad vertical
        this.g = 0; //gravedad

        //carga la imagen del sprite
        this.img = new Image();
        this.img.src = "../Public/img/spritePlayer.png"
        this.frameIndex = 0; // Índice del cuadro de animación actual
        this.framesPorFila = 4; // Número de cuadros por fila en el sprite
    }

    draw() {
        // Limpiar el canvas
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // Calcular la posición del cuadro de animación en el sprite
        const fila = Math.floor(this.frameIndex / this.framesPorFila);
        const col = this.frameIndex % this.framesPorFila;

        // Dibujar el jugador con drawImage en lugar de fillRect
        this.ctx.drawImage(
            this.sprite,
            col * this.w, fila * this.h,
            this.w, this.h,
            this.x, this.y,
            this.w, this.h
        );
    }

    //todo: hace el efecto del movimiento segun la tecla pulsada
    move() {
        this.x += this.vx;
        this.y += this.vy;

        // Actualizar el índice del cuadro de animación
        if (this.vx !== 0 || this.vy !== 0) {
            this.frameIndex = (this.frameIndex + 1) % 16;
        }
    }

    //todo: recibe el evento del setListener de la clase Game y detecta que tecla se esta pulsando
    keyDown(key) {
        if(key === A) this.vx = -1;
        if(key === D) this.vx = 1;
        if(key === W) this.vy = -1;
        if(key === S) this.vy = 1;
    }

    keyUp(key) {
        // if (key === A) this.vx = 0;
        // if (key === D) this.vx = 0;
        // if (key === W) this.vy = 0;
        // if (key === S) this.vy = 0;
        if (key === A || key === D) this.vx = 0;
        if (key === W || key === S) this.vy = 0;
    }

    collides(obstaculo) {
        if (this.x < obstaculo.x + obstaculo.w &&
            this.y < obstaculo.y + obstaculo.h &&
            this.x + this.w > obstaculo.x &&
            this.y + this.h > obstaculo.y) {
            console.log("colision detectada")
        }
    }
}

