const express = require('express');

let api = express.Router(),
  usuarioControl = require('../controlador/usuario.Control'),
  passwordControl = require('../controlador/middleware/password.Control'),
  authControl = require('../controlador/middleware/auth.Control'),
  rolControl = require('../controlador/middleware/rol.Control');

api.get('/usuarios', authControl.auth, usuarioControl.getUsers);
api.get('/usuarios/:nombre', authControl.auth, usuarioControl.getUserByName);
api.get( '/user/:id', [authControl.auth, rolControl.adminRol],usuarioControl.getUserByID);
api.post('/user', passwordControl.codificarPassword, usuarioControl.postUser);
api.post('/login', usuarioControl.loginUsers);
api.patch('/user/:id', authControl.auth, usuarioControl.patchUser);
api.delete('/user/:id', authControl.auth, usuarioControl.deleteUser);

module.exports = api;
