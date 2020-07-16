const bcrypt = require('bcrypt'),
jwt = require('jsonwebtoken');

let User = require('../../modelos/usuarioModel');

module.exports = {
  getPersonas: async () => {
    let personas;
    try {
      personas = await User.find();
    } catch (error) {
      console.error(error);
    }
    return personas;
  },

  getPersona: async (_, { _id }) => {
    let persona;
    try {
      persona = await User.find({ _id });
    } catch (error) {
      console.error(error);
    }
    return persona;
  },

  login: async (_, { email, password }) => {
    let persona,
      found = false;

    try {
      data = await User.find({ email });
      let token, tokenBody = {
        nombre: data[0].name,
        email: data[0].email,
        rol: data[0].role,
        sessionID: data[0].sessionID,
      }

      bcrypt.compareSync(password, data[0].password)
        ? ((token = jwt.sign({data: tokenBody}, process.env.KEY_JWT, {
          algorithm: "HS256",
          expiresIn: 300,
        })), persona = {
        ok: true,
        data: null,
        msg: "Usuario valido",
        token,
      }) : 
      persona = {
        ok: false,
        data: null,
        msg: "Clave incorrecta",
        token: null,
      }
      found = true
    } catch (error) {
      console.error(error);
    }

    return persona;
  },
};
