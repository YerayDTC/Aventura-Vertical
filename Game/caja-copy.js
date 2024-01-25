class Caja {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 150;
        this.y = 50;
        this.w = 40; // Ancho del sprite (ajusta según tus necesidades)
        this.h = 40; // Alto del sprite (ajusta según tus necesidades)
        this.vx = 0;
        this.vy = 0;
        this.spriteSpeed = 0.2; // Velocidad del sprite
        this.frameActual = 0;
        this.numColumnas = 4; // Número de columnas en el sprite
        this.numFilas = 3; // Número de filas en el sprite
        this.frameWidth = 0; // Ancho de cada frame en el sprite
        this.frameHeight = 0; // Alto de cada frame en el sprite
        this.explosionFrames = 12; // Número total de frames en la animación de explosión

        this.explosionSpeed = 0.3; // Velocidad de la animación de explosión (ajusta según tus necesidades)
        this.explosionCounter = 0; // Contador para controlar la velocidad de la animación

        // Carga la imagen del sprite
        this.imgBox = new Image();
        this.imgBox.src = "../Public/img/cajaA.png";

        // Calcula el ancho y alto de cada frame en el sprite
        this.imgBox.onload = () => {
            this.frameWidth = this.imgBox.width / this.numColumnas;
            this.frameHeight = this.imgBox.height / this.numFilas;
        };
    }

    draw() {
        // Calcular las coordenadas de textura
        const fila = Math.floor(this.frameActual / this.numColumnas);
        const columna = this.frameActual % this.numColumnas;

        // Dibujar la subimagen actual del sprite en el canvas
        this.ctx.drawImage(
            this.imgBox,
            columna * this.frameWidth, fila * this.frameHeight,
            this.frameWidth, this.frameHeight,
            this.x, this.y,
            this.w, this.h
        );
    }
   

    //!explode puede ajustarse la velocidad de la animacion y animate no, pero hacen la misma animacion. usar uno dentro de la cosision
    explode() {
        // Realizar la animación de explosión
        if (this.explosionCounter % Math.floor(1 / this.explosionSpeed) === 0) {
            // Cambiar a la siguiente frame en la animación de explosión
            this.frameActual = (this.frameActual + 1) % this.explosionFrames;
        }
        this.explosionCounter++;
    }
    
    // animate() {
    //     // Incrementar el contador de frames y reiniciarlo si alcanza el final
    //     this.frameActual = (this.frameActual + 1) % (this.numFilas * this.numColumnas);
    // }
    update() {
        // Actualizar la posición, velocidad u otras lógicas de la caja si es necesario
    }

    collides(player) {
        if (
            this.x < player.x + player.w &&
            this.y < player.y + player.h &&
            this.x + this.w > player.x &&
            this.y + this.h > player.y
        ) {
            // Hay colisión con el jugador, inicia la animación del sprite
            this.explode()
        }
    }
}


