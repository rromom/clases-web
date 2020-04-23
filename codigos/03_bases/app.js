const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
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


let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;
switch (comando) {
    case 'listar':
        listarTabla(base, limite).then(msg => console.log(msg)).catch(err => console.log(err.name, err.message))
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(msg => console.log(msg))
            .catch(err => console.log(err.name, err.message))
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