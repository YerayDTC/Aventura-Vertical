// Definición de la clase Background
class Background {
    // Constructor de la clase que recibe un contexto (ctx)
    constructor (ctx) {
        // Asignación del contexto al objeto
        this.ctx = ctx;
        // Posición inicial en x e y (esquina superior izquierda)
        this.x = 0;
        this.y = 0;
        // Ancho y alto del fondo, se establece igual al tamaño del canvas
        this.w = this.ctx.canvas.width;
        this.h = this.ctx.canvas.height;
        // Creación de un objeto de imagen
        this.img = new Image();
        // Establecimiento de la ruta de la imagen para el fondo
        this.img.src = "../Public/img/pngtree-forest-landscape-arcade-game-background-image_674105.jpg";
    }

    // Método para dibujar el fondo en el canvas
    draw() {
        // Dibuja la imagen en el contexto usando la posición, ancho y alto especificados
        this.ctx.drawImage(this.img,this.x, this.y, this.w, this.h);
        // Llama al método para dibujar el mapa de cajas
        this.drawBoxMap();
    }

    // Método para dibujar el mapa de cajas
    drawBoxMap() {
        // Definir el tamaño de cada caja y el número de filas y columnas
        var boxSize = this.w / 24; // Ajusta el tamaño de la caja según el número de columnas
        var rows = 10;
        var cols = 24;

        let boxMap = [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
        ];

        // Crear un array bidimensional para representar el mapa de cajas
         boxMap = new Array(rows);
        for (var i = 0; i < rows; i++) {
            boxMap[i] = new Array(cols);
            for (var j = 0; j < cols; j++) {
                // Inicializar el valor de cada caja a 1 o 0 según tus necesidades
                // Por ejemplo, aquí se establece un patrón sencillo de alternancia
                boxMap[i][j] = (i + j) % 2; // 1 o 0
            }
        }

        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                var boxX = this.x + j * boxSize;
                var boxY = this.y + i * boxSize;

                // Dibujar caja
                if (boxMap[i][j] === 1) {
                    this.ctx.fillStyle = "#009900"; // Color de la caja (puedes cambiarlo)
                    this.ctx.fillRect(boxX, boxY, boxSize, boxSize);
                }
            }
        }
    }
}






// // Crear una instancia de la clase Background
// let background = new Background(ctx); // Asegúrate de tener el contexto (ctx) disponible
// background.draw(); // Llama al método draw para dibujar el fondo y el mapa de cajas

// Clase BackgroundMove (actualmente comentada y no en uso)
// Representa un fondo con movimiento horizontal

// class BackgroundMove {
//     // Constructor que recibe un contexto (ctx)
//     constructor(ctx) {
//         // Asignación del contexto al objeto
//         this.ctx = ctx;
//         // Posición inicial en x e y (esquina superior izquierda)
//         this.x = 10;
//         this.y = 0;
//         // Velocidad de movimiento horizontal
//         this.vx = -0.3;

//         // Ancho y alto del fondo, se establece igual al tamaño del canvas
//         this.w = this.ctx.canvas.width;
//         this.h = this.ctx.canvas.height;
//         // Creación de un objeto de imagen
//         this.img = new Image();
//         // Establecimiento de la ruta de la imagen para el fondo con movimiento
//         this.img.src = "../public/Imagenes/back.avif";
//     }

//     // Método para dibujar el fondo con movimiento en el canvas
//     draw() {
//         // Dibuja la imagen en el contexto usando la posición, ancho y alto especificados
//         this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
//         // Dibuja otra instancia de la imagen desplazada a la derecha para crear un efecto de bucle
//         this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);
//     }

//     // Método para actualizar la posición del fondo con movimiento
//     move() {
//         // Actualiza la posición en x según la velocidad de movimiento
//         this.x += this.vx;
//         // Si la imagen se desplaza completamente fuera del canvas, vuelve a colocarla al inicio
//         if (this.x + this.w <= 0) {
//             this.x = 0;
//         }
//     }
// }




// // Crear una instancia de la clase Background
// let background = new Background(ctx); // Asegúrate de tener el contexto (ctx) disponible
// background.draw(); // Llama al método draw para dibujar el fondo y el mapa de cajas

// Clase BackgroundMove (actualmente comentada y no en uso)
// Representa un fondo con movimiento horizontal

// class BackgroundMove {
//     // Constructor que recibe un contexto (ctx)
//     constructor(ctx) {
//         // Asignación del contexto al objeto
//         this.ctx = ctx;
//         // Posición inicial en x e y (esquina superior izquierda)
//         this.x = 10;
//         this.y = 0;
//         // Velocidad de movimiento horizontal
//         this.vx = -0.3;

//         // Ancho y alto del fondo, se establece igual al tamaño del canvas
//         this.w = this.ctx.canvas.width;
//         this.h = this.ctx.canvas.height;
//         // Creación de un objeto de imagen
//         this.img = new Image();
//         // Establecimiento de la ruta de la imagen para el fondo con movimiento
//         this.img.src = "../public/Imagenes/back.avif";
//     }

//     // Método para dibujar el fondo con movimiento en el canvas
//     draw() {
//         // Dibuja la imagen en el contexto usando la posición, ancho y alto especificados
//         this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
//         // Dibuja otra instancia de la imagen desplazada a la derecha para crear un efecto de bucle
//         this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);
//     }

//     // Método para actualizar la posición del fondo con movimiento
//     move() {
//         // Actualiza la posición en x según la velocidad de movimiento
//         this.x += this.vx;
//         // Si la imagen se desplaza completamente fuera del canvas, vuelve a colocarla al inicio
//         if (this.x + this.w <= 0) {
//             this.x = 0;
//         }
//     }
// }















//prueba idea con sprite de caja------------------------------------------------------------
// Definición de la clase Background
// class Background {
//     // Constructor de la clase que recibe un contexto (ctx)
//     constructor(ctx) {
//         // Asignación del contexto al objeto
//         this.ctx = ctx;
//         // Posición inicial en x e y (esquina superior izquierda)
//         this.x = 0;
//         this.y = 0;
//         // Ancho y alto del fondo, se establece igual al tamaño del canvas
//         this.w = this.ctx.canvas.width;
//         this.h = this.ctx.canvas.height;
//         // Creación de un objeto de imagen
//         this.img = new Image();
//         // Establecimiento de la ruta de la imagen para el fondo
//         this.img.src = "../Public/img/pngtree-forest-landscape-arcade-game-background-image_674105.jpg";

//         //----------------------------------------------------------------------------------
//         // Creación de un objeto de imagen para el sprite de la caja rota
//         this.caja = new Image();
//         this.caja.src = "../Public/img/caja.png";

//         // Tamaño de cada imagen en el sprite
//         this.spriteFrameWidth = this.caja.width / 4; // 4 imágenes por fila
//         this.spriteFrameHeight = this.caja.height / 3; // 3 filas en total

//         // Variables para gestionar la animación del sprite
//         this.currentFrame = 0;
//         this.framesPerRow = 4; // Número de imágenes por fila
//         this.totalFrames = 12; // Total de imágenes en el sprite

//         // Temporizador para cambiar las imágenes
//         this.animationInterval = setInterval(() => this.updateFrame(), 100); // Cambia cada 100 milisegundos
//     }

//     // Método para dibujar el fondo en el canvas
//     draw() {
//         // Dibuja la imagen en el contexto usando la posición, ancho y alto especificados
//         this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
//         // Llama al método para dibujar el sprite de la caja rota
//         this.drawBrokenBoxSprite();
//     }


//     // Método para dibujar el sprite de la caja rota
//     drawBrokenBoxSprite() {
//         // Calcular la posición de la imagen actual en el sprite
//         var srcX = (this.currentFrame % this.framesPerRow) * this.spriteFrameWidth;
//         var srcY = Math.floor(this.currentFrame / this.framesPerRow) * this.spriteFrameHeight;

//         // Dibujar la imagen actual del sprite en el canvas
//         this.ctx.drawImage(
//             this.caja,
//             srcX,
//             srcY,
//             this.spriteFrameWidth,
//             this.spriteFrameHeight,
//             this.x,
//             this.y,
//             this.w / 4, // Ancho de la imagen en el canvas (ajustado para el ejemplo)
//             this.h / 3  // Alto de la imagen en el canvas (ajustado para el ejemplo)
//         );
//     }

//     // Método para actualizar el frame actual en la animación del sprite
//     updateFrame() {
//         this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
//     }


//     // Método para dibujar el mapa de cajas
//     drawBoxMap() {
//         // Definir el tamaño de cada caja y el número de filas y columnas
//         var boxSize = this.w / 24; // Ajusta el tamaño de la caja según el número de columnas
//         var rows = 10;
//         var cols = 24;

//         let boxMap = [
//             [1, 0, 1, 0, 1, 0, 1, 0],
//             [0, 1, 0, 1, 0, 1, 0, 1],
//             [1, 0, 1, 0, 1, 0, 1, 0],
//             [0, 1, 0, 1, 0, 1, 0, 1],
//             [1, 0, 1, 0, 1, 0, 1, 0],
//             [0, 1, 0, 1, 0, 1, 0, 1],
//             [1, 0, 1, 0, 1, 0, 1, 0],
//             [0, 1, 0, 1, 0, 1, 0, 1],
//         ];

//         // Crear un array bidimensional para representar el mapa de cajas
//         boxMap = new Array(rows);
//         for (var i = 0; i < rows; i++) {
//             boxMap[i] = new Array(cols);
//             for (var j = 0; j < cols; j++) {
//                 // Inicializar el valor de cada caja a 1 o 0 según tus necesidades
//                 // Por ejemplo, aquí se establece un patrón sencillo de alternancia
//                 boxMap[i][j] = (i + j) % 2; // 1 o 0
//             }
//         }



//         for (var i = 0; i < rows; i++) {
//             for (var j = 0; j < cols; j++) {
//                 var boxX = this.x + j * boxSize;
//                 var boxY = this.y + i * boxSize;

//                 // Dibujar caja
//                 if (boxMap[i][j] === 1) {
//                     // Aquí, en lugar de dibujar un rectángulo, dibujamos la imagen de la caja rota
//                     this.ctx.drawImage(this.caja, boxX, boxY, boxSize, boxSize);
//                     console.log("hola")
//                 }
//             }
//         }
//     }
// }