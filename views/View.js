class View {
    static help() {
        console.log(`node index.js help\nnode index.js show\nnode index.js create <box_name>\nnode index.js add <box_name> <...turtles>\nnode index.js sell <box_name> <turtle_id>\nnode index.js countPrice <box_name>\nnode index.js detail <box_name>\nnode index.js filter <species>`);
    }
    static show(boxes) {
        console.log(`Turtle boxes in our shop:`)
        boxes.forEach((box, index) => {{
            console.log(`${index+1}. ${box.boxName} - ${box.turtles.length} turtles`);
        }})
    }
    static message(message) {
        console.log(message);
    }
}

module.exports = View