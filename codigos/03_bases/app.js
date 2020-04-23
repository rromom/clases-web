const { crearArchivo } = require('./multiplicar/multiplicar');



//console.log(module);

let base = process.argv[2].split('=')[1];
crearArchivo(base)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));