"use strict";


// The GameLevel scene contains the player, pickups and wanderers.
// It uses a Spawner entity to control how many of them there are and how frequently they appear.
// It can also be paused by setting its time scale to 0.
// If you set this to 0.25 the game would run at quarter speed. Oooh.


class GameLevel extends Scene {
    constructor(canvas) {
        super();

        console.log(this.nameAndID + " Constructing GameLevel scene");

        this._canvas = canvas;
        this._num_wanderers = 0;

        player = new Player(canvas);
        this._entities.push(player);

        this._spawner = new Spawner(this);
        this._spawner.startSpawning("Pickup", 10, 3);
        this._spawner.startSpawning("Wanderer", 256, 1);
        this._entities.push(this._spawner);
    }


    get canvas() {
        return this._canvas;
    }


    get spawner() {
        return this._spawner;
    }

    togglePause() {
        if (this.time_scale > 0.0) {
            this.time_scale = 0.0;
        } else {
            this.time_scale = 1.0;
        }
    }
}