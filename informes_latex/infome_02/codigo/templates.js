let nombre = "deadpool";
let real = 'Wade Winston';
let nombre_completo = nombre + " " + real;
let nombreTemplate = `${nombre} ${real}`;


function getNombre() {
    return `${nombre} ${real}`;
}
console.log(`El nombre es: ${getNombre()}`);


//console.log(nombre_completo === nombreTemplate);
//console.log(1 == '1');
//console.log(1 === '1');