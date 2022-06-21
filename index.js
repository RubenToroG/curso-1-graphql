"use strinct";

const { graphql, buildSchema } = require("graphql");

//Definiendo el esquema
const schema = buildSchema(`
type Query {
    hello: String
}
`);

//Ejecutar el query
graphql({
  schema: schema,
  source: "{ hello }",
})
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
