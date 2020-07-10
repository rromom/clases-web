require('./config/config')
const mongoose = require('mongoose');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
    //incluir rutas de usuarios
app.use(require('./routes/usuario'))


mongoose.connect(process.env.URLDB, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    console.log("base de datos online");
})

app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto", 3000);
});