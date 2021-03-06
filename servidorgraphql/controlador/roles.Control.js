const Rol = require('../modelos/rolModel');

let get = (req, res) => {
  Rol.find()
    .then((data) => {
      res.status(200).json({
        ok: true,
        data: data,
        msg: "Mostrar roles",
        token: req.token,
      });
    })
    .catch((err) => {
      res.status(500).json({
        ok: false,
        data: null,
        msg: err,
      });
    });
};

let getByID = (req, res) => {
  let { _id } = req.params;

  Rol.find({ _id })
    .then((data) => {
      res.status(200).json({
        ok: true,
        data: data,
        msg: "Mostrar roles",
        token: req.token,
      });
    })
    .catch((err) => {
      res.status(500).json({
        ok: false,
        data: null,
        msg: err,
      });
    });
};

let post = (req, res) => {
  let { data } = req.body;

  Rol.create(data)
    .then((data) => {
      res.status(200).json({
        ok: true,
        data: data,
        msg: "Rol creado",
        token: req.token,
      });
    })
    .catch((err) => {
      res.status(500).json({
        ok: false,
        data: null,
        msg: "No se puede crear un rol para el usuario",
      });
    });
};

let patch = (req, res) => {
  let { _id } = req.params,
    { data } = req.body;

  Rol.updateOne({ _id }, { $set: data })
    .then((data) => {
      res.status(200).json({
        ok: true,
        data: data,
        msg: "Rol actualizado correctamente",
        token: req.token,
      });
    })
    .catch((err) => {
      res.status(500).json({
        ok: false,
        data: null,
        msg: err,
      });
    });
};

let deleteOne = (req, res) => {
  let { _id } = req.params;

  Rol.deleteOne({ _id })
    .then((data) => {
      res.status(200).json({
        ok: true,
        data: data,
        msg: "Rol eliminado correctamente",
        token: req.token,
      });
    })
    .catch((err) => {
      res.status(500).json({
        ok: false,
        data: null,
        msg: err,
      });
    });
};

module.exports = {
  get,
  getByID,
  post,
  patch,
  deleteOne,
};
