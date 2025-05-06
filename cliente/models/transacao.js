const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Conta = require('./conta');

const Transacao = sequelize.define('Transacao', {
    idTransacao: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idConta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: Conta,
        key: 'idConta'
        }
    },
    valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    dataTransacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    tipoDeposito:{
        type: DataTypes.STRING,
        allowNull: false,
    }
    }, {
        tableName: 'tbl_transacao',
        timestamps: false
});

//Relacionamento: Uma Transacao pertence a uma Conta
Transacao.belongsTo(Conta, {
    foreignKey: 'idConta',
    as: 'conta'
});

// RELACIONAMENTO: Uma Conta pode ter muitas Transações
Conta.hasMany(Transacao, {
    foreignKey: 'idConta',
    as: 'transacoes'
});

module.exports = Transacao;