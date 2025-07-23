const sequelize = require('../config/database');
const User = require('./User');
const Unidade = require('./Unidade');
const Solicitacao = require('./Solicitacao');

const initDB = async () => {
  await sequelize.sync({ force: true }); // use { alter: true } em produção
  console.log('Banco sincronizado');
};

module.exports = { sequelize, initDB, User, Unidade, Solicitacao };
