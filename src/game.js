import Canvas from './canvas';
import Ball from './ball';
import Human from './human';
import Computer from './computer';
import Keyboard from './keyboard';
import Collision from './collision';



export default class Game extends Canvas {
    constructor() {
        super('c', 'black', 'white', 1);

        this.keyboard = new Keyboard(this);
        this.player1 = new Human(this, 1);
        this.player2 = new Computer(this, 2);
        this.ball = new Ball(this);
        this.collision = new Collision(this);        
    
        this.createAdvancedGameLoop();
    }



    createAdvancedGameLoop() {
        
        this.step = 1/120;
        this.accumulator = 0;
        
        let lastTime;
        const callback = (millis) =>{
            
            if(lastTime){
                
                const deltatime = (millis - lastTime) / 1000;
                this.player1.checkInput();
                this.player2.checkInput();
                this.update(deltatime);
                this.draw();
            }
            lastTime = millis;
            requestAnimationFrame(callback);
        };
        callback();
        
    }
    simulate(deltatime){
        this.player1.update(deltatime);
        this.player2.update(deltatime);
        this.ball.update(deltatime);
        // this.collision.aabb_collision_dectection();
        
    }
    
    update(deltatime){
        this.accumulator += deltatime;
        while(this.accumulator > this.step) {
            this.simulate(this.step);
            this.accumulator -= this.step;
        }
        this.collision.aabb_collision_dectection();
    }

    draw(){
        this.clear();
        this.ball.draw();
        this.player1.draw();
        this.player2.draw();
        
    }


    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    toRadians(deg) {
        return deg * (Math.PI / 180);
    }
    
    toDegrees(rad){
        return(rad * 180) / Math.PI
    }

    getRandNumBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}