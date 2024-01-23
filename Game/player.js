class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 100; // posision horizontal
        this.y = 10; //posision vertical
        this.w = 30; //ancho
        this.h = 40; //alto
        this.vx = 0; //velocidad horizontal
        this.vy = 0; //velcidad vertical
        this.g = 0; //gravedad

        //carga la imagen del sprite
        this.img = new Image();
        this.img.src = "../Public/img/gorroAbajo.png"
        this.imgFrame = 0; // Índice del cuadro de animación actual
        this.framesPorFila = 4; // Número de cuadros por fila en el sprite
        this.frameTick = 0; // contador de frames (intervalo de pixel)
        // this.currentInterval = 0;
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            (this.imgFrame * this.img.width) / this.framesPorFila, //eje X = Ancho de la tira
            0, // eje Y = Altura
            this.img.width / this.framesPorFila, // se muestra una cuarta parte de la tira de la imagen
            this.img.height,
            this.x, // te lo pinta en el canvas
            this.y,
            this.w,
            this.h
        );

    }

    //todo: hace el efecto del movimiento segun la tecla pulsada
    move() {
        // Ajusta la velocidad según el tiempo entre frames
        this.frameTick++;
        this.x += this.vx;
        this.y += this.vy;

        // incrementa el frameTick
        if (this.frameTick >= 10 && (this.vx || this.vy)) { //evita que se mueva sin pulsar la tecla
            this.imgFrame++; // cambia el sprite
            this.frameTick = 0;
        }

        //esto hace que el frameTick vuelva a la posicion inicial 0 cuando acabe de recorrer la fila
        if (this.imgFrame > 3) {
            this.imgFrame = 0;
        }
        //todo: bloqueo para el limite superior.
        if (this.y <= 0) {
            this.y = 0;
            this.vy = 0;
        }

        //todo: bloqueo para el limite inferior.
        if(this.y + this.h >= this.ctx.canvas.height) {
            this.y = this.ctx.canvas.height - this.h;
            this.vy = 0;
    }

        //todo: bloqueo para el limite izquierdo.
        if(this.x <= 0) {
            this.x = 0;
            this.vx = 0;
        }

        //todo: bloqueo para el limite derecho.
        if(this.x + this.w >= this.ctx.canvas.width) {
            this.x = this.ctx.canvas.width - this.w;
            this.vx = 0;
        }
}

    //todo: recibe el evento del setListener de la clase Game y detecta que tecla se esta pulsando

    keyDown(key) {
        if (key === A) {
            this.img.src = "../Public/img/gorroIZquierda.png"
            this.vx = -1
        };
        if (key === D) {
            this.img.src = "../Public/img/gorroDerecha.png"
            this.vx = 1
        };
        if (key === W) {
            this.img.src = "../Public/img/gorroArriba.png"
            this.vy = -1
        };
        if (key === S && !this.isMoving) {
            this.img.src = "../Public/img/gorroAbajo.png"
            this.vy = 1;
        }

        // if (key === ALT && this.vy === 0) {
        //     this.vy = -4
        //     this.g = 0.2
        //     ALT = 0;
        //     setTimeout(() => {
        //         ALT = 16;
        //     }, 400);
        // }
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

