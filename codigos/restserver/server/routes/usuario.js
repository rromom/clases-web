const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuarios')
const _ = require('underscore')


const app = express();


app.get('/', (req, res) => {
    res.json({ 'Hola Mundo': 'hola' });
});
//obtener datos
app.get('/usuario', (req, res) => {
    let desde = req.query.desde || 0;
    desde = Number(desde)
    let limite = req.query.limite || 5;
    limite = Number(limite)
    Usuario.find({ estado: true }, 'nombre  email role estado google img')
        .skip(5)
        .limit(5)
        .exec((err, usuarios) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }
            Usuario.count({}, (err, conteo) => {
                res.json({
                    ok: true,
                    usuarios,
                    numero: conteo
                })
            })
        })
});
//para crear datos o un recurso en el servidor
app.post('/usuario', (req, res) => {
    let body = req.body
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    })

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        usuarioDB.password = null
        res.json({
            ok: true,
            usuario: usuarioDB
        })

    });

});
//actualizar datos
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado'])

    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, usuarioBD) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usuario: usuarioBD
        })
    })
});
//eliminar datos
app.delete('/usuario', (req, res) => {
    let id = req.params.id;
    let cambiar_estado = {
        estado: false
    }


    Usuario.findByIdAndUpdate(id, cambiar_estado, { new: true, context: 'query' }, (err, usuarioBD) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        if (!usuarioBD) {
            res.json({
                ok: false,
                err: "Usuario no encontrado"
            });
        } else {
            res.json({
                ok: true,
                user: usuarioBD
            });
        }
    })

});

module.exports = app;