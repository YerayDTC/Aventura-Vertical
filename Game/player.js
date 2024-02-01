class Player {
    // Constructor que inicializa las propiedades del jugador
    constructor(ctx) {
        this.ctx = ctx; // Contexto gráfico donde se dibujará el jugador
        this.x = 100; // Posición horizontal inicial
        this.y = 300; // Posición vertical inicial
        this.w = 11; // Ancho del jugador
        this.h = 18; // Alto del jugador
        this.vx = 0; // Velocidad horizontal
        this.vy = 0; // Velocidad vertical
        this.rx = 0; // Rozamiento en el eje X
        this.ry = 0; // Rozamiento en el eje Y

        // Carga la imagen del sprite del jugador
        this.img = new Image();
        this.img.src = "../Public/img/gorroAbajoR.png";
        this.imgFrame = 0; // Índice del cuadro de animación actual
        this.framesPorFila = 4; // Número de cuadros por fila en el sprite
        this.frameTick = 0; // Contador de frames (intervalo de píxel)
        this.direction = "down"; // Dirección actual del jugador

        this.bombas = []; // Array para almacenar las bombas

    }

    // Método para dibujar al jugador en el canvas
    draw() {
        this.ctx.drawImage(
            this.img,
            (this.imgFrame * this.img.width) / this.framesPorFila, // Posición X en el sprite
            0, // Posición Y en el sprite
            this.img.width / this.framesPorFila, // Ancho del frame en el sprite
            this.img.height, // Alto del frame en el sprite
            this.x, // Posición X en el canvas
            this.y, // Posición Y en el canvas
            this.w, // Ancho del jugador en el canvas
            this.h // Alto del jugador en el canvas
        );

        // Dibuja cada bomba en el array, si no se hace esto no se pinta en el canvas.
        this.bombas.forEach(bomba =>{
            bomba.draw(); // llama a la funcion draw de la clase bomba para pintarla dentro del array por asi decirlo
        })
    }

    // Método para controlar el movimiento del jugador
    move() {
        // Ajusta la velocidad según el tiempo entre frames
        this.frameTick++;
        this.x += this.vx;
        this.y += this.vy;
        this.vx += this.rx;
        this.vy += this.ry;

        // Reinicia el rozamiento cuando la velocidad es cero
        if (this.vy === 0) {
            this.ry = 0;
        }
        if (this.vx === 0) {
            this.rx = 0;
        }

        // Incrementa el contador de frames si el jugador se está moviendo
        if (this.frameTick >= 10 && (this.vx || this.vy)) {
            this.imgFrame++; // Cambia el sprite
            this.frameTick = 0;
        }

        // Reajusta el índice de sprite al alcanzar el final de la fila
        if (this.imgFrame > 3) {
            this.imgFrame = 0;
        }

        // Bloquea el movimiento del jugador en los límites del canvas
        if (this.y <= 0) {
            this.y = 0;
            this.vy = 0;
        }
        if (this.y + this.h >= this.ctx.canvas.height) {
            this.y = this.ctx.canvas.height - this.h;
            this.vy = 0;
        }
        if (this.x <= 0) {
            this.x = 0;
            this.vx = 0;
        }
        if (this.x + this.w >= this.ctx.canvas.width) {
            this.x = this.ctx.canvas.width - this.w;
            this.vx = 0;
        }

        this.bombas.forEach(bomba => {
            bomba.move(); // llama a la funcion move de la clase bomba para pintar el movimiento dentro del array por asi decirlo
        })
    }

    // Método para manejar eventos de teclado al presionar una tecla
    keyDown(key) {
        if (key === A) {
            this.img.src = "../Public/img/gorroIZquierdaR.png";
            this.vx = -1;
            this.direction = "left";
        }
        if (key === D) {
            this.img.src = "../Public/img/gorroDerechaR.png";
            this.vx = 1;
            this.direction = "right";
        }
        if (key === W) {
            this.img.src = "../Public/img/gorroArribaR.png";
            this.vy = -1;
            this.direction = "up";
        }
        if (key === S && !this.isMoving) {
            this.img.src = "../Public/img/gorroAbajoR.png";
            this.vy = 1;
            this.direction = "down";
        }
        if (key === B) {
            this.putBomb();
        }
        if(key === N) {
            this.bombas.forEach(element => {
                element.explosion = true;
            });
        }

        // Controla el salto del jugador
        if (key === ALT) {
            switch (this.direction) {
                case "up":
                    this.vy = -4; // Salto hacia arriba
                    this.ry = 0.25; // Contrarresta la presión del movimiento
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
            ALT = 0; // Desactiva la tecla ALT temporalmente
            setTimeout(() => {
                ALT = 16; // Restablece la tecla ALT después de un tiempo
            }, timer);
        }
    }

    // Método para manejar eventos de teclado al soltar una tecla
    keyUp(key) {
        // Detiene el movimiento cuando se suelta la tecla correspondiente
        // if (key === A) this.vx = 0;
        // if (key === D) this.vx = 0;
        // if (key === W) this.vy = 0;
        // if (key === S) this.vy = 0;
        if (key === A || key === D) { this.vx = this.rx = 0 }; // en una linea
        if (key === W || key === S) { this.vy = 0; this.ry = 0 }; // en dos lineas
    }

    //!hacer el disparo de la bomba
    putBomb() {
        const bomba = new Bomba(this.ctx, this.x, this.y);
        this.bombas.push(bomba);
    }
 
    // Método para detectar colisiones con otro objeto
    collides(obstaculo) {
        if (this.x < obstaculo.x + obstaculo.w &&
            this.y < obstaculo.y + obstaculo.h &&
            this.x + this.w > obstaculo.x &&
            this.y + this.h > obstaculo.y) {
        }
    }
}
