;
'use strict'
const env = require('dotenv').config(),
  { graphqlHTTP } = require('express-graphql'),
  { schema } = require('../schemas/configSchema'),
  app = require("./app"),
  port = process.env.PORT || 3000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, (err) => {
  if(!err){
      console.log(`El servicio esta funcionando en el puerto http://localhost:${port}`)
  }
  else
  {
      console.log('El servicio no esta funcionando');
  }
})


