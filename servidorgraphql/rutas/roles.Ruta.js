const express = require('express');

let api = express.Router(),
    rolControl = require('../controlador/roles.Control'),
    authControl = require('../controlador/middleware/auth.Control');


api.get('/roles', authControl.auth, rolControl.get);
api.get('/rol/:_id', authControl.auth, rolControl.getByID);
api.post('roles', authControl.auth, rolControl.post);
api.patch('/rol/:_id', authControl.auth, rolControl.patch);
api.delete('/rol/:_id', authControl.auth, rolControl.deleteOne);

module.exports = api;
