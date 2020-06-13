export default class Collision {
    constructor(game) {
        this.game = game;
        console.log(this.game);
    }

    

    aabb_collision_dectection() {
        // check colision top and bottom canvas

        
        // check player paddle 
        if(this.game.player1.paddle.position.x < this.game.ball.position.x + this.game.ball.size.x && 
            this.game.player1.paddle.position.x + this.game.player1.paddle.size.x > this.game.ball.position.x &&
            this.game.player1.paddle.position.y < this.game.ball.position.y + this.game.ball.size.y &&
            this.game.player1.paddle.position.y + this.game.player1.paddle.size.y > this.game.ball.position.y
            ) {
            console.log("collision dectected");
            this.game.ball.velocity.y = -this.game.ball.velocity.y;
            this.game.ball.velocity.x = -this.game.ball.velocity.x;  
        }
        // check computer paddle
        if(this.game.player2.paddle.position.x < this.game.ball.position.x + this.game.ball.size.x && 
            this.game.player2.paddle.position.x + this.game.player2.paddle.size.x > this.game.ball.position.x &&
            this.game.player2.paddle.position.y < this.game.ball.position.y + this.game.ball.size.y &&
            this.game.player2.paddle.position.y + this.game.player2.paddle.size.y > this.game.ball.position.y
            ) {
            console.log("collision dectected");
            this.game.ball.velocity.y = -this.game.ball.velocity.y;
            this.game.ball.velocity.x = -this.game.ball.velocity.x;  
        }
        // canvas collision test ?
        // if ( this.game.ball.position.y - this.game.ball.size.y < 0 || this.game.canvas.attributes.clientHeight - (this.game.ball.position.y - this.game.ball.size.y) || this.game.ball.position.y - this.game.ball.size.y > 700 ) {
        //     this.game.ball.velocity.y = -this.game.ball.velocity.y; 
        // }
        // // check collision right and left canvas 
        // if(this.game.ball.position.x - this.game.ball.size.x > 1000 || this.game.canvas.attributes.clientWidth + this.game.ball.position.x || this.game.ball.position.x - this.game.ball.size.x < 0) {
        //     this.game.ball.velocity.x = -this.game.ball.velocity.x;
        // } 

        }

}
      




