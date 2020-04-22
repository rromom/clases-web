// setTimeout(function () {
//     console.log('Hola muchachos');
// },3000);

let getUsuarioByID = (id, nickname, callback) => {
    let n = nickname + "perez";
    let usuario = {
        nombre: "Ricardo",
        id
    }
    if (id === 20) {
        callback(`El usuario con id ${id} no existe`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioByID(10, (err, usuario, edad) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Usuario de la BD: ${usuario}, edad ${edad}`);
});