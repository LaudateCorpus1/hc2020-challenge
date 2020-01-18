"use strict";


// The Menu scene contains the score board, a GameLevel scene and not a lot else.
// It listens for the space bar being pressed and pauses the GameLevel when this happens.
// Its name may suggest that this is somewhere a menu could be set up, perhaps becoming 
// visible only when the game is paused.


const SPACE = 32;

class Menu extends Scene {
    constructor(canvas) {
        super();

        console.log(this.nameAndID + " Constructing Menu scene");

        this._canvas = canvas;
        this._game_level = null;

        canvas.addEventListener('keydown', (e) => this.onKeyPress(e));

        score_board = new ScoreBoard(this);
        this._entities.push(score_board);
    }


    startGame() {
        this._game_level = new GameLevel(this._canvas);
        scenes.push(this._game_level);
    }


    onKeyPress(event) {
        if ((event.which || event.keyCode) == SPACE) {
            this._game_level.togglePause();
        }
    }

}