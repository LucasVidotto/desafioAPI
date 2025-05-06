const express = require('express');
const router = express.Router();
const Pessoa = require('../models/pessoa');
const Conta = require('../models/conta');
const validarCpf = require('../validators/validarCpf');

router.post('/cadastros', async (req, res) => {
  try {
    const { nome, cpf, dataNascimento, email, senha, tipoConta } = req.body;

    if(!validarCpf(cpf)){
      return res.json(400).json({erro: 'CPF inválido. Deve conter 11 números'})
    }
    const novaPessoa = await Pessoa.create({ nome, cpf, dataNascimento, email, senha });
    const novaConta = await Conta.create({
      idPessoa: novaPessoa.idPessoa,
      saldo: 0,
      limiteSaqueDiario: 1000,
      flagAtivo: true,
      tipoConta,
      dataCriacao: new Date()
    });

    res.status(201).json({ pessoa: novaPessoa, conta: novaConta });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao cadastrar pessoa', detalhes: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { cpf, senha } = req.body;

  try {
    const pessoa = await Pessoa.findOne({ where: { cpf, senha } });
    if (pessoa) {
      const conta = await Conta.findOne({ where: { idPessoa: pessoa.idPessoa } });
      res.status(200).json({ message: 'Login bem-sucedido', pessoa, conta });
    } else {
      res.status(401).json({ message: 'CPF ou senha incorretos' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor', detalhes: error.message });
  }
});

module.exports = router;
