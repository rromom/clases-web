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
    .command('create', 'Create a task', {
        description,
        complete
    })
    .command('update', 'Update a task', {
        description
    })
    .command('clean', 'Delete a task', {
        description
    })
    .argv;

module.exports = {
    argv
}