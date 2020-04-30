let empleados = [
    { id: 1, nombre: "Ricardo" },
    { id: 2, nombre: "Gabriel" },
    { id: 3, nombre: "Will" }
];
let salarios = [
    { id: 1, salario: 800 },
    { id: 2, salario: 950 }
]
let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadosDB = empleados.find(empleado => empleado.id === id);
        if (!empleadosDB) {
            reject(`No existe un empleado con id ${id}`)
        } else {
            resolve(empleadosDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDb = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDb) {
            reject(`No se encontro el salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioDb.salario });
        }
    });

};


// getEmpleado(2).then(empleado => {
//     getSalario(empleado).then(resp => {
//         console.log(resp);
//     });
// }, (err) => {
//     console.log(err);
// });

//Promesas en cadena

getEmpleado(34).then(empleados => {
    return getSalario(empleados);
}).then(resp => {
    console.log(`el usuario ${resp.nombre} gana ${resp.salario}`);
}).catch(err => console.log(err));