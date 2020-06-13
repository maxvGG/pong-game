export default class Collision {
    constructor(game) {
        this.game = game;
        // console.log(this.game);
    }

    

    aabb_collision_dectection() {
        // check colision top
        if (
            this.game.ball.position.y - this.game.ball.size.y < 0 || this.game.canvas.attributes.clientHeight - (this.game.ball.position.y - this.game.ball.size.y) 
            || this.game.ball.position.y - this.game.ball.size.y > 700 ) {
            this.game.ball.velocity.y = -this.game.ball.velocity.y;
            
        }
        // check collision right
        if(this.game.ball.position.x - this.game.ball.size.x > 1000 || this.game.canvas.attributes.clientWidth + this.game.ball.position.x ||
        this.game.ball.position.x - this.game.ball.size.x < 0) {
            this.game.ball.velocity.x = -this.game.ball.velocity.x;
        }
        // check bottom 
        
        }

}
      




