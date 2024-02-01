class Game {
    // Constructor que inicializa el juego
    constructor(ctx) {
        this.ctx = ctx; // Contexto gráfico donde se dibujará el juego
        this.player = new Player(ctx); // Creación del jugador
        this.background = new Background(ctx); // Creación del fondo
        this.interval = null; // Intervalo para el bucle principal del juego
        this.setListeners(); // Configuración de los listeners de teclado
        this.cajas = []; // Array para almacenar las cajas
        this.tick = 0; // Contador de tiempo

    }

    // Método para iniciar el juego
    start() {
        this.interval = setInterval(() => {
            this.clear(); // Borra el canvas
            this.move(); // Mueve los elementos del juego
            this.draw(); // Dibuja los elementos del juego
            this.checkCollision(); // Comprueba las colisiones
            this.tick++; // Incrementa el contador de tiempo

            // Agrega una nueva caja cada cierto intervalo de tiempo
            if (this.tick >= 100) {
                // this.addCaja();
                // this.grid();
                this.tick = 0;
            }

        }, 1000 / 60); // Fija la velocidad de actualización del juego a 60 FPS
        
        this.grid(); // Posiciona las cajas en el canvas

    }

    // Método para detener el juego
    stop() {
        clearInterval(this.interval); // Detiene el intervalo del juego
        this.interval = null; // Reinicia el intervalo
    }

    // Método para limpiar el canvas, limpia los arrays para que no se llenen.
    clear() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height); // Borra el canvas
        // Filtra las cajas visibles y actualiza el array de cajas, si no es visible la elimina del array
        this.cajas = this.cajas.filter(e => e.isVisible());
        this.player.bombas = this.player.bombas.filter(e => e.isVisible());
        console.log("array de bombas " + this.player.bombas);
    }

    // Método para dibujar los elementos del juego
    draw() {
        this.background.draw(); // Dibuja el fondo
        this.player.draw(); // Dibuja al jugador

        // Dibuja cada caja en el array de cajas
        this.cajas.forEach(element => {
            element.draw();
        });
    }

    // Método para mover los elementos del juego
    move() {
        this.player.move(); // Mueve al jugador

        // Mueve cada caja en el array de cajas
        this.cajas.forEach(element => {
            element.move();
        });
    }

    // Método para comprobar colisiones
    checkCollision() {

        // this.cajas.forEach((element) => {
        //     if(element.collides(this.player)) {
        //         element.colliding = true; // 
        //     }
        // });

        //!hay que hacer que colisione con el fuego de la explosion
        this.cajas.forEach((caja) => {
            this.player.bombas.forEach(bomba => {
                if (caja.collides(bomba)) {
                    caja.colliding = true; // 
                }   
            });
        });
    }

    // Método para configurar los listeners de teclado
    setListeners() {
        // Permite controlar el movimiento del jugador con las teclas de flecha
        document.addEventListener("keydown", ev => {
            this.player.keyDown(ev.keyCode);
        });

        // Detiene el movimiento del jugador cuando se sueltan las teclas de flecha
        document.addEventListener("keyup", ev => {
            this.player.keyUp(ev.keyCode);
        });
    }

    grid() {
        // Tamaño de la cuadrícula y número de filas y columnas
        let gridSize = 35; // Tamaño de la cuadrícula
        let numFilas = Math.floor(this.ctx.canvas.height / gridSize); // Número de filas
        let numColums = Math.floor(this.ctx.canvas.width / gridSize); // Número de columnas

        // Crear cajas en cada ubicación de la cuadrícula
        for (let fil = 0; fil < numFilas; fil++) {
            for (let col = 0; col < numColums; col++) {
                // Calcular la posición de la caja en la cuadrícula
                const x = col * gridSize;
                const y = fil * gridSize;

                // Crear una nueva caja en la posición calculada
                let caja = new Caja(ctx, x, y);

                // Agregar la caja al array de cajas del juego
                this.cajas.push(caja);
            }
        }
    }
}