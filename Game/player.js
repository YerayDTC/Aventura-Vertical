class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 100; // posision horizontal
        this.y = 300; //posision vertical
        this.w = 11; //ancho
        this.h = 18; //alto
        this.vx = 0; //velocidad horizontal
        this.vy = 0; //velcidad vertical
        this.rx = 0; //rozamiento en x
        this.ry = 0; //rozamiento en y

        //carga la imagen del sprite
        this.img = new Image();
        this.img.src = "../Public/img/gorroAbajoR.png"
        this.imgFrame = 0; // Índice del cuadro de animación actual
        this.framesPorFila = 4; // Número de cuadros por fila en el sprite
        this.frameTick = 0; // contador de frames (intervalo de pixel)
        
        this.direction = "down";
        
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
        this.vx += this.rx;
        this.vy += this.ry;

        if(this.vy === 0) {
            this.ry = 0;
        }

        if(this.vx === 0) {
            this.rx = 0;
        }

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
            this.img.src = "../Public/img/gorroIZquierdaR.png"
            this.vx = -1
            this.direction = "left";
        };
        if (key === D) {
            this.img.src = "../Public/img/gorroDerechaR.png"
            this.vx = 1
            this.direction = "right"
        };
        if (key === W) {
            this.img.src = "../Public/img/gorroArribaR.png"
            this.vy = -1
            this.direction = "up";
        };
        if (key === S && !this.isMoving) {
            this.img.src = "../Public/img/gorroAbajoR.png"
            this.vy = 1;
            this.direction = "down";
        }

        //salto
        if (key === ALT) {
            switch (this.direction) {
                case "up":
                    this.vy = -4; // va hacia arriba
                    this.ry = 0.25; // contrarresta la presion del movimiento
                    break;
                case "left":
                    this.vx = -4;
                    this.rx = 0.25;
                    break;
                case "right":
                    this.vx = 4;
                    this.rx = -0.25;
                    break;
                case "down":
                    this.vy = 4;
                    this.ry = -0.25;
                    break;
            
                default:
                    break;
            }
                ALT = 0;
                setTimeout(() => {
                    ALT = 16;
                }, timer);
        }

    }

    keyUp(key) {
        // if (key === A) this.vx = 0;
        // if (key === D) this.vx = 0;
        // if (key === W) this.vy = 0;
        // if (key === S) this.vy = 0;
        if (key === A || key === D) {this.vx = this.rx = 0}; // en una linea
        if (key === W || key === S) {this.vy = 0; this.ry = 0}; // en dos lineas

        
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

