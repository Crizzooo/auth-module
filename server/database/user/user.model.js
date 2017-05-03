'use strict';

var Sequelize = require('sequelize');

var db = require('../db.js');

const Auth = db.define('auth', {
  email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      isEmail: true
  },
  password: Sequelize.STRING
});


module.exports = Auth;
