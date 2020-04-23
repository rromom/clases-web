let opc = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs').
command('listar', 'Imprimer en consola la tabla de multiplicar', opc)
    .command('crear', 'crear un archivo de la tabla de multiplicar', opc)
    .help()
    .argv;

module.exports = {
    argv
}