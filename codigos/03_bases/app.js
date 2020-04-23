const argv = require('yargs').
command('listar', 'Imprimer en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'crear un archivo de la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];
let base = argv.base;
switch (comando) {
    case 'listar':
        console.log("Hay que listar");
        break;
    case 'crear':
        crearArchivo(base)
            .then(msg => console.log(msg))
            .catch(err => console.log(err))
        break;
    default:
        console.log('comando no valido');
        break;
}

//console.log(module);

// let base = process.argv[2].split('=')[1];
// crearArchivo(base)
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err));