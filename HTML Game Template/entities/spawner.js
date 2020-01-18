"use strict";


// This file contains two classes, Spawnable and the Spawner entity.
// In this game, the GameLevel creates a Spawner and uses it to start spawning Pickups and Wanderers.
// The Spawner creates Spawnable objects to manage these, spawning them occasionally and tracking how 
// many are in existence.


class Spawnable {
    constructor(name, max_concurrent, spawn_interval) {
        this._name = name;
        this._max_concurrent = max_concurrent;
        this._spawn_interval = spawn_interval;
        this._num_items = 0;
        this.reset_spawn_time();
    }


    get name() {
        return this._name;
    }


    get max_concurrent() {
        return this._max_concurrent;
    }


    get spawn_interval() {
        return this._spawn_interval;
    }


    get spawn_time() {
        return this._spawn_time;
    }


    get num_items() {
        return this._num_items;
    }


    reset_spawn_time() {
        this._spawn_time = 0;
    }


    addTime(timeDelta) {
        this._spawn_time += timeDelta;
    }


    increment() {
        this._num_items++;
    }


    decrement() {
        this._num_items--;
    }
}


class Spawner extends Entity {
    constructor(scene) {
        super(null, 0, 0);

        //console.log(this.nameAndID + " Constructing Spawner entity");

        this._scene = scene;
        this._spawnables = [];
    }


    startSpawning(name, max, interval) {
        this._spawnables.push(new Spawnable(name, max, interval));
    }


    decrement(name) {
        for (var index = 0; index < this._spawnables.length; index++) {
            var spawnable = this._spawnables[index];
            if (spawnable.name === name) {
                spawnable.decrement();
                break;
            }
        };
    }


    update(timeDelta) {
        super.update(timeDelta);

        for (var index = 0; index < this._spawnables.length; index++) {
            var spawnable = this._spawnables[index];
            spawnable.addTime(timeDelta);

            if (spawnable.spawn_time > spawnable.spawn_interval) {
                if (spawnable.num_items < spawnable.max_concurrent) {
                    this.spawn_item(spawnable);
                }
            }
        }
    }


    spawn_item(spawnable) {
        var spawned_entity = null;

        if (spawnable.name === "Pickup") {
            spawned_entity = new Pickup(this._scene);
        } else if (spawnable.name === "Wanderer") {
            spawned_entity = new Wanderer(this._scene);
        }

        if (spawned_entity) {
            this._scene.addEntity(spawned_entity);

            spawnable.increment();
            spawnable.reset_spawn_time();
        }
    }
}
