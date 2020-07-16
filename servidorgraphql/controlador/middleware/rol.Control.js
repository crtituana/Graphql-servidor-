const jwt = require('jsonwebtoken'),
  Rol = require('../../modelos/rolModel');

let adminRol = (req, res, next) => {
  let token = req.headers.authorization || null;

  jwt.verify(token, process.env.KEY_JWT, (err, decode) => {
    if (err) {
      return res.status(400).json({
        data: err,
        msg: "Token invalido...........",
      });
    } else {
      Rol.find({ _id: decode.data.rol })
        .then((data) => {
          if (data[0].name === "Administrador") {
            next();
          } else {
            res.status(401).json({
              ok: false,
              data: null,
              msg: "Usted no tiene los permisos para el ingreso a la pagina",
            });
          }
        })
        .catch((err) => {
          console.log("No encontrado");
        });
    }
  });
};

let clienteRol = (req, res, next) => {
  let token = req.headers.authorization || null;

  jwt.verify(token, process.env.KEY_JWT, (err, decode) => {
    if (err) {
      return res.status(400).json({
        data: err,
        msg: "Token invalido..............",
      });
    } else {
      Rol.find({ _id: decode.data.rol })
        .then((data) => {
          if (data[0].name === "Cliente") {
            next();
          } else {
            res.status(401).json({
              ok: false,
              data: null,
              msg: "Usted no tiene los permisos para el ingreso a la pagina",
            });
          }
        })
        .catch((err) => {
          console.log("No encontrado");
        });
    }
  });
};

module.exports = {
  adminRol,
  clienteRol,
};
