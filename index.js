"use strinct";

const { graphql, buildSchema } = require("graphql");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const port = process.env.port || 3000;

//Definiendo el esquema
const schema = buildSchema(`
type Query {
    hello: String
    saludo: String
}
`);

//Configurar los resolvers
const resolvers = {
  hello: () => {
    return "Hola Mundo";
  },
  saludo: () => {
    return "Hola Mundo 2";
  },
};

//Se define un resolver para cada query

app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
