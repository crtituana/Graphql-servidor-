const cursoQueries = require('./queries/curso.Queries'),
      cursoMutation = require('./mutation/curso.Mutation'),
      cursoTypes = require('./types/curso.Types');
    

module.exports = {
  Query: cursoQueries,
  Mutation: cursoMutation,
  ...cursoTypes,
};
