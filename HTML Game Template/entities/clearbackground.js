"use strict";


// The ClearBackground entity uses its Quad component to draw a solid rectangle across the entire canvas at the beginning
// of every frame. Without this, everything that moves would smear across the screen as you play. To try that, you can add
// a render function that does nothing, rather than using the entity's render function, which renders all of its components.
// Note: This entity also messes around with the background colour for demonstration purposes.


class ClearBackground extends Entity {
    constructor(scene) {
        super(0, 0);

        //console.log(this.nameAndID + " Constructing ClearBackground entity");

        this._scene = scene;
        this._accumulated_time = 0;

        this._quad = new Quad(GAME_CANVAS_WIDTH, GAME_CANVAS_HEIGHT, "#000000");
        this.addComponent(this._quad);
    }


    componentToHex(c) {
        var hex = c.toString(16);

        return hex.length == 1 ? "0" + hex : hex;
    }


    rgbToHex(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }


    hexToRGB(hexColour) {
        var hex = parseInt(hexColour.slice(1), 16);
        return {
            red: (hex >> 16) & 0xFF,
            green: (hex >> 8) & 0xFF,
            blue: hex & 0xFF,
        }
    }


    update(timeDelta) {
        this._accumulated_time += timeDelta;

        var colour = this._quad.colour;

        var components = this.hexToRGB(colour);
        var red = components.red;
        var green = components.green;
        var blue = components.blue;

        red = Math.floor(64 + Math.sin(this._accumulated_time * 0.2) * 60);

        this._quad.colour = this.rgbToHex(red, green, blue);
    }
}