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
    .command('update', 'Actualiza una Tarea', {
        description
    })
    .command('clean', 'Elimina una Tarea', {
        description
    })
    .command('list', 'Lista dependiendo de el argumento', {
        description
    })
    .argv;

module.exports = {
    argv
}