const express = require('express')
const app = express()
const hbs = require('hbs');
const puerto = process.env.PORT || 3000
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/parciales");
//helpers


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'rICArDo rOmO',
        pagina: "home",
        activacion: { h: "active", a: "" }
    });
})


app.get('/about', (req, res) => {
    res.render('about', {
        pagina: "about",
        activacion: { h: "", a: "active" }
    })
});


app.listen(puerto, () => {
    console.log(`Escuchando en el puerto , http://localhost:${puerto}`);
})