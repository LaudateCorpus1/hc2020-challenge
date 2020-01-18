"use strict";


// The Text entity is used to display a piece of text on the screen.
// This text can be updated to show different info.
// It can also be flashed and bounced (flashing the size) to highlight changes when required.
// Note: It uses the setTimeout function to return from a flashed or bounced state, rather than 
// accumulating the time deltas in the update function. This could be implemented either way, but
// in this case the motivation was to let the flash and bounce effects play out even if the game is paused.


class Text extends Entity {
    constructor(x, y, halign, valign, font, colour, text) {
        super(x, y);

        //console.log(this.nameAndID + " Constructing Text entity");

        this._halign = halign;
        this._valign = valign;
        this._current_colour = colour;
        this._normal_colour = colour;
        this._current_font = font;
        this._normal_font = font;

        this._text = text;
    }


    set text(text) {
        this._text = text;
    }


    flash(colour, post_flash_colour) {
        this._current_colour = colour;

        if (post_flash_colour != undefined) {
            this._normal_colour = post_flash_colour;
        }

        setTimeout(() => this.resetColour(), 250);
    }


    resetColour() {
        this._current_colour = this._normal_colour;
    }


    bounce(font, post_bounce_font) {
        this._current_font = font;

        if (post_bounce_font != undefined) {
            this._normal_font = post_bounce_font;
        }

        setTimeout(() => this.resetFont(), 250);
    }


    resetFont() {
        this._current_font = this._normal_font;
    }


    render(context) {
        super.render(context);

        context.font = this._current_font;
        context.textAlign = this._halign;
        context.textBaseline = this._valign;
        context.fillStyle = this._current_colour;
        context.fillText(this._text, this._x, this._y);
    }
}