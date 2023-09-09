class View {
    static help() {
        console.log(`node index.js help\nnode index.js show\nnode index.js create <box_name>\nnode index.js add <box_name> <...turtles>\nnode index.js sell <box_name> <turtle_id>\nnode index.js countPrice <box_name>\nnode index.js detail <box_name>\nnode index.js filter <species>`);
    }
    static show(boxes) {
        console.log(`Turtle boxes in our shop:`)
        boxes.forEach((box, index) => {{
            console.log(`${index+1}. ${box.boxName} - ${box.turtles.length} turtles`);
        }});
    }
    static detail(box) {
        if(box.boxName){
            console.log(`Turtles in ${box.boxName} in our shop:`)
            box.turtles.forEach((turtle, index) => {
                console.log(`${index+1}. ${turtle.name}, species: ${turtle.species}\n   Price: Rp. ${turtle.price}, size: ${turtle.size}, weight: ${turtle.weight}`);
                if(turtle.patterns){
                    console.log(`   Patterns: ${turtle.patterns}`)
                }
            });
        }else{
            console.log(`${box} is not found!`);
        }
    }
    static filter(turtles, species){
        console.log(typeof turtles);
        if(turtles){
            console.log(`These are our ${species} collections: (${turtles.length} in total)`);
            turtles.forEach((turtle, index) => {
                console.log(`${index+1}. ${turtle.name}, size: ${turtle.size}, weight: ${turtle.weight}`);
            });
        }else{
            console.log(`These ${species} are not found!`);
        }
    }
    static message(message) {
        console.log(message);
    }
}

module.exports = View