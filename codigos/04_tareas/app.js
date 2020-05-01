const argv = require('./config/yars').argv;
const tasks = require('./controlador/task-for-do')
const color = require('colors')

let command = argv._[0];

switch (command) {
    case 'create':
        let task = tasks.create(argv.description);
        console.log(task);
        break;
    case 'list':
        let list = tasks.getlist();
        for (let task of list) {
            console.log(color.green(`Descripcion: ${task.description}`));
            console.log(color.yellow(`Completado: ${task.complete}`));
        }
        break;
    case 'update':
        let resp = tasks.update(argv.description, argv.complete);
        console.log(resp);
        break;
    case 'clean':
        let del = tasks.deleted(argv.description)
        console.log(del);
        break;
    default:
        console.log('command not found ');
        break;
}