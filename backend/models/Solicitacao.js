const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Unidade = require('./Unidade');

const Solicitacao = sequelize.define('Solicitacao', {
  paciente_nome: DataTypes.STRING,
  tipo_leito: DataTypes.STRING,
  justificativa: DataTypes.TEXT,
  status: {
    type: DataTypes.ENUM('pendente', 'aceita', 'recusada', 'exames'),
    defaultValue: 'pendente'
  },
  observacao: DataTypes.TEXT
});

User.hasMany(Solicitacao, { as: 'SolicitacoesEnviadas', foreignKey: 'usuario_id' });
Unidade.hasMany(Solicitacao, { as: 'SolicitacoesOrigem', foreignKey: 'unidade_origem_id' });
Unidade.hasMany(Solicitacao, { as: 'SolicitacoesDestino', foreignKey: 'unidade_destino_id' });

module.exports = Solicitacao;
