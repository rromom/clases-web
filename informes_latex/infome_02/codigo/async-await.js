let empleados = [
    { id: 1, nombre: "Ricardo" },
    { id: 2, nombre: "Gabriel" },
    { id: 3, nombre: "Will" }
];
let salarios = [
    { id: 1, salario: 800 },
    { id: 2, salario: 950 }
]

let getEmpleado = async(id) => {
    let empleadosDB = empleados.find(empleado => empleado.id === id);
    if (!empleadosDB) {
        throw new Error(`No existe un empleado con id ${id}`)
    } else {
        return (empleadosDB);
    }
}

let getSalario = (empleado) => {
    let salarioDb = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDb) {
        throw new Error(`No se encontro el salario para el empleado ${empleado.nombre}`);
    } else {
        return ({ nombre: empleado.nombre, salario: salarioDb.salario });
    }
}




let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);
    return `El salario de ${salario.nombre} es de: ${salario.salario}`;
}

getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));