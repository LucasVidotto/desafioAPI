const express = require('express');
const bodyParser = require('body-parser');
const Pessoa = require('./models/pessoa');
const Conta = require('./models/conta');
const Transacao = require('./models/transacao');
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

app.post('/transacoes', async(req,res) =>{
  try{
    const {idConta, valor, dataTransacao} = req.body;

    const novaTransacao = await Transacao.create({idConta, valor, dataTransacao});
    res.status(201).json(novaTransacao);
  }catch(error){
    res.status(500).json({error: 'Erro de cadastro de transaçao', detalhes: error.message});
  }
})

//buscando do banco de dados
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Busca o usuário pelo email e senha no banco
    const pessoa = await Pessoa.findOne({ where: { email, senha } });

    if (pessoa) {
      res.status(200).json({ message: 'Login bem-sucedido', user: pessoa });
    } else {
      res.status(401).json({ message: 'Email ou senha incorretos' });
    }
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

app.post('/contas', async (req, res) => {
    try {
      const { idPessoa, saldo, limiteSaqueDiario, flagAtivo, tipoConta } = req.body;
  
      // Verifica se a pessoa existe
      const pessoa = await Pessoa.findByPk(idPessoa);
      if (!pessoa) {
        return res.status(404).json({ erro: 'Pessoa não encontrada' });
      }
  
      const novaConta = await Conta.create({
        idPessoa,
        saldo,
        limiteSaqueDiario,
        flagAtivo,
        tipoConta
      });
  
      res.status(201).json(novaConta);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao criar conta', detalhes: error.message });
    }
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
