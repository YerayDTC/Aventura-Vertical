class Background {
    // Constructor que inicializa el fondo y un array para almacenar cajas
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.w = this.ctx.canvas.width;
        this.h = this.ctx.canvas.height;


        // Creación de un objeto de imagen para el fondo
        this.imgBackground = new Image();
        // Establecimiento de la ruta de la imagen para el fondo
        this.imgBackground.src = "../Public/img/pngtree-forest-landscape-arcade-game-background-image_674105.jpg";
        this.cajas = []; // Array para almacenar instancias de la clase Caja
        this.agregarCaja();
        console.log(JSON.stringify(this.cajas, null, 2)); //Esto imprimirá el objeto de manera más legible en la consola con una sangría de 2 espacios.

        // this.caja = new Caja(ctx); //Instancia de la caja (No se si es necesaria)
        // this.caja.src = "../Public/img/cajaA.png"

    }

    // Método para renderizar fondo y cajas en el canvas
    draw() {
        this.ctx.drawImage(this.imgBackground, this.x, this.y, this.w, this.h); // Renderiza el fondo
        // this.caja.draw();
        
        //Renderiza todas las cajas almacenadas
        this.cajas.forEach(caja => {
            caja.draw(); // Dibuja la caja en el canvas
            caja.animacion(); // Ejecuta la lógica de animación de la caja
        });
    }


    agregarCaja() {
        let nuevaCaja = new Caja(ctx);
        this.cajas.push(nuevaCaja);
    }

}




// // Definición de la clase Background
// class Background {
//     // Constructor de la clase que recibe un contexto (ctx)
//     constructor (ctx) {
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
//         this.caja = new Caja(ctx);
//     }

//     // Método para dibujar el fondo en el canvas
//     draw() {
//         // Dibuja la imagen en el contexto usando la posición, ancho y alto especificados
//         this.ctx.drawImage(this.img,this.x, this.y, this.w, this.h);
//         this.caja.draw();
//     }

//     // Método para dibujar el mapa de cajas
//     drawBoxMap() {
//         // Definir el tamaño de cada caja y el número de filas y columnas
//         // let boxSize = this.w / 24 ; // Ajusta el tamaño de la caja según el número de columnas
//         let boxSize = this.caja.h * this.caja.w ;
//         let rows = 10;
//         let cols = 24;

//         // let boxMap = [
//         //     [1, 0, 1, 0, 1, 0, 1, 0],
//         //     [0, 1, 0, 1, 0, 1, 0, 1],
//         //     [1, 0, 1, 0, 1, 0, 1, 0],
//         //     [0, 1, 0, 1, 0, 1, 0, 1],
//         //     [1, 0, 1, 0, 1, 0, 1, 0],
//         //     [0, 1, 0, 1, 0, 1, 0, 1],
//         //     [1, 0, 1, 0, 1, 0, 1, 0],
//         //     [0, 1, 0, 1, 0, 1, 0, 1],
//         // ];

//         // Crear un array bidimensional para representar el mapa de cajas

//         let boxMap = new Array(rows);
//         for (let i = 0; i < rows; i++) {
//             boxMap[i] = new Array(cols);
//             for (let j = 0; j < cols; j++) {
//                 // Inicializar el valor de cada caja a 1 o 0 según tus necesidades
//                 // Por ejemplo, aquí se establece un patrón sencillo de alternancia
//                 boxMap[i][j] = (i + j) % 2; // 1 o 0

//                 let boxX = this.x + j * boxSize;
//                 let boxY = this.y + i * boxSize;

//                 // Dibujar caja
//                 if (boxMap[i][j] === 1) {
//                     // this.ctx.drawImage(this.imgBox, 100, 100, 40, 40);
//                     console.log("caja");
//                 }
//             }
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
