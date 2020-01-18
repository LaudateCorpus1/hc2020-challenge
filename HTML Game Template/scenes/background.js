"use strict";


// The Background scene is drawn before everything else in the game. This means it's drawn at the back.
// At the moment it only has a ClearBackground entity, but any other entites added here would be drawn
// behind the player, the wanderers, the pickups and the score board.


class Background extends Scene {
    constructor() {
        super();

        console.log(this.nameAndID + " Constructing Background scene");

        this._entities.push(new ClearBackground());
    }

}