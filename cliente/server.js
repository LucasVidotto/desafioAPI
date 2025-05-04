const express = require('express');
const bodyParser = require('body-parser');
const Pessoa = require('./models/pessoa');
const sequelize = require('./config/db');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); 

// Cria a tabela automaticamente se ela ainda não existir
sequelize.sync();

// ROTA PARA CADASTRAR UMA PESSOA
app.post('/pessoas', async (req, res) => {
  try {
    const { nome, cpf, dataNascimento, email, senha } = req.body;

    const novaPessoa = await Pessoa.create({ nome, cpf, dataNascimento, email, senha });

    res.status(201).json(novaPessoa);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao cadastrar pessoa', detalhes: error.message });
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
