console.log("Inicio del programa");

setTimeout(function() {
    console.log("1 time out");
}, 3000);

setTimeout(function() {
    console.log("2 time out");
}, 0);

setTimeout(function() {
    console.log("3 time out");
}, 0);


console.log("Fin del Programa");