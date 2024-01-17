class Game{
    constructor(ctx){
        this.ctx = ctx;
        this.interval = null;
    }

    start(){
        this.interval = setInterval(() =>{
            this.clear();
            this.move();
            this.draw();
            this.checkCollision();
        },1000/60)
    }

    stop(){

    }

    clear(){
        
    }

    draw(){

    }

    move(){

    }

    checkCollision(){

    }

}