import Player from "./player";

export default class Computer extends Player {
    constructor(game,index) {
        super(game,index);
        console.log('computer speker')
        
    }

    checkInput() {
        // this.paddle.velocity.y = 0;
        // this.paddle.velocity.y += 2;
    }
}