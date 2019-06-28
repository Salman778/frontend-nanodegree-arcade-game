// Enemies our player must avoid
class Enemy {
    constructor(){
    // Variables applied to each of our instances go here,
    
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.randomPositionOfVertical = [205, 125, 45]
    this.x = 0
    this.y = this.randomPositionOfVertical[Math.floor(Math.random() * 3)]
    this.movement = Math.random() * 150;
    }
    update(dt){
        // Update the enemy's positiMath.random() * 1on, required method for game
        // Parameter: dt, a time delta between ticks
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.x > 400 ? (this.x = 0, this.y = this.randomPositionOfVertical[Math.floor(Math.random() * 3)]) : this.x += dt * this.movement;
    }

    render(){
        // Draw the enemy on the screen, required method for game
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    
}





// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(){
    // Variables applied to each of our instances go here,
    
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-cat-girl.png';
    this.randomPositionOfHorizontal = [0, 100, 200, 300, 400];
    this.win = 0;
    this.x = this.randomPositionOfHorizontal[Math.floor(Math.random() * 5)]
    this.y = 445
    }
    update(){
        
    }
    handleInput(arrowKey){
        switch(arrowKey){
            case 'left':
                this.x > 0 && (this.x -= 100)
            break;
            case 'right':
                this.x < 400 && (this.x += 100)
            break;
            case 'up':
                this.y > 45 ? this.y -= 80 : this.winer()
            break;
            case 'down':
                this.y < 445 && (this.y += 80)
            break;
        }
        
        

    }
    reset(isNotWiner=false){
        isNotWiner && (this.win = 0)
        this.x = this.randomPositionOfHorizontal[Math.floor(Math.random() * 5)]
        this.y = 445
    }
    winer(){
        this.win++;
        this.reset()
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        ctx.strokeText(`win: ${this.win}`, 240, 25)
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [
    new Enemy(),
    new Enemy(),
    new Enemy(),
    new Enemy(),
]


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
let player = new Player();
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
