"use strict";


// The BoundaryCheck component monitors its owning entity's x and y position, checking for them meeting the boundary
// of the rectangle it's constructed with (left, top, width, height.)
// A behaviour can be specified for each edge of the boundary, telling it what to do. Options are BOUNCE or WRAP.
// When a boundary edge is met, it will apply the behaviour, potentially modifying the velocity (when using BOUNCE) and 
// modifying the position of the owning entity, to prevent it leaving the bounded area.
// An optional callback can be called when this happens. For example, this could be used for logging/debugging or to play a sound.


const boundary_behaviours = {
    BOUNCE: 'bounce',
    WRAP: 'wrap',
};


const boundaries = {
    RIGHT: 'right',
    LEFT: 'left',
    BOTTOM: 'bottom',
    TOP: 'top'
}


class BoundaryCheck extends Component {
    constructor(velocity, left, top, width, height, top_behaviour, right_behaviour, bottom_behaviour, left_behaviour, callback) {
        super();

        //console.log(this.nameAndID + " Constructing BoundaryCheck component");

        this._velocity = velocity;

        this._top = top;
        this._left = left;
        this._width = width;
        this._height = height;

        this._behaviours = {};

        this._behaviours[boundaries.TOP] = top_behaviour;
        this._behaviours[boundaries.RIGHT] = right_behaviour;
        this._behaviours[boundaries.BOTTOM] = bottom_behaviour;
        this._behaviours[boundaries.LEFT] = left_behaviour;
    }


    get x() {
        return this._owner.x;
    }


    set x(x) {
        this._owner.x = x;
    }


    get y() {
        return this._owner.y;
    }


    set y(y) {
        this._owner.y = y;
    }


    get velocity() {
        return this._velocity;
    }


    set boundary_callback(callback) {
        this._boundary_callback = callback;
    }


    checkBoundaries() {
        var boundary = undefined;

        if (this.x > this._left + this._width) {
            boundary = boundaries.RIGHT;
            var behaviour = this._behaviours[boundary];

            if (behaviour == boundary_behaviours.BOUNCE) {
                this.x = this._left + this._width;
                this.velocity.vx = -this.velocity.vx;
            } else if (behaviour == boundary_behaviours.WRAP) {
                this.x = this._left;
            }
        }
        else if (this.x < this._left) {
            boundary = boundaries.LEFT;
            var behaviour = this._behaviours[boundary];

            if (behaviour == boundary_behaviours.BOUNCE) {
                this.x = this._left;
                this.velocity.vx = -this.velocity.vx;
            } else if (behaviour == boundary_behaviours.WRAP) {
                this.x = this._left + this._width;
            }
        }

        if (this.y > this._top + this._height) {
            boundary = boundaries.BOTTOM;
            var behaviour = this._behaviours[boundary];

            if (behaviour == boundary_behaviours.BOUNCE) {
                this.y = this._top + this._height;
                this.velocity.vy = -this.velocity.vy;
            } else if (behaviour == boundary_behaviours.WRAP) {
                this.y = this._top;
            }
        }
        else if (this.y < this._top) {
            boundary = boundaries.TOP;
            var behaviour = this._behaviours[boundary];

            if (behaviour == boundary_behaviours.BOUNCE) {
                this.y = this._top;
                this.velocity.vy = -this.velocity.vy;
            } else if (behaviour == boundary_behaviours.WRAP) {
                this.y = this._top + this._height;
            }
        }

        if (boundary != undefined && typeof this._boundary_callback === 'function') {
            this._boundary_callback(boundary);
        }
    }


    update(timeDelta) {
        this.checkBoundaries();
    }
}