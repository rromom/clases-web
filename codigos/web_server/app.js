const http = require('http');
http.createServer((req, res) => {
    //res.write("HOLA MUNDO DESDE LA WEB")
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let content = {
        nombre: 'Ricardo',
        edad: 21,
        url: req.url
    }
    res.write(JSON.stringify(content))
    res.end();
}).listen(8000);

console.log("Escuchando el puerto 8000");