//Clase donde se multiplcia y guarda los datos
const { promises: fs } = require('fs');
const colors = require('colors')

let listarTabla = async(base, limite) => {
    if (!Number(base)) {
        throw new Error(`el valor  de la base  ${base} no es valido`)
    }
    if (!Number(limite)) {
        throw new Error(`el valor  del limite  ${limite} no es valido`)
    }
    data = ''
    console.log("============================".green);
    console.log(`TABLA DE MULTIPLICAR ${base}`.yellow);
    console.log("============================".green);


    for (let i = 1; i <= limite; i++) {
        data += `${base} x ${i} =  ${base * i}\n`;
    }
    return data;
}


let crearArchivo = async(base, limite) => {
    if (!Number(base)) {
        throw new Error(`el valor  de la base  ${base} no es valido`)
    }
    if (!Number(limite)) {
        throw new Error(`el valor  del limite  ${limite} no es valido`)
    }
    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} x ${i} =  ${base * i}\n`;
    }

    //Crea un archivo en una direccion especifica  y guarda la informacion de data
    await fs.writeFile(`tablas/tabla-${base}.txt`, data)
        .catch(err => { throw new Error(err) });

    return (`El archivo de la tabla del ${base} ha sido creado`);
}

module.exports = {
    crearArchivo,
    listarTabla
}