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

    // Método para limpiar el canvas
    clear() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height); // Borra el canvas
        // Filtra las cajas visibles y actualiza el array de cajas, si no es visible la elimina del array
        this.cajas = this.cajas.filter(caja => caja.isVisible());
    }

    // Método para dibujar los elementos del juego
    draw() {
        this.background.draw(); // Dibuja el fondo
        this.player.draw(); // Dibuja al jugador

        // Dibuja cada caja en el array de cajas
        this.cajas.forEach(caja => {
            caja.draw();
        });
    }

    // Método para mover los elementos del juego
    move() {
        this.player.move(); // Mueve al jugador

        // Mueve cada caja en el array de cajas
        this.cajas.forEach(caja => {
            caja.move();
        });
    }

    // Método para comprobar colisiones
    checkCollision() {

        this.cajas.forEach((element) => {
            if(element.collides(this.player)) {
                element.colliding = true; // 
            }
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

    // Método para agregar una nueva caja al juego
    // addCaja() {
    //     let caja = new Caja(ctx); // Crea una nueva caja
    //     this.cajas.push(caja); // Agrega la caja al array de cajas
    // }

    grid() {
        // Tamaño de la cuadrícula y número de filas y columnas
        let gridSize = 35; // Tamaño de la cuadrícula
        let numFilas = Math.floor(this.ctx.canvas.height / gridSize); // Número de filas
        let numColums = Math.floor(this.ctx.canvas.width / gridSize); // Número de columnas

        Array.from({ length: numFilas }).map((_, fil) => {
            return Array.from({length: numColums}).map((_, col) => {
                // Calcular la posición de la caja en la cuadrícula
                let x = col * gridSize;
                let y = fil * gridSize
                // Crear una nueva caja en la posición calculada
                let caja = new Caja(ctx, x, y);

                // Agregar la caja al array de cajas del juego
                this.cajas.push(caja);
                console.log(this.cajas)
                // console.log(JSON.stringify(this.cajas, null, 2)); //Esto imprimirá el objeto de manera más legible en la consola con una sangría de 2 espacios.

            })
        }

    )}



}

/*ChatGPT
Una idea para colocar las cajas en el lienzo como si fuera una cuadrícula es generar un bucle que recorra todas las celdas de la cuadrícula y, para cada celda, crear una caja en esa ubicación. Aquí tienes un ejemplo de cómo podrías implementarlo:

Define el tamaño de la cuadrícula y el número de filas y columnas.
Utiliza un bucle anidado para recorrer cada fila y columna de la cuadrícula.
Calcula la posición x e y de cada caja en función del índice de fila y columna, y el tamaño de la cuadrícula.
Crea una nueva instancia de la clase Caja en cada posición calculada.
Agrega cada caja creada al array de cajas del juego. */



// // Tamaño de la cuadrícula y número de filas y columnas
// const gridSize = 50; // Tamaño de la cuadrícula
// const numRows = Math.floor(canvas.height / gridSize); // Número de filas
// const numCols = Math.floor(canvas.width / gridSize); // Número de columnas

// // Crear cajas en cada ubicación de la cuadrícula
// for (let fil = 0; fil < numRows; fil++) {
//     for (let col = 0; col < numCols; col++) {
//         // Calcular la posición de la caja en la cuadrícula
//         const x = col * gridSize;
//         const y = fil * gridSize;

//         // Crear una nueva caja en la posición calculada
//         let caja = new Caja(ctx, x, y);

//         // Agregar la caja al array de cajas del juego
//         game.cajas.push(caja);
//     }
// }
