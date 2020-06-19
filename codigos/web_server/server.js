const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // let content = {
    //     nombre: 'Ricardo',
    //     edad: 21,
    //     url: req.url
    // }
    res.render('home', { nombre: 'Ricardo', anio: new Date().getFullYea() });
})

// app.get('/about', (req, res) => {
//     res.send('ESTE ES MI SITIO WEB CON EXPRESS')
// })

app.get('/about', (req, res) => {
    res.render('about')
});


app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
})