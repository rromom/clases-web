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
    // let content = {
    //     nombre: 'Ricardo',
    //     edad: 21,
    //     url: req.url
    // }
    res.render('home', {
        nombre: 'rICArDo rOmO',
        pagina: "home",
        activacion: { h: "active", a: "" }
    });
})

// app.get('/about', (req, res) => {
//     res.send('ESTE ES MI SITIO WEB CON EXPRESS')
// })

app.get('/about', (req, res) => {
    res.render('about', {
        pagina: "about",
        activacion: { h: "", a: "active" }
    })
});


app.listen(puerto, () => {
    console.log("Escuchando en el puerto ", puerto);
})