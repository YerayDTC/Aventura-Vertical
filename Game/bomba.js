class Bomba {
    // Constructor que inicializa las propiedades de la bomba
    constructor(ctx, x, y, direccion) {
        this.ctx = ctx; // Contexto gráfico donde se dibujará la bomba
        this.x = x || 1; // Posición inicial en el eje X, valor predeterminado: 50
        this.y = y || 1; // Posición inicial en el eje Y, valor predeterminado: 50
        this.w = 20; // Ancho de cada frame en el sprite
        this.h = 20; // Altura de cada frame en el sprite
        this.direccion = direccion;

        this.img = new Image(); // Instancia de la clase Image para el sprite
        this.img.src = "../Public/img/bomba.png"; // Establece la ruta del sprite

        // this.countW = 0; // Contador para la posición horizontal en el sprite
        // this.countH = 0; // Contador para la posición vertical en el sprite
        // this.tick = 0; // Contador de tiempo para controlar la animación

        this.dispose = true; // Indica si la bomba debe ser eliminada
        this.colliding = false; // Indica si la bomba está colisionando con otro objeto
    }

    // Método para dibujar la bomba en el canvas
    draw() {
        this.ctx.drawImage(
            this.img,     // Imagen del sprite
            this.x,        // Posición X en el canvas
            this.y,        // Posición Y en el canvas
            this.w,        // Ancho del frame en el canvas
            this.h         // Altura del frame en el canvas
        );
    }

    // Método para controlar el movimiento y la animación de la bomba
    move() {
        
    }

    // Método para verificar si la bomba es visible
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
