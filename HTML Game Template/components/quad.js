"use strict";


// The Quad component is simply a coloured rectangle that's drawn at the owning entity's position, using the given width and height.
// In the example game it's used by the Wanderer to draw their red rectangular bodies and by the ClearBackground entity to draw
// the whole game's background every frame.


class Quad extends Component {
    constructor(width, height, colour) {
        super();

        //console.log(this.nameAndID + " Constructing Quad component");

        this._width = width;
        this._height = height;
        this._colour = colour;
    }


    get colour() {
        return this._colour;
    }


    set colour(colour) {
        this._colour = colour;
    }


    render(context) {
        context.fillStyle = this._colour;
        context.fillRect(this._owner.x, this._owner.y, this._width, this._height);
    }

}