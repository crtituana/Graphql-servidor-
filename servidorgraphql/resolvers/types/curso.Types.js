let User = require('../../modelos/usuarioModel');

module.exports = {
  Curso: {
    participantes: async ({ participantes }) => {
      let participantesData, ids;
      try {
        ids = participantes ? participantes.map((id) => id) : [];
        participantesData = ids.length > 0 ? await User.find({ _id: ids }) : [];
      } catch (error) {
        console.error(error);
      }
      return participantesData;
    },
  },
};
