'use strict';
const {MongoClient} = require('mongo');
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env;

const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

let connection;

async function connectDB() {
    if (connection) return connection;

    let client;
    try {
        client = await MongoClient.connect(mongoUrl, {
            useNewUrlParser: true
        });
        connection = client.db(DB_NAME)
    } catch (error) {
        console.log(`Could not connect to db. url ${mongoUrl}. error: ${error}`);
        process.exit(1);
    }

    return connection;
}

module.export = connectDB