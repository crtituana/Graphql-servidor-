const fs = require('fs'),
  User = require('../modelos/usuarioModel'),
  bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken');

let getUsers = (req, res) => {
  User.find()
    .then((data) => {
      res.status(200).json({
        ok: true,
        data: data,
        msg: "Mostar usuarios",
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

let getUserByID = (req, res) => {
  let _id = req.params.id;

  User.find({ _id })
    .then((data) => {
      res.status(200).json({
        ok: true,
        data: data,
        msg: "Mostar usuario por id...",
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

let getUserByName = (req, res) => {
  let { nombre } = req.params;

  User.find({ nombre })
    .then((data) => {
      res.status(200).json({
        ok: true,
        data: data,
        msg: "Mostrar nombres de usuarios",
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

let postUser = (req, res) => {
  let { data } = req.body;

  User.create(data)
    .then((data) => {
      res.status(200).json({
        ok: true,
        data: data,
        msg: "Usuario crado satisfactoriamente....",
        token: req.token,
      });
    })
    .catch((err) => {
      res.status(500).json({
        ok: false,
        data: null,
        msg: "No se pudo crear el usuario",
      });
    });
};

let postUsers = (req, res) => {
  let { data } = req.body; 

  User.insertMany(data)
    .then((data) => {
      res.status(200).json({
        ok: true,
        data: data,
        msg: "Usuarios creados correctamente...",
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

let patchUser = (req, res) => {
  let _id = req.params.id,
    data = req.body.data;

  User.findOneAndUpdate({ _id }, { $set: data })
    .then((data) => {
      res.status(200).json({
        ok: true,
        data: data,
        msg: "Datos Actualizados....",
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

let deleteUser = (req, res) => {
  let _id = req.params.id;

  User.deleteOne({ _id })
    .then((data) => {
      res.status(200).json({
        ok: true,
        data: data,
        msg: "Usuario eliminado....",
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

let loginUsers = (req, res) => {
  let { data } = req.body,
    email = data.email,
    password = data.password;

  User.find({ email })
    .then((data) => {
      if (data[0].email === email) {
        let token;
        bcrypt.compareSync(password, data[0].password)
          ? ((token = jwt.sign({ data: data[0] }, req.sessionID, {
              algorithm: "HS256",
              expiresIn: 120,
            })),
            res.status(200).json({
              ok: true,
              data: null,
              msg: "Usuario valido",
              token,
            }))
          : res.status(404).json({
              ok: false,
              data: null,
              msg: "Clave incorrecta vuelva a ingresar",
              token: null,
            });
      }
    })
    .catch((err) => {
      res.status(404).json({
        ok: false,
        data: null,
        msg: "Email no encontrado",
      });
    });
};

module.exports = {
  getUsers,
  getUserByID,
  getUserByName,
  postUser,
  postUsers,
  patchUser,
  deleteUser,
  loginUsers,
};
