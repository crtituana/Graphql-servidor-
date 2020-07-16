let Rol = require("../../modelos/rolModel");

module.exports = {
  getRoles: async () => {
    let roles;
    try {
      roles = await Rol.find();
    } catch (error) {
      console.error(error);
    }
    return roles;
  },

  getRol: async (_, { _id }) => {
    let rol;
    try {
      rol = await Rol.find({ _id });
    } catch (error) {
      console.error(error);
    }
    return rol;
  },
};
