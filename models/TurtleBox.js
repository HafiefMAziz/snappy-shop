const fs = require('fs');
const {SnappingTurtle, Tortoise, Terapins} = require('./Turtle.js');

class TurtleBox {
    constructor (id, boxName, turtles) {
        this.id = id;
        this.boxName = boxName;
        this.turtles = turtles || [];
    }
    static getBoxes () {
        const boxesParse = JSON.parse(fs.readFileSync('./turtleboxes.json', 'utf8'));
        return boxesParse;
    }
    static saveBoxes (boxes) {
        const boxesStr = JSON.stringify(boxes, null, 2);
        fs.writeFileSync('./turtleboxes.json', boxesStr);
    }
    static createBox (params) {
        let boxes = this.getBoxes();
        const boxName = params[0];
        const lastIndex = boxes[boxes.length - 1].id;
        const isAvailable = boxes.find(box => box.boxName === boxName);
        if(!isAvailable){
            boxes.push(new TurtleBox(lastIndex+1, boxName));
        }else{
            return `Box name ${boxName} already in use!`;
        }
        this.saveBoxes(boxes);
        return `Box name ${boxName} successfully created!`;
    }



}

module.exports = TurtleBox;