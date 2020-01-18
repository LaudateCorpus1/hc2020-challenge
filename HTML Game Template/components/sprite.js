"use strict";


// The Sprite component draws an image at the owning entity's x and y coordinates.
// The Player entity uses one to draw the blue ball, which is a png defined in the main html as:
// <img id="player" src="graphics/player.png" alt="Player" width="32" height="32">


class Sprite extends Component {
    constructor(image) {
        super();

        //console.log(this.nameAndID + " Constructing sprite component");

        this._image = image;
    }


    render(context) {
        //console.log("sprite render");
        context.drawImage(this._image, this._owner.x, this._owner.y);
    }

}