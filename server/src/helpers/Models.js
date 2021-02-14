const knex = require('knex');

const { Model } = require('objection');

const visibilityPlugin = require('objection-visibility').default;

const config = require('../../knex/knexfile');

const connection = knex(config.production);

Model.knex(connection);

module.exports = visibilityPlugin(Model);
