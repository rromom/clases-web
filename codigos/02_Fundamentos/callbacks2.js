let empleados = [{
        id: 1,
        nombre: "Ricardo"
    },
    {
        id: 2,
        nombre: "Gabriel"
    },
    {
        id: 3,
        nombre: "Will"
    }
];

let salarios = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
]

let getEmpleado = (id, callback) => {
    //LAzo for 
    let empleadosDB = empleados.find(empleado => empleado.id === id);
    if (!empleadosDB) {
        callback(`No existe un empleado con id ${id}`)
    } else {
        callback(null, empleadosDB);
    }
}


let getSalario = (empleado, callback) => {
    let salarioDb = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDb) {
        callback(`No se encontro el salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDb.salario });
    }
};


getEmpleado(2, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    getSalario(usuario, (err, respuesta) => {
        if (err) {
            return console.log(err);
        }
        console.log(`el salario de ${respuesta.nombre} es de ${respuesta.salario}`);
    });
    //console.log(usuario);
});