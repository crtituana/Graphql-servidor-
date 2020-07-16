let Curso = require('../../modelos/cursoModel');

module.exports = {
  getCursos: async () => {
    let cursos;
    try {
      cursos = await Curso.find();
    } catch (error) {
      console.error(error);
    }
    return cursos;
  },

  getCurso: async (_, { _id }) => {
    let curso;
    try {
      curso = await Curso.find({ _id });
    } catch (error) {
      console.error(error);
    }
    return curso;
  },
};
