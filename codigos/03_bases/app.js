const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors')
const argv = require('./config/yargs').argv

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;
switch (comando) {
    case 'listar':
        listarTabla(base, limite).then(msg => console.log(colors.blue(msg))).catch(err => console.log(colors.red(err.name, err.message)))
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(msg => console.log(colors.blue(msg)))
            .catch(err => console.log(colors.red(err.name, err.message)))
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