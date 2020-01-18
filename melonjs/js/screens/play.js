game.PlayScreen = me.ScreenObject.extend({
    /**
     * action to perform on state change
     */
    checkIfLoss : function (y) {
        if (y >= this.player.pos.y) {
            //Display game over screen intead of reseting the game
           //this.reset();
           console.log("Play Screen Reset GAMEOVER");
           me.state.change(me.state.GAMEOVER);
        }
    },

    onResetEvent : function () {
        me.game.world.addChild(new me.ColorLayer("background", "#000000"), 0);
        
        this.player = me.pool.pull("player");
        me.game.world.addChild(this.player, 1);
    
        this.enemyManager = new game.EnemyManager();
        this.enemyManager.createEnemies();
        me.game.world.addChild(this.enemyManager, 2);

        //game.data.waveCount += 1;
        //console.log("Play Screen Reset ... wave ");
        

        game.enemyExplosionEmitter = new game.explosionManager(0, 0, "explosion");
    
        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.A, "left");
        me.input.bindKey(me.input.KEY.D, "right");
        me.input.bindKey(me.input.KEY.SPACE, "shoot", true);
    },
    
    /**
     * action to perform when leaving this screen (state change)
     */
    onDestroyEvent : function () {
        me.input.unbindKey(me.input.KEY.LEFT);
        me.input.unbindKey(me.input.KEY.RIGHT);
        me.input.unbindKey(me.input.KEY.A);
        me.input.unbindKey(me.input.KEY.D);
        me.input.unbindKey(me.input.KEY.SPACE);
    }
});