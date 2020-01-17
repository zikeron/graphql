'use strict';

const { graphql, buildSchema } = require('graphql');
const express = require('express');
const gqlMiddleware = require('express-graphql');

const app = express();
const port = process.env.port || 3000;
// Initial Schema

const schema = buildSchema(`
    type Query {
        hello: String,
        saludo: String
    }
`);

// Resolver

const resolver =  {
    hello: () => 'Hello world',
    saludo: () => 'Qiubolas perro'
};

// Exec schema

/*
graphql(schema, '{ saludo }', resolver). then((data) => {
    console.log(data);
});
*/

app.use('/api', gqlMiddleware({
    schema,
    rootValue: resolver,
    graphiql: true
}));

app.listen(port,() => {
    console.log(`Server is listening at http://localhost:${port}/api`);
});