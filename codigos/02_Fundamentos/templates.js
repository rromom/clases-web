let nombre = "deadpool";
let real = 'Wade Winston';

console.log(`${nombre} ${real}`);
let nombre_completo = nombre + " " + real;
let nombreTemplate = `${nombre} ${real}`;

console.log(nombre_completo === nombreTemplate);
console.log(1 == '1');
console.log(1 === '1');


function getNombre() {
    return `${nombre} ${real}`;
}
console.log(`El nombre es: ${getNombre()}`);