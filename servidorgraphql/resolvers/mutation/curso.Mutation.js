let Curso = require("../../modelos/cursoModel");

module.exports = {
  createCurso: async (_, { input }) => {
    let cursos;
    try {
      await Curso.create(input);
      cursos = await Curso.find();
    } catch (error) {
      console.error(error);
    }
    return cursos;
  },

  updateCurso: async (_, { _id, input }) => {
    let curso;
    try {
      let participantes= [];
      if (input.participantes.length > 0) {
        input.participantes.forEach((idEstudiante) => {
          participantes.push(idEstudiante);
        });
      }
      input.participantes= participantes;
      await Curso.updateOne({ _id }, { $set: input });
      curso = await Curso.find({ _id });
    } catch (error) {
      console.error(error);
    }
    return curso;
  },

  deleteCurso: async (_, { _id }) => {
    let cursos;
    try {
      await Curso.deleteOne({ _id });
      cursos = await Curso.find();
    } catch (error) {
      console.error(error);
    }
    return cursos;
  },
};

