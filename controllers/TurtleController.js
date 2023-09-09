const TurtleBox = require('../models/TurtleBox.js');
const View = require('../views/View.js');

class TurtleController {
    static help() {
        View.help();
    }
    static show () {
        const boxes = TurtleBox.getBoxes();
        View.show(boxes);
    }
    static createBox (params) {
        const message = TurtleBox.createBox(params);
        View.message(message);
    }
    static addTurtle (params) {
        const message = TurtleBox.addTurtle(params);
        View.message(message);
    }
    static sellTurtle (params) {
        const message = TurtleBox.sellTurtle(params);
        View.message(message);
    }
    static countPrice (params) {
        const message = TurtleBox.countPrice(params);
        View.message(message);
    }
    static detail (params) {
        const box = TurtleBox.detail(params);
        View.detail(box);
    }
    static filter (params) {
        const turtles = TurtleBox.filter(params);
        View.filter(turtles, params[0]);
    }
}

module.exports = TurtleController;