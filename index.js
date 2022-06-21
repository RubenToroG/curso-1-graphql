"use strinct";

const { graphql, buildSchema } = require("graphql");

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

//Ejecutar el query
graphql({
  schema: schema,
  source: "{ hello, saludo }",
  rootValue: resolvers,
})
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
