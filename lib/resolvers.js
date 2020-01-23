'use strict';

const mutations = require('./mutations');
const queries = require('./query');
const types = require('./types');

module.exports = {
    Query: queries,
    Mutation: mutations,
    ...types
};