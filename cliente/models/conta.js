const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Pessoa = require('./pessoa');

const Conta = sequelize.define('Conta', {
  idConta: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  idPessoa:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Pessoa,
      key: 'idPessoa'
    }
  },
  saldo: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0
  },
  limiteSaqueDiario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  flagAtivo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  tipoConta: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dataCriacao: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'tbl_conta',
  timestamps: false
});

// RELAÇÃO: Uma Conta pertence a uma Pessoa
Conta.belongsTo(Pessoa, {
  foreignKey: 'idPessoa',
  as: 'pessoa'
});

Pessoa.hasMany(Conta, {
  foreignKey: 'idPessoa',
  as: 'contas'
});

module.exports = Conta;