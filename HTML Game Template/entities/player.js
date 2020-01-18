"use strict";


// The player entity is the blue ball that follows the mouse around the game canvas.
// It listens for mousemove events and sets the mouse's position as it's target (constraining it to the canvas)
// and then it moves towards that target swiftly.


const MAX_PLAYER_VX = 2000;
const MAX_PLAYER_VY = 2000;


class Player extends Entity {
    constructor(canvas, colour) {
        super(GAME_CANVAS_WIDTH / 2, GAME_CANVAS_HEIGHT / 2);

        console.log(this.nameAndID + " Constructing Player");

        this._width = 32;
        this._height = 32;

        var velocity = new Velocity(0, 0);
        this.addComponent(velocity);

        this._target_x = GAME_CANVAS_WIDTH / 2;
        this._target_y = GAME_CANVAS_HEIGHT / 2;

        canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));

        this.addComponent(new Sprite(document.getElementById("player")));
    }


    // See if the rectangle passed in as an x, y position and a width and a height overlaps the rectangle defined
    // by the player's x, y position and it's width and height.
    collide(x, y, width, height) {
        if (x > this.x + this._width) {
            return false;
        }

        if (x < this.x - width) {
            return false;
        }

        if (y > this.y + this._height) {
            return false;
        }

        if (y < this.y - height) {
            return false;
        }

        return true;
    }


    update(timeDelta) {
        super.update(timeDelta);

        this.followMouse(timeDelta);
    }


    onMouseMove(event) {
        // Constrain the target coordinates to the canvas, accounting for the size of the Player.
        this._target_x = Math.min(Math.max(0, event.offsetX), GAME_CANVAS_WIDTH - this._width);
        this._target_y = Math.min(Math.max(0, event.offsetY), GAME_CANVAS_HEIGHT - this._height);
    }


    followMouse(timeDelta) {
        if (this.x < this._target_x) {
            this.x = Math.min(this.x + MAX_PLAYER_VX * timeDelta, this._target_x);
        } else {
            this.x = Math.max(this.x - MAX_PLAYER_VX * timeDelta, this._target_x);
        }

        if (this.y < this._target_y) {
            this.y = Math.min(this.y + MAX_PLAYER_VY * timeDelta, this._target_y);
        } else {
            this.y = Math.max(this.y - MAX_PLAYER_VY * timeDelta, this._target_y);
        }
    }
}