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
}

module.exports = TurtleController;