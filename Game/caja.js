class Caja {
    // Constructor que inicializa las propiedades de la caja
    constructor(ctx, x, y) {
        this.ctx = ctx; // Contexto gráfico donde se dibujará la caja
        this.x = x || 1; // Posición inicial en el eje X, valor predeterminado: 50
        this.y = y || 1; // Posición inicial en el eje Y, valor predeterminado: 50
        this.w = 40; // Ancho de cada frame en el sprite
        this.h = 40; // Altura de cada frame en el sprite

        this.caja = new Image(); // Instancia de la clase Image para el sprite
        this.caja.src = "../Public/img/cajaA.png"; // Establece la ruta del sprite

        this.countW = 0; // Contador para la posición horizontal en el sprite
        this.countH = 0; // Contador para la posición vertical en el sprite
        this.tick = 0; // Contador de tiempo para controlar la animación

        this.dispose = true; // Indica si la caja debe ser eliminada
        this.colliding = false; // Indica si la caja está colisionando con otro objeto
    }

    // Método para dibujar la caja en el canvas
    draw() {
        this.ctx.drawImage(
            this.caja,     // Imagen del sprite
            (this.countW * this.caja.width) / 4, // Posición X en el sprite
            (this.countH * this.caja.height) / 3, // Posición Y en el sprite
            this.caja.width / 4, // Ancho del frame en el sprite
            this.caja.height / 3, // Altura del frame en el sprite
            this.x,        // Posición X en el canvas
            this.y,        // Posición Y en el canvas
            this.w,        // Ancho del frame en el canvas
            this.h         // Altura del frame en el canvas
        );
    }

    // Método para controlar el movimiento y la animación de la caja
    move() {
        if (this.colliding) { // Verifica si está colisionando con otro objeto
            this.tick++; // Incrementa el contador de tiempo
            if (this.tick > 3) {
                this.countW++; // Avanza al siguiente frame horizontalmente
                this.tick = 0; // Reinicia el contador de tiempo
            }
            if (this.countW > 3) { // Si se alcanza el final de la fila en el sprite
                this.countH++; // Cambia a la siguiente fila
                this.countW = 0; // Reinicia la posición horizontal
            }
        }

        if (this.countH > 2) { // Si se alcanza el final de la animación
            this.dispose = false; // Indica que la caja debe ser eliminada
        }
    }

    // Método para verificar si la caja es visible
    isVisible() {
        return this.dispose; // Devuelve el estado de dispose
    }

    // Método para detectar colisiones con otro objeto
    collides(obstaculo) {
        if (
            this.x < obstaculo.x + obstaculo.w &&
            this.y < obstaculo.y + obstaculo.h &&
            this.x + this.w > obstaculo.x &&
            this.y + this.h > obstaculo.y
            ) {
                // Hay colisión con el jugador, inicia la animación del sprite
                this.colliding = true;
        }
    }
}
