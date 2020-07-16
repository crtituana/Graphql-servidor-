const mongoose = require('mongoose');

const { Schema } = mongoose;

const cursoModel = Schema({
  title: { type: String },
  profesor: { type: String },
  descripcion: { type: String },
  tema: { type: String },
  participantes: { type: Array },
  sessionID: { type: String },
  createAt: { type: Date },
});

module.exports = mongoose.model("Curso", cursoModel);
