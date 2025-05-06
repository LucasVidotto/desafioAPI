const express = require('express');
const router = express.Router();
const Transacao = require('../models/transacao');
const Conta = require('../models/conta');

router.post('/transacoes', async (req, res) => {
  const { idConta, valor, dataTransacao, tipoDeposito } = req.body;

  if (!idConta || !valor || !dataTransacao) {
    return res.status(400).json({ error: "Campos obrigatórios ausentes." });
  }

  try {
    const novaTransacao = await Transacao.create({
      idConta,
      valor,
      dataTransacao,
      tipoDeposito
    });

    const conta = await Conta.findOne({ where: { idConta } });
    if (!conta) {
      return res.status(404).json({ error: 'Conta não encontrada' });
    }

    const saldoAtual = parseFloat(conta.saldo);
    const novoSaldo = tipoDeposito === 'deposito'
      ? saldoAtual + parseFloat(valor)
      : saldoAtual - parseFloat(valor);

    conta.saldo = novoSaldo;
    await conta.save();

    res.status(201).json(novaTransacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor', detalhes: error.message });
  }
});

router.post('/extrato', async (req, res) => {
  const { idConta } = req.body;

  console.log(idConta);
  try {
    const where = idConta ? { idConta } : {};

    const transacoes = await Transacao.findAll({
      where,
      order: [['dataTransacao', 'DESC']]
    });

    res.json(transacoes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar transações', detalhes: error.message });
  }
});

module.exports = router;
