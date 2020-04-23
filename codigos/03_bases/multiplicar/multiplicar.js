//Clase donde se multiplcia y guarda los datos
const { promises: fs } = require('fs');

let listarTabla = (base, limite) => {
    new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`la base ${base} no es un numero`);
            return;
        }

        for (let i = 0; i < limite; i++) {
            mostr

        }

    });
}


let crearArchivo = async(base) => {
    if (!Number(base)) {
        throw new Error(`el valor  de la base  ${base} no es valido`)
    }
    let data = '';

    for (let i = 1; i <= 10; i++) {
        data += `${base} x ${i} =  ${base * i}\n`;
    }

    //Crea un archivo en una direccion especifica  y guarda la informacion de data
    await fs.writeFile(`tablas/tabla-${base}.txt`, data)
        .catch(err => { throw new Error(err) });

    return (`El archivo de la tabla del ${base} ha sido creado`);
}

module.exports = {
    crearArchivo
}