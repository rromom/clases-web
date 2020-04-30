let deadpool = {
    nombre: "Wade",
    apellido: "Wilson",
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - pode: ${this.poder}`;
    }
}

let { nombre, apellido, poder } = deadpool;
console.log(nombre, apellido, poder);

//console.log(deadpool.getNombre());
//let nom = deadpool.nombre;
//let ape = deadpool.apellido;
//let pod = deadpool.poder;

//opcion 2