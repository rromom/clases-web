const fs = require('fs');

let taskfordo = [];

const load_data = () => {
    taskfordo = require('../modelo/data.json')
}

const save_data = () => {
    //load_data()
    let data = JSON.stringify(taskfordo)
    fs.writeFile('modelo/data.json', data, (err) => {
        if (err) throw new Error('Dont save data ', err);
    })
}

const create = (description) => {
    load_data();
    let task = {
        description,
        complete: false
    }
    taskfordo.push(task);
    save_data();
    return taskfordo;
}

let getlist = () => {
    load_data();
    return taskfordo;
}

let update = (des, completado = true) => {
    load_data();
    //console.log(taskfordo);
    let index = taskfordo.findIndex(task => task.description === des)
    console.log(index);
    if (index >= 0) {
        taskfordo[index].complete = completado;
        save_data();
        return true;
    }
    return false;
}


let deleted = (descripcion) => {
    load_data();
    let index = taskfordo.findIndex(task => task.description === descripcion)
    if (index >= 0) {
        let obj = taskfordo.filter(task => task.description !== descripcion)
        taskfordo = obj;
        save_data();
        return true;
    }
    return false;
}

module.exports = {
    create,
    getlist,
    update,
    deleted
}