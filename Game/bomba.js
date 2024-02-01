class Bomba {
    // Constructor que inicializa las propiedades de la bomba
    constructor(ctx, x, y) {
        //bomba
        this.ctx = ctx; // Contexto gráfico donde se dibujará la bomba
        this.x = x || 1; // Posición inicial en el eje X, valor predeterminado: 50
        this.y = y || 1; // Posición inicial en el eje Y, valor predeterminado: 50
        this.w = 12; // Ancho de cada frameBomba en el sprite
        this.h = 12; // Altura de cada frameBomba en el sprite
        this.vx = 0;
        this.vy = 0;
        this.bombaTick = 0;
        this.frameBomba = 0;

        //explosion
        this.frameExplosion = 0;
        this.explosionTick = 0;
        this.explosion = false;
        this.explosionW = 40; //ancho de la explosion
        this.explosionH = 40; //alto de la explosion

        //comun
        this.disponible = true; //visual en pantalla

        //imagenes
        this.imgBomba = new Image(); // Instancia de la clase Image para el sprite
        this.imgBomba.src = "../Public/img/bomba.png"; // Establece la ruta del sprite
        this.imgExplosion = new Image();
        this.imgExplosion.src = "../Public/img/explodingBomb.png";
    }

    // Método para dibujar la bomba en el canvas
    draw() {
        if(this.explosion === false) {
            this.ctx.drawImage(
                this.imgBomba,     // Imagen del sprite
                (this.frameBomba * this.imgBomba.width) / 3, // Numero de imagenes en el sprite (numero de frames)
                0, // Posicion y de la altura. simpre esta en mismo eje.
                this.imgBomba.width / 3, //coge el frameBomba x y lo divide entre 3 y muestra el ancho de la primera imagen
                this.imgBomba.height, // muestra toda la altura de la bomba
                this.x,        // Posición X en el canvas
                this.y,        // Posición Y en el canvas
                this.w,        // Ancho del frameBomba en el canvas
                this.h         // Altura del frameBomba en el canvas
            );
        } else {
            this.ctx.drawImage(
                this.imgExplosion,     // Imagen del sprite
                (this.frameExplosion * this.imgExplosion.width) / 4, // Numero de imagenes en el sprite (numero de frames)
                0, // Posicion y de la altura. simpre esta en mismo eje.
                this.imgExplosion.width / 4, //coge el frameBomba x y lo divide entre 3 y muestra el ancho de la primera imagen
                this.imgExplosion.height, // muestra toda la altura de la bomba
                this.x - 13,// Posición X donde se deposita la bomba para hacer el efecto de la explosion.
                this.y -15,// Posición Y donde se deposita la bomba para hacer el efecto de la explosion.
                this.explosionW,        // Ancho del frameBomba en el canvas
                this.explosionH        // Altura del frameBomba en el canvas
            );
        }


    }

    // Método para controlar la animación de la bomba 
    move() {
        if(this.explosion === false) {
            this.bombaTick++;
            if (this.bombaTick >= 15) {
                this.frameBomba++;
                this.bombaTick = 0;
            }
    
            if (this.frameBomba > 2) {
                this.frameBomba = 0;
            }
        } else{
            this.explosionTick++;
            if (this.explosionTick > 10) {
                this.frameExplosion++;
                this.explosionTick = 0;
            }
    
            if (this.frameExplosion > 3) {
                this.disponible = false;
            }
        }
    }

    // Método para verificar si la bomba es visible
    isVisible() {
        return this.disponible; // Devuelve el estado de dispose
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
