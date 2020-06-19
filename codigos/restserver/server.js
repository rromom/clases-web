const express = require('express')
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.get('/', (req, res) => {
    res.json({ 'Hola Mundo': 'hola' });
});
//obtener datos
app.get('/usuario', (req, res) => {
    res.json("get usuario")

});
//para crear datos o un recurso en el servidor
app.post('/usuario', (req, res) => {
    res.json("post usuario")

});
//actualizar datos
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({ id })
});
//eliminar datos
app.delete('/usuario', (req, res) => {
    res.json("delete usuario")

});
app.listen(3000, () => {
    console.log("Escuchando en el puerto", 3000);
});