'use strict';

const { graphql, buildSchema } = require('graphql');

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

graphql(schema, '{ saludo }', resolver). then((data) => {
    console.log(data);
});