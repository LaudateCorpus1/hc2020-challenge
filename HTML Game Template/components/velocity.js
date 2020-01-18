"use strict";


// The Velocity component updates it's owning entity's x and y positions every frame.
// Velocities are stored in pixels per second for the horizontal and vertical (x and y) directions.


class Velocity extends Component {
    constructor(vx, vy) {
        super();

        //console.log(this.nameAndID + " Constructing velocity component with (" + vx + ", " + vy + ")");

        this._vx = vx;
        this._vy = vy;
    }


    get vx() {
        return this._vx;
    }


    set vx(_vx) {
        this._vx = _vx;
    }


    get vy() {
        return this._vy;
    }


    set vy(_vy) {
        this._vy = _vy;
    }


    update(timeDelta) {
        this._owner.x += this.vx * timeDelta;
        this._owner.y += this.vy * timeDelta;
    }
}