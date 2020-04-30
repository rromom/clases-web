// De la forma habitual
/*
function sumear(a, b) {
    return a + b;
}*/

let sumar = (a, b) => a + b;
let saludar = (nombre) => `HOLA ${nombre}`;
//console.log(`La suma de 3 + 4 es = ${sumar(3,4)}`);
//console.log(`${saludar("inge")}`);

let deadpool = {
    nombre: "Wade",
    apellido: "Wilson",
    poder: "Regeneracion",
    getNombre: () => {
        return `${deadpool.nombre} ${deadpool.apellido} - pode: ${deadpool.poder}`;
    }
}
console.log(`${deadpool.getNombre()}`);