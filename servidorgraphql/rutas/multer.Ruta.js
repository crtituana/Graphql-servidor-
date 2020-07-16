const express = require('express'),
  multer = require('multer');

let api = express.Router(),
  multerControl = require('../controlador/multer.Control'),
  upload = multer({ dest: './files' });


api.get('/file', multerControl.getFiles);
api.post('/file', upload.single('file'), multerControl.saveFile);

module.exports = api;

