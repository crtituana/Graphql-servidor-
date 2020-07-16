const personaQueries = require('./queries/persona.Queries'),
  personaMutation = require('./mutation/persona.Mutation'),
  personaTypes = require('./types/persona.Types');

module.exports = {
  Query: personaQueries,
  Mutation: personaMutation,
  ...personaTypes,
};
