const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Pessoa = sequelize.define('Pessoa', {
  idPessoa: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  dataNascimento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha:{
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'tbl_pessoa',
  timestamps: false
});

module.exports = Pessoa;
