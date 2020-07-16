;
'use strict'

const rolQueries = require("./queries/rol.Queries"),
      rolMutations = require("./mutation/rol.Mutation");

module.exports = {
  Query: rolQueries,
  Mutation: rolMutations,
};