const fs = require('fs');
const {SnappingTurtle, Tortoise, Terapins} = require('./Turtle.js');

class TurtleBox {
    constructor (id, boxName, turtles) {
        this.id = id;
        this.boxName = boxName;
        this.turtles = turtles || [];
    }
    static getBoxes () {
        let boxes = JSON.parse(fs.readFileSync('./turtleboxes.json', 'utf8'));
        boxes = boxes.map(box => {
            let {id, boxName, turtles} = box;
            return new TurtleBox(id, boxName, turtles);
        })
        return boxes;
    }
    static saveBoxes (boxes) {
        const boxesStr = JSON.stringify(boxes, null, 2);
        fs.writeFileSync('./turtleboxes.json', boxesStr);
    }
    static createBox (params) {
        let boxes = this.getBoxes();
        const boxName = params[0];
        const lastIndex = boxes[boxes.length - 1].id;
        const isAvailable = boxes.find(box => box.boxName.toLowerCase()  === boxName.toLowerCase() );
        if(!isAvailable){
            boxes.push(new TurtleBox(lastIndex+1, boxName));
        }else{
            return `Box name ${boxName} already in use!`;
        }
        this.saveBoxes(boxes);
        return `Box name ${boxName} successfully created!`;
    }
    static addTurtle(params) {
        let boxes = this.getBoxes();
        const boxName = params[0];
        const turtle = params.slice(1);
        let [name, species, price, patterns, size, weight] = turtle;
        patterns = patterns.slice(1, patterns.length - 1).split(',');
        boxes.forEach(box => {
            const lastIndex = box.turtles.length > 0 ? box.turtles[box.turtles.length - 1].id : 0;
            if(box.boxName === boxName){
                if(species === "SnappingTurtle"){
                    box.turtles.push(new SnappingTurtle(lastIndex+1, name, species, price, patterns, size, weight));
                }else if(species === "Tortoise"){
                    box.turtles.push(new Tortoise(lastIndex+1, name, species, price, patterns, size, weight));
                }else if(species === "Terapins"){
                    box.turtles.push(new Terapins(lastIndex+1, name, species, price, patterns, size, weight));
                }
                this.saveBoxes(boxes);
            }
        });
        const isFound = boxes.find(box => box.boxName.toLowerCase()  === boxName.toLowerCase() );
        return isFound ? `"${name}" has been added to ${boxName} box` : `${boxName} is not found!`; 
    }
    static sellTurtle(params){
        let boxes = this.getBoxes();
        const [boxName, id] = params;
        let deletedTurtle = null;
        boxes.forEach(box => {
            if(box.boxName === boxName){
                deletedTurtle = box.turtles.find(turtle => turtle.id === +id)
                box.turtles = box.turtles.filter(turtle => turtle.id !== +id);
                this.saveBoxes(boxes);
            }
        });
        const boxNameFound = boxes.find(box => box.boxName === boxName);
        return !boxNameFound ? `${boxName} is not found!` : deletedTurtle ? `"${deletedTurtle.name}" has been sold from box` : `Turtle with id ${id} not found`; 
    }
    static countPrice(params){
        let boxes = this.getBoxes();
        const boxName = params[0];
        let sumPrice = 0;
        boxes.forEach(box => {
            if(box.boxName === boxName){
                sumPrice = box.turtles.reduce((turtle1, turtle2) => turtle1.price + turtle2.price);
            }
        });
        const boxNameFound = boxes.find(box => box.boxName.toLowerCase()  === boxName.toLowerCase() );
        return !boxNameFound ? `${boxName} is not found!` : `"${boxName}" is worth of Rp. ${sumPrice}`
    }
    static detail(params){
        let boxes = this.getBoxes();
        const boxName = params[0];
        const boxNameFound = boxes.find(box => box.boxName.toLowerCase()  === boxName.toLowerCase());
        return !boxNameFound ? boxName : boxNameFound;
    }
    static filter(params){
        let boxes = this.getBoxes();
        const species = params[0];
        let filteredTurtles = [];
        boxes.forEach(box => {
            box.turtles.forEach(turtle => {
                if(turtle.species.toLowerCase() === species.toLowerCase()){
                    filteredTurtles.push(turtle);
                };
            });
        });
        return filteredTurtles.length > 0 ? filteredTurtles : null;
    }



}

module.exports = TurtleBox;