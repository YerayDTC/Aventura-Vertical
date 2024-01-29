// class Caja {
//     // Constructor que inicializa las propiedades de la caja
//     constructor(ctx) {
//         this.ctx = ctx;
//         this.x = 200; // Posición inicial en el eje X
//         this.y = 200; // Posición inicial en el eje Y
//         this.caja = new Image(); // Instancia de la clase Image para el sprite
//         this.caja.src = "../Public/img/cajaA.png"; // Establece la ruta del sprite
//         this.spriteFrameWidth = 20; // Ancho de cada frame en el sprite
//         this.spriteFrameHeight = 20; // Altura de cada frame en el sprite
//         this.totalFramesPerRow = 4; // Número total de frames por fila en el sprite (4)
//         this.numFilas = 3; // Número total de filas en el sprite (3) totalRows
//         this.totalFrames = this.totalFramesPerRow * this.numFilas; // Cálculo del número total de frames en el sprite (4*3=12)
//         this.currentFrame = 0; // Número de frame actual (inicia en 0)

//     }


//     animacion() {
//         // Incrementa el frame actual (puedes ajustar la velocidad de la animación cambiando el valor 0.2)
//         this.currentFrame += 0.2;

//         // Si hemos llegado al final del sprite, reinicia el frame
//         if (this.currentFrame >= this.totalFrames) {
//             this.currentFrame = 0;
//         }
//     }


//     draw() { // Dibuja el sprite en el canvas utilizando el ctx 2D

//         // Calcula la fila del frame actual dividiendo el índice del frame actual por el número de columnas en el sprite
//         const row = Math.floor(this.currentFrame / 4); // 0/4 = 0 fila 0 como los indices de un array
//         // Calcula la columna del frame actual tomando el resto de la división del índice del frame actual por el número de columnas
//         const col = this.currentFrame % 4; // 0%4 = 0 columna 0 como los indices de un array

//         //?En caso de que no funcione arriba descomentar este y comentar el otro.
//         // const row = Math.floor(this.currentFrame / 4); // 4 frames por fila
//         // const col = this.currentFrame % 3; // 3 frames por columna


//         // Dibuja el frame actual del sprite en el canvas
//         this.ctx.drawImage(
//             this.caja,              // Imagen del sprite
//             col * this.spriteFrameWidth,  // Posición X en el sprite (multiplica la columna por el ancho del frame) 0*20 = 0
//             row * this.spriteFrameHeight, // Posición Y en el sprite (multiplica la fila por la altura del frame) 0*20 = 0
//             this.spriteFrameWidth,        // Ancho del frame del sprite
//             this.spriteFrameHeight,       // Altura del frame del sprite
//             this.x,                       // Posición X en el canvas
//             this.y,                       // Posición Y en el canvas
//             this.canvasFrameWidth,        // Ancho del frame en el canvas
//             this.canvasFrameHeight         // Altura del frame en el canvas
//         );
//         console.log(JSON.stringify(this.ctx.drawImage, null, 2)); //Esto imprimirá el objeto de manera más legible en la consola con una sangría de 2 espacios.

//     }

//         // draw() {
//         //     // Calcular las coordenadas de textura
//         //     const fila = Math.floor(this.frameActual / this.numColumnas);
//         //     const columna = this.frameActual % this.numColumnas;

//         //     // Dibujar la subimagen actual del sprite en el canvas
//         //     this.ctx.drawImage(
//         //         this.caja,
//         //         columna * this.frameWidth, fila * this.frameHeight,
//         //         this.frameWidth, this.frameHeight,
//         //         this.x, this.y,
//         //         this.w, this.h
//         //     );
//         // }
    

//     collides(obstaculo) {
//             if (
//                 this.x < obstaculo.x + obstaculo.w &&
//                 this.y < obstaculo.y + obstaculo.h &&
//                 this.x + this.w > obstaculo.x &&
//                 this.y + this.h > obstaculo.y
//             ) {
//                 // Hay colisión con el jugador, inicia la animación del sprite
//                 // this.animacion()
//             }
//         }
// }




// class Caja {
//     constructor(ctx) {
//         this.ctx = ctx;
//         this.x = 100; // Posición inicial en el eje X
//         this.y = 300; // Posición inicial en el eje Y
//         this.w = 20; // Ancho de cada frame en el sprite
//         this.h = 20; // Altura de cada frame en el sprite
//         this.totalFramesPerRow = 4; // Número total de frames por fila en el sprite (4)
//         this.numFilas = 3; // Número total de filas en el sprite (3)
//         this.totalFrames = this.totalFramesPerRow * this.numFilas; // Cálculo del número total de frames en el sprite (4*3=12)
//         this.currentFrame = 0; // Número de frame actual (inicia en 0)
//         this.canvasFrameWidth = this.ctx.canvas.width;
//         this.canvasFrameHeight = this.ctx.canvas.height;

//         // Calcula la fila y la columna del frame actual
//         this.fila = Math.floor(this.currentFrame / this.totalFramesPerRow);
//         this.columna = this.currentFrame % this.totalFramesPerRow;

//         // Precarga la imagen del sprite
//         this.caja = new Image();
//         this.cargarImagen("../Public/img/cajaA.png");
//         this.caja.onload = () => {
//             this.imagenCargada = true;
//             // console.log(JSON.stringify(this.caja, null, 2)); //Esto imprimirá el objeto de manera más legible en la consola con una sangría de 2 espacios.

//         };
//     }

//     animacion() {
//         // Incrementa el frame actual (puedes ajustar la velocidad de la animación cambiando el valor 0.2)
//         this.currentFrame += 0.2;

//         // Si hemos llegado al final del sprite, reinicia el frame
//         if (this.currentFrame >= this.totalFrames) {
//             this.currentFrame = 0;
//         }

//         // Actualiza la fila y la columna del frame actual
//         this.fila = Math.floor(this.currentFrame / this.totalFramesPerRow);
//         this.columna = this.currentFrame % this.totalFramesPerRow;
//     }

//     draw() {
//         // Verifica si la imagen está cargada antes de dibujarla
//         if (!this.imagenCargada) return;

//         // Dibuja el frame actual del sprite en el canvas
//         this.ctx.drawImage(
//             this.caja,              // Imagen del sprite
//             this.columna * this.w,  // Posición X en el sprite
//             this.fila * this.h,     // Posición Y en el sprite
//             this.w,                 // Ancho del frame del sprite
//             this.h,                 // Altura del frame del sprite
//             this.x,                 // Posición X en el canvas
//             this.y,                 // Posición Y en el canvas
//             this.canvasFrameWidth,  // Ancho del frame en el canvas
//             this.canvasFrameHeight  // Altura del frame en el canvas
//         );
//         console.log(JSON.stringify(this.caja, null, 2)); //Esto imprimirá el objeto de manera más legible en la consola con una sangría de 2 espacios.

//     }

//     collides(obstaculo) {
//         if (
//             this.x < obstaculo.x + obstaculo.w &&
//             this.y < obstaculo.y + obstaculo.h &&
//             this.x + this.w > obstaculo.x &&
//             this.y + this.h > obstaculo.y
//         ) {
//             // Hay colisión con el jugador, inicia la animación del sprite
//             this.animacion();
//         }
//     }

//     // Método para cargar la imagen del sprite
//     cargarImagen(src) {
//         this.caja.src = src;
//     }
// }





















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
        this.caja = new Image();
        this.caja.src = "../Public/img/cajaA.png";

        // Calcula el ancho y alto de cada frame en el sprite
        this.caja.onload = () => {
            this.frameWidth = this.caja.width / this.numColumnas;
            this.frameHeight = this.caja.height / this.numFilas;
        };
    }

    draw() {
        // Calcular las coordenadas de textura
        const fila = Math.floor(this.frameActual / this.numColumnas);
        const columna = this.frameActual % this.numColumnas;

        // Dibujar la subimagen actual del sprite en el canvas
        this.ctx.drawImage(
            this.caja,
            columna * this.frameWidth, fila * this.frameHeight,
            this.frameWidth, this.frameHeight,
            this.x, this.y,
            this.w, this.h
        );

    //   console.log(JSON.stringify(this.caja, null, 2)); //Esto imprimirá el objeto de manera más legible en la consola con una sangría de 2 espacios.

    }

    //!explode puede ajustarse la velocidad de la animacion y animate no, pero hacen la misma animacion. usar uno dentro de la cosision
    explode() {
        // Realizar la animación de explosión
        if (this.explosionCounter % Math.floor(1 / this.explosionSpeed) === 0) {
            // Cambiar a la siguiente frame en la animación de explosión
            this.frameActual = (this.frameActual + 1) % this.explosionFrames;
        }
        this.explosionCounter++;
        //hay que hacer que desaparezca la caja
        // if (this.explosionCounter === explosionFrames){
        //     this.caja = -10000;
        // }
    }
    
    animacion() {
            // Incrementa el frame actual (puedes ajustar la velocidad de la animación cambiando el valor 0.2)
            this.currentFrame += 0.2;

            // Si hemos llegado al final del sprite, reinicia el frame
            if (this.currentFrame >= this.totalFrames) {
                this.currentFrame = 0;
            }

            // Actualiza la fila y la columna del frame actual
            this.fila = Math.floor(this.currentFrame / this.totalFramesPerRow);
            this.columna = this.currentFrame % this.totalFramesPerRow;
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


