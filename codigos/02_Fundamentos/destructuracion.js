let deadpool = {
    nombre: "Wade",
    apellido: "Wilson",
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - pode: ${this.poder}`;
    }
}

//opcion 1
console.log(deadpool.getNombre());
let nom = deadpool.nombre;
let ape = deadpool.apellido;
let pod = deadpool.poder;

//opcion 2
let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);