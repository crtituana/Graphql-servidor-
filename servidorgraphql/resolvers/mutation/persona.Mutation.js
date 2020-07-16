const bcrypt = require('bcrypt');

let Usuario = require('../../modelos/usuarioModel');

module.exports = {
  createPersona: async (_, { input }) => {
    let personas,
      created = false,
      email = input.email;
    try {
      await User.create(input);
      persons = await User.find({ email });
      console.log(personas);
      created = true;
    } catch (error) {
      console.error(error);
    }
    return created;
  },

  updatePersona: async (_, { _id, input }) => {
    let persona;
    try {
      await User.updateOne({ _id }, { $set: input });
      persona = await User.find({ _id });
    } catch (error) {
      console.error(error);
    }
    return persona;
  },

  deletePersona: async (_, { _id }) => {
    let deleted = false;
    try {
      await Usuario.deleteOne({ _id });
      deleted = true;
    } catch (error) {
      console.error(error);
    }
    return deleted;
  },
};
