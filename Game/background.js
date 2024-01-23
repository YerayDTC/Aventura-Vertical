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
    }
}


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