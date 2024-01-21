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
        this.img.frame = 0; // Índice del cuadro de animación actual
        this.framesPorFila = 4; // Número de cuadros por fila en el sprite
        this.frameTick = 0; // contador como el setTimeout (contador de frames)
        this.isMoving = false;
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            (this.img.frame * this.img.width) / this.framesPorFila, //eje X = Ancho de la tira
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
        this.x += this.vx;
        this.y += this.vy;

        //hace que cada x tiempo en frame cambie de posicion al muñeco
        if(this.frameTick >= 40) {
            this.img.frame += 1;
            this.frameTick = 0;
        }
        //esto hace que el frame vuelva a la posicion inicial 0 cuando acabe de recorrer la fila
        if (this.img.frame > 3) {
            this.img.frame = 0;
        }
}

    //todo: recibe el evento del setListener de la clase Game y detecta que tecla se esta pulsando
    
    keyDown(key) {
        if(key === A) {
            this.img.src = "../Public/img/gorroIZquierda.png"
            // this.img.frame++;
            this.frameTick++;
            this.vx = -1
        };
        if(key === D) {
            this.img.src = "../Public/img/gorroDerecha.png"
            // this.img.frame++;
            this.frameTick++;
            this.vx = 1
        };
        if(key === W) {
            this.img.src = "../Public/img/gorroArriba.png"
            // this.img.frame++;
            this.frameTick++;
            this.vy = -1
        };
        if(key === S && !this.isMoving) {
            this.img.src = "../Public/img/gorroAbajo.png"
            // this.img.frame++;
            this.frameTick++;
            this.vy = 1;
        }
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

