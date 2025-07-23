const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Unidade = sequelize.define('Unidade', {
  nome: DataTypes.STRING,
  cidade: DataTypes.STRING
});

module.exports = Unidade;
