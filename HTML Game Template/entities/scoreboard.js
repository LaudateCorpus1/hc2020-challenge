"use strict";


// The ScoreBoard controls the displaying of the Score and High Score at the top left and right of the canvas.
// It spawns a pair of Text entities for this purpose and updates them when other parts of the code call its 
// increment and decrement functions.


const SCORE_FONT = "40px Arial Black"
const SCORE_LARGE_FONT = "44px Arial Black"

const SCORE_TEXT = "SCORE: ";
const HIGH_SCORE_TEXT = "HIGH: ";


class ScoreBoard extends Entity {
    constructor(scene) {
        super(0, 0);

        console.log(this.nameAndID + " Constructing ScoreBoard");

        this._score = 0;
        this._high_score = 0;

        this._normal_colour = "white";
        this._high_score_colour = "#66ccff";

        this._score_text = new Text(20, 30, "left", "top", SCORE_FONT, this._normal_colour, "SCORE");
        scene._entities.push(this._score_text);

        this._high_score_text = new Text(GAME_CANVAS_WIDTH - 20, 30, "right", "top", SCORE_FONT, this._high_score_colour, "HIGH SCORE");
        scene._entities.push(this._high_score_text);

        this.updateText();
    }


    updateText() {
        this._score_text.text = SCORE_TEXT + this._score;
        this._high_score_text.text = HIGH_SCORE_TEXT + this._high_score;
    }


    increment() {
        this._score++;

        if (this._score > this._high_score) {
            this._high_score++;

            this._high_score_text.flash("yellow");
            this._high_score_text.bounce(SCORE_LARGE_FONT);
        }

        this.updateText();

        this._score_text.flash("yellow", this._score < this._high_score ? this._normal_colour : this._high_score_colour);
        this._score_text.bounce(SCORE_LARGE_FONT);
    }


    decrement() {
        if (this._score > 0) {
            this._score--;

            this.updateText();

            this._score_text.flash("red");
        }
    }

}