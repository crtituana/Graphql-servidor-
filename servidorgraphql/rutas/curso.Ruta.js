const express = require('express');

let api = express.Router(),
    cursoControl = require('../controlador/curso.Control'),
    authControl = require('../controlador/middleware/auth.Control');


api.get('/cursos', authControl.auth, cursoControl.get);
api.get('/curso/:_id', authControl.auth, cursoControl.getByID);
api.post('/curso', authControl.auth, cursoControl.post);
api.patch('/curso/:_id', authControl.auth, cursoControl.patch);
api.delete('/curso/:_id', authControl.auth, cursoControl.deleteOne);

module.exports = api;
