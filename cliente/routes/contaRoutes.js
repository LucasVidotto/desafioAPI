const express = require('express');
const router = express.Router();
const Conta = require('../models/conta');

router.post('/bloqueio', async (req, res) => {
  const { idConta } = req.body;

  try {
    const conta = await Conta.findOne({ where: { idConta } });

    if (conta) {
      conta.flagAtivo = false;
      await conta.save();
      res.status(200).json({ message: 'Conta bloqueada', conta });
    } else {
      res.status(404).json({ error: 'Conta não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor', detalhes: error.message });
  }
});

module.exports = router;
