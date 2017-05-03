'use strict';

const Sequelize = require('sequelize');

//NOTE: Have you run createdb DATABASE_NAME?
const DATABASE_NAME = 'authModule';
var databaseURI = 'postgres://localhost:5432/' + DATABASE_NAME;

const db = new Sequelize(databaseURI, {
  define: {
    underscored: true, /* switches from camelCase column names like createdAt -> created_at */
    timestamps: false /* flip this to include created_at and updated_at columns in models */
  },
  logging: false
});

module.exports = db;
