let Rol = require('../../modelos/rolModel');

module.exports = {
  createRol: async (_, { input }) => {
    let created = false;
    try {
      await Rol.create(input);
      created = true;
    } catch (error) {
      console.error(error);
    }
    return created;
  },

  updateRol: async (_, { _id, input }) => {
    let rol;
    try {
      await User.updateOne({ _id }, { $set: input });
      rol = await Rol.find({ _id });
    } catch (error) {
      console.error(error);
    }
    return rol;
  },

  deleteRol: async (_, { _id }) => {
    let deleted = false;
    try {
      await Rol.deleteOne({ _id });
      deleted = true;
    } catch (error) {
      console.error(error);
    }
    return deleted;
  },
};
