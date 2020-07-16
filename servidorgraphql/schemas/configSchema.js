;
'use strict'

const rolResolvers = require('../resolvers/rol.Resolvers');


const { makeExecutableSchema } = require('graphql-tools'),
  { join } = require('path'),
  { readFileSync } = require('fs'),
  cursoResolver = require('../resolvers/curso.Resolvers'),
  personaResolver = require('../resolvers/persona.Resolvers'),
  rolResolver = require ('../resolvers/rol.Resolvers'),
  typeDefs = readFileSync(join(__dirname, 'schema.graphql'), "utf-8"),
  schema = makeExecutableSchema({
    typeDefs,
    resolvers: [cursoResolver, personaResolver, rolResolver],
  });

module.exports = { 
  schema };
