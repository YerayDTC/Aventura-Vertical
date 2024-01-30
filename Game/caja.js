class Caja {
    // Constructor que inicializa las propiedades de la caja
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x || 50; // Posición inicial en el eje X
        this.y = y || 50; // Posición inicial en el eje Y
        this.w = 40; // Ancho de cada frame en el sprite
        this.h = 40; // Altura de cada frame en el sprite

        this.caja = new Image(); // Instancia de la clase Image para el sprite
        this.caja.src = "../Public/img/cajaA.png"; // Establece la ruta del sprite

        this.countW = 0;
        this.countH = 0;
        this.tick = 0; // contador de tiempo

        this.dispose = true;
        this.colliding = true;
        
    }

    draw() { 
        this.ctx.drawImage(
            this.caja,     // Imagen del sprite
            (this.countW * this.caja.width) / 4,
            (this.countH * this.caja.height) / 3,
            this.caja.width / 4,
            this.caja.height / 3,
            this.x,        // Posición X en el canvas
            this.y,        // Posición Y en el canvas
            this.w,        // Ancho del frame en el canvas
            this.h         // Altura del frame en el canvas
        );
        // console.log(JSON.stringify(this.ctx.drawImage, null, 2)); //Esto imprimirá el objeto de manera más legible en la consola con una sangría de 2 espacios.
    }

    move() {
        if(this.colliding){
        //va recorriendo el eje x 
        this.tick ++;
        if(this.tick > 3) {
            this.countW ++;
            this.tick = 0;
        }

        //va bajando de linea en los frame
        if(this.countW > 3) {
            this.countH ++;
            this.countW = 0;
        }
        }
        
        if(this.countH > 3) {this.dispose = false;} // ha explotado la caja
        console.log(this.countH)
    }
    
    // comprueba que ya no hay mas imagenes en el sprite y lo elimina
    isVisible() {
        return this.dispose;
    }

    collides(obstaculo) {
            if (
                this.x < obstaculo.x + obstaculo.w &&
                this.y < obstaculo.y + obstaculo.h &&
                this.x + this.w > obstaculo.x &&
                this.y + this.h > obstaculo.y
            ) {
                // Hay colisión con el jugador, inicia la animación del sprite
                // this.animacion()
            }
        }
}




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





















// class Caja {
//     constructor(ctx) {
//         this.ctx = ctx;
//         this.x = 150;
//         this.y = 50;
//         this.w = 40; // Ancho del sprite (ajusta según tus necesidades)
//         this.h = 40; // Alto del sprite (ajusta según tus necesidades)
//         this.vx = 0;
//         this.vy = 0;
//         this.spriteSpeed = 0.2; // Velocidad del sprite
//         this.frameActual = 0;
//         this.numColumnas = 4; // Número de columnas en el sprite
//         this.numFilas = 3; // Número de filas en el sprite
//         this.frameWidth = 0; // Ancho de cada frame en el sprite
//         this.frameHeight = 0; // Alto de cada frame en el sprite
//         this.explosionFrames = 12; // Número total de frames en la animación de explosión

//         this.explosionSpeed = 0.3; // Velocidad de la animación de explosión (ajusta según tus necesidades)
//         this.explosionCounter = 0; // Contador para controlar la velocidad de la animación

//         // Carga la imagen del sprite
//         this.caja = new Image();
//         this.caja.src = "../Public/img/cajaA.png";

//         // Calcula el ancho y alto de cada frame en el sprite
//         this.caja.onload = () => {
//             this.frameWidth = this.caja.width / this.numColumnas;
//             this.frameHeight = this.caja.height / this.numFilas;
//         };
//     }

//     draw() {
//         // Calcular las coordenadas de textura
//         const fila = Math.floor(this.frameActual / this.numColumnas);
//         const columna = this.frameActual % this.numColumnas;

//         // Dibujar la subimagen actual del sprite en el canvas
//         this.ctx.drawImage(
//             this.caja,
//             columna * this.frameWidth, fila * this.frameHeight,
//             this.frameWidth, this.frameHeight,
//             this.x, this.y,
//             this.w, this.h
//         );

//     //   console.log(JSON.stringify(this.caja, null, 2)); //Esto imprimirá el objeto de manera más legible en la consola con una sangría de 2 espacios.

//     }

//     //!explode puede ajustarse la velocidad de la animacion y animate no, pero hacen la misma animacion. usar uno dentro de la cosision
//     explode() {
//         // Realizar la animación de explosión
//         if (this.explosionCounter % Math.floor(1 / this.explosionSpeed) === 0) {
//             // Cambiar a la siguiente frame en la animación de explosión
//             this.frameActual = (this.frameActual + 1) % this.explosionFrames;
//         }
//         this.explosionCounter++;
//         //hay que hacer que desaparezca la caja
//         // if (this.explosionCounter === explosionFrames){
//         //     this.caja = -10000;
//         // }
//     }
    
//     animacion() {
//             // Incrementa el frame actual (puedes ajustar la velocidad de la animación cambiando el valor 0.2)
//             this.currentFrame += 0.2;

//             // Si hemos llegado al final del sprite, reinicia el frame
//             if (this.currentFrame >= this.totalFrames) {
//                 this.currentFrame = 0;
//             }

//             // Actualiza la fila y la columna del frame actual
//             this.fila = Math.floor(this.currentFrame / this.totalFramesPerRow);
//             this.columna = this.currentFrame % this.totalFramesPerRow;
//         }



//     collides(player) {
//         if (
//             this.x < player.x + player.w &&
//             this.y < player.y + player.h &&
//             this.x + this.w > player.x &&
//             this.y + this.h > player.y
//         ) {
//             // Hay colisión con el jugador, inicia la animación del sprite
//             this.explode()
//         }
//     }
// }


