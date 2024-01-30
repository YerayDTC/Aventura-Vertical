class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.player = new Player(ctx);
        this.background = new Background(ctx);
        this.interval = null;
        this.setListeners();
        this.cajas = [];
        this.tick = 0;
    }

    start() {
        this.interval = setInterval(() => {
            this.clear();
            this.move();
            this.draw();
            this.checkCollision();
            this.tick ++;
            if(this.tick >= 200) {
                this.addCaja();
                this.tick = 0;
            }

            console.log(this.cajas)
        //     for (let i = 0; i >= 50; i++) {
        //         console.log("iteracion" + i)
        //         let caja = new Caja(ctx, (100 + i*10));
        //         this.cajas.push(caja);
        //         i = 0;
        //     }
        }, 1000 / 60)

        // Llama a requestAnimationFrame para repetir el bucle en el próximo frame
        // requestAnimationFrame(this.start);
    }

    stop() {
        clearInterval(this.interval);
    }

    clear() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.cajas = this.cajas.filter(caja => caja.isVisible()) // si ha explotado lo elimina del array
        
    }

    draw() {
        this.background.draw();
        this.player.draw();

        this.cajas.forEach(e => {
            e.draw();
        });
    
    }

    move() {
        this.player.move();
        
        this.cajas.forEach(element => {
            element.move();
        });
    }

    checkCollision() {
        // this.player.collides(this.caja);
        // this.caja.collides(this.player);
    }

    setListeners() { //permite hacer keyup y keydown para usar teclado para mover el personaje
        document.addEventListener("keydown", (ev) => {
            this.player.keyDown(ev.keyCode);
        });
        document.addEventListener("keyup", (ev) => {
            this.player.keyUp(ev.keyCode);
        });
    }

    addCaja() {
        let caja = new Caja(ctx);
        this.cajas.push(caja);
    }


}
