class Caja {
    // Constructor que inicializa las propiedades de la caja
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 0; // Posición inicial en el eje X
        this.y = 0; // Posición inicial en el eje Y
        this.caja = new Image(); // Instancia de la clase Image para el sprite
        this.caja.src = "../Public/img/cajaA.png"; // Establece la ruta del sprite
        this.spriteFrameWidth = 20; // Ancho de cada frame en el sprite
        this.spriteFrameHeight = 20; // Altura de cada frame en el sprite
        this.totalFramesPerRow = 4; // Número total de frames por fila en el sprite (4)
        this.numFilas = 3; // Número total de filas en el sprite (3) totalRows
        this.totalFrames = this.totalFramesPerRow * this.numFilas; // Cálculo del número total de frames en el sprite (4*3=12)
        this.currentFrame = 0; // Número de frame actual (inicia en 0)

    }


    animacion() {
        // Incrementa el frame actual (puedes ajustar la velocidad de la animación cambiando el valor 0.2)
        this.currentFrame += 0.2;

        // Si hemos llegado al final del sprite, reinicia el frame
        if (this.currentFrame >= this.totalFrames) {
            this.currentFrame = 0;
        }
    }


    draw() { // Dibuja el sprite en el canvas utilizando el ctx 2D

        // Calcula la fila del frame actual dividiendo el índice del frame actual por el número de columnas en el sprite
        const row = Math.floor(this.currentFrame / 4); // 0/4 = 0 fila 0 como los indices de un array
        // Calcula la columna del frame actual tomando el resto de la división del índice del frame actual por el número de columnas
        const col = this.currentFrame % 4; // 0%4 = 0 columna 0 como los indices de un array

        //?En caso de que no funcione arriba descomentar este y comentar el otro.
        // const row = Math.floor(this.currentFrame / 4); // 4 frames por fila
        // const col = this.currentFrame % 3; // 3 frames por columna


        // Dibuja el frame actual del sprite en el canvas
        this.ctx.drawImage(
            this.caja,              // Imagen del sprite
            col * this.spriteFrameWidth,  // Posición X en el sprite (multiplica la columna por el ancho del frame) 0*20 = 0
            row * this.spriteFrameHeight, // Posición Y en el sprite (multiplica la fila por la altura del frame) 0*20 = 0
            this.spriteFrameWidth,        // Ancho del frame del sprite
            this.spriteFrameHeight,       // Altura del frame del sprite
            this.x,                       // Posición X en el canvas
            this.y,                       // Posición Y en el canvas
            this.canvasFrameWidth,        // Ancho del frame en el canvas
            this.canvasFrameHeight         // Altura del frame en el canvas
        );
    }
    

    collides(player) {
            if (
                this.x < player.x + player.w &&
                this.y < player.y + player.h &&
                this.x + this.w > player.x &&
                this.y + this.h > player.y
            ) {
                // Hay colisión con el jugador, inicia la animación del sprite
                // this.animacion()
            }
        }
}





















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
//         this.imgBox = new Image();
//         this.imgBox.src = "../Public/img/cajaA.png";

//         // Calcula el ancho y alto de cada frame en el sprite
//         this.imgBox.onload = () => {
//             this.frameWidth = this.imgBox.width / this.numColumnas;
//             this.frameHeight = this.imgBox.height / this.numFilas;
//         };
//     }

//     draw() {
//         // Calcular las coordenadas de textura
//         const fila = Math.floor(this.frameActual / this.numColumnas);
//         const columna = this.frameActual % this.numColumnas;

//         // Dibujar la subimagen actual del sprite en el canvas
//         this.ctx.drawImage(
//             this.imgBox,
//             columna * this.frameWidth, fila * this.frameHeight,
//             this.frameWidth, this.frameHeight,
//             this.x, this.y,
//             this.w, this.h
//         );
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
//         //     this.imgBox = -10000;
//         // }
//     }
    
//     // animate() {
//     //     // Incrementar el contador de frames y reiniciarlo si alcanza el final
//     //     this.frameActual = (this.frameActual + 1) % (this.numFilas * this.numColumnas);
//     // }
  

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


