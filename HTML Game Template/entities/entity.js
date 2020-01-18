"use strict";


// The Entity is the main thing that you can use to 'do stuff' in the game. It represents a single object that exists
// in the game world, be that a moving creature, a bullet, a piece of furniture or part of the UI.
// It's a simple object with an x, y position and a bunch of zero to many components. In fact, adding components is
// how you make the entity into a richer, more interesting object. If that's what you need.


var next_entity_id = 0;

class Entity {
    constructor(x, y) {
        // Give each entity a unique identifier as it's created.
        this._id = next_entity_id++;

        // Create a map of components used to define the behaviour of this entity.
        this._components = new Map();

        // Every entity has a position offset from (0, 0), which is the top left of the canvas.
        this._x = x;
        this._y = y;
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


    get x() {
        return this._x;
    }


    set x(x) {
        this._x = x;
    }


    get y() {
        return this._y;
    }


    set y(y) {
        this._y = y;
    }


    getComponent(type) {
        //console.log(this.nameAndID + ".getComponent(" + type + ")");
        return this._components.get(type);
    }


    addComponent(component) {
        //console.log(this.nameAndID + "::addComponent(" + component.nameAndID + ")");

        if (!(component.name in this._components)) {
            this._components.set(component.name, component);
            component.owner = this;
        }
        else {
            var message = this.nameAndID + "::addComponent(" + component.nameAndID + ") Adding duplicate " + component.name + " is not allowed, so it's being ignored.";
            console.log(message);
            alert(message);
        }
    }


    update(timeDelta) {
        // Update this entity's components.
        this._components.forEach(function (component) {
            component.update(timeDelta);
        });
    }


    render(context) {
        // Render this entity's components.
        this._components.forEach(function (component) {
            component.render(graphics_context);
        });
    }
}