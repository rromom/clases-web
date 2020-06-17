const express = require('express')
const app = express()


// app.get('/', (req, res) => {
//     let content = {
//         nombre: 'Ricardo',
//         edad: 21,
//         url: req.url
//     }
//     res.send(content)
// })

// app.get('/about', (req, res) => {
//     res.send('ESTE ES MI SITIO WEB CON EXPRESS')
// })


app.use(express.static(__dirname + '/public'));



app.listen(3000, () => {
    console.log("Escuchando en el puerto 300");
})