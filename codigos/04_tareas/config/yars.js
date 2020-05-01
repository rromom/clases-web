const description = {
    demand: true,
    alias: 'd',
    desc: 'description to task'
}

const complete = {
    default: true,
    alias: 'c',
    desc: 'make complete or pending'
}

const argv = require('yargs')
    .command('create', 'Crear una Tarea', {
        description,
        complete
    })
    .command('update', 'Crear una Tarea', {
        description
    })
    .command('clean', 'Crear una Tarea', {
        description
    })
    .argv;

module.exports = {
    argv
}