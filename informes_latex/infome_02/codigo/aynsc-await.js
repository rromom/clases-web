/**
 * pruebas async await
 */

// let getNombre = async() => {
//     throw new Error("Error en la base de datos")
//     return "Ricardo";
// }


let getNombre = () => {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     resolve("Ricardo");
        // }, 3000);

        reject("Error al consultar nombre");
    });
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(msg => {
    console.log(msg);
}).catch(err => {
    console.log("Error en el saludo", err);
});