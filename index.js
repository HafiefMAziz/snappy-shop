const TurtleController = require('./controllers/TurtleController.js')

const command = process.argv[2];
const params = process.argv.slice(3);

switch (command.toLowerCase()) {
    case 'help':
        TurtleController.help();
        break;
    case 'show':
        TurtleController.show();
        break;
    case 'create':
        TurtleController.createBox(params);
        break;
    case 'add':
        TurtleController.addTurtle(params);
        break;
    case 'sell':
        TurtleController.sell(params);
        break;
    case 'countprice':
        TurtleController.countprice(params);
        break;
    case 'detail':
        TurtleController.detail(params);
        break;
    case 'filter':
        TurtleController.filter(params);
        break;
    case undefined:
        TurtleController.message("Command can't be empty!");
        break;
    default :
        TurtleController.message("Command is unknown!");
        break;
}