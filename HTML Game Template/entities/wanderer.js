"use strict";


// The Wanderer entity is the game's baddy!
// It's a red square that appears as a darker one, after a second switching to bright red and then 
// drifting aimlessly across the canvas.
// It's rendered using a Quad component. It could use a sprite, but when there are 200+ of them
// on the screen the Quad is more efficient.
// It uses a hyper-basic state engine (with just two states) to control its spawning and 
// wandering behaviour, but more states could be added to make it do more interesting things.
// Perhaps it could decide to change direction from time to time or maybe it could follow the player.
// It also uses the player's collide function to see if it they've bumped into each other and when 
// that happens it decreases their score. I told you it's the game's baddy.


const MAX_VX = 150;
const MAX_VY = 150;

const SPAWNING_TIME = 1.0;
const SPAWNING = 0;
const WANDERING = 1;


class Wanderer extends Entity {
    constructor(scene) {
        var x = Math.random() * GAME_CANVAS_WIDTH;
        var y = Math.random() * GAME_CANVAS_HEIGHT;

        super(x, y);

        //console.log(this.nameAndID + " Constructing Wanderer entity");

        this._scene = scene;
        this._width = 32;
        this._height = 32;

        this._quad = new Quad(this._width, this._height, "maroon");
        this.addComponent(this._quad);

        this.state = SPAWNING;
    }


    onCrossedBoundary(boundary) {
        //console.log(this.nameAndID + " met " + boundary + " boundary.");
    }


    set state(state) {
        this._state = state;
        this._time_in_state = 0.0;
    }


    updateSpawning() {
        if (this._time_in_state >= SPAWNING_TIME) {
            var vx = -MAX_VX + 2 * (Math.random() * MAX_VX);
            var vy = -MAX_VY + 2 * (Math.random() * MAX_VY);

            var velocity = new Velocity(vx, vy);
            this.addComponent(velocity);

            var boundary_check = new BoundaryCheck(velocity, -this._width, -this._height, GAME_CANVAS_WIDTH + this._width, GAME_CANVAS_HEIGHT + this._height,
                                                    boundary_behaviours.WRAP, boundary_behaviours.WRAP, boundary_behaviours.WRAP, boundary_behaviours.WRAP);
            this.addComponent(boundary_check);

            boundary_check.boundary_callback = this.onCrossedBoundary;

            this.state = WANDERING;
            this._quad.colour = "red";
        }
    }


    updateWandering() {
        if (player) {
            if (player.collide(this.x, this.y, this._width, this._height)) {
                this._scene.spawner.decrement("Wanderer");
                this._scene.removeEntity(this);
                score_board.decrement();
            }
        }
    }


    update(timeDelta) {
        super.update(timeDelta);

        this._time_in_state += timeDelta;

        switch (this._state) {
            case SPAWNING:
                this.updateSpawning();
                break;
            case WANDERING:
                this.updateWandering();
                break;
        }
    }
}