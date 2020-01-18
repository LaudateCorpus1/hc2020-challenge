
/* Game namespace */
var game = {

    data : {
        score : 0,
        enemyCount : 0,
        playerLives : 0,
        gridSize : 64  	
    },
    
    // Run on page load.
    "onload" : function () {
        // Initialize the video.
        if (!me.video.init(960, 640, {wrapper : "screen", scale : "auto"})) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // Initialize the audio.
        me.audio.init("mp3,ogg");

        // set and load all resources.
        // (this will also automatically switch to the loading screen)
        me.loader.preload(game.resources, this.loaded.bind(this));
    },

    // Run on game resources loaded.
    "loaded" : function () {
         // set the "Play/Ingame" Screen Object
        this.playScreen = new game.PlayScreen();
        me.state.set(me.state.PLAY, this.playScreen);

        this.gameOverScreen = new game.GameEndScreen();
        me.state.set(me.state.GAMEOVER, this.gameOverScreen);

        //add entities to entity pool
        me.pool.register("player", game.Player);
        me.pool.register("Chrome", game.Chrome);
        me.pool.register("Firefox", game.Firefox);
        me.pool.register("Edge", game.Edge);
        me.pool.register("laser", game.Laser);

        // Start the game.
        me.state.change(me.state.PLAY);
    }
};
