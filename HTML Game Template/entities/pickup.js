"use strict";


// The Pickup entity is represented by a yellow star. On construction, it picks a random location and then it sits there
// checking whether or not it's collided with the player. When that happens it increments the score and removes itself 
// from the world.
// Perhaps you could add other kinds of pickups that affect the player, game or score in other ways.


class Pickup extends Entity {
    constructor(scene) {
        var x = Math.random() * GAME_CANVAS_WIDTH;
        var y = Math.random() * GAME_CANVAS_HEIGHT;

        super(x, y);

        //console.log(this.nameAndID + " Constructing Pickup entity");

        this._scene = scene;
        this._width = 32;
        this._height = 32;

        this.addComponent(new Sprite(document.getElementById("pickup")));
    }


    update(timeDelta) {
        super.update(timeDelta);

        if (player) {
            if (player.collide(this.x, this.y, this._width, this._height)) {
                this._scene.spawner.decrement("Pickup");
                this._scene.removeEntity(this);
                score_board.increment();
            }
        }
    }
}