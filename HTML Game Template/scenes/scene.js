"use strict";


// Scenes are effectively groups of entities that can be handled independently of other groups.
// A scene can have its time scale modified to make it run faster or slower than wall clock time.


var next_scene_id = 0;


class Scene {
    constructor() {
        // Give each scene a unique identifier as it's created.
        this._id = next_scene_id++;

        this._time_scale = 1.0;

        // Create an array of entities that are owned by this scene.
        this._entities = [];
    }


    get id() {
        return this._id;
    }


    get name() {
        return this.constructor.name;
    }


    get nameAndID() {
        return this.constructor.name + "[" + this._id + "]";
    }


    get time_scale() {
        return this._time_scale;
    }


    set time_scale(_time_scale) {
        this._time_scale = _time_scale;
    }


    addEntity(entity) {
        this._entities.push(entity);
    }


    removeEntity(entity) {
        for (var index = 0; index < this._entities.length; index++) {
            if (this._entities[index] == entity) {
                this._entities.splice(index, 1);
                break;
            }
        }
    }


    update(timeDelta) {
        // Update each of this scene's entities.
        this._entities.forEach(function (entity) {
            entity.update(timeDelta * this._time_scale);
        }, this);
    }


    render(context) {
        // Render each of this scene's entites.
        this._entities.forEach(function (entity) {
            entity.render(context);
        });
    }
}