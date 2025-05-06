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
app.post('/cadastros', async (req, res) => {
  try {
    const { nome, cpf, dataNascimento, email, senha, tipoConta} = req.body;

    const novaPessoa = await Pessoa.create({ nome, cpf, dataNascimento, email, senha });

    const novaConta = await Conta.create({
      idPessoa: novaPessoa.idPessoa, saldo: 0, 
      limiteSaqueDiario: 1000, flagAtivo: true,
      tipoConta: tipoConta, dataCriacao: new Date()
    })
    res.status(201).json({
      pessoa: novaPessoa,
      conta: novaConta
  });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao cadastrar pessoa', detalhes: error.message });
  }
});

app.post('/transacoes', async(req,res) =>{
  const { idConta, valor, dataTransacao,tipoDeposito } = req.body;

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
    console.log(tipoDeposito,valor)
    if(novaTransacao){
      const conta = await Conta.findOne({where: {idConta}});
      if(!conta){
        return res.status(404).json({error: 'Conta nao encontrada'});
      }
      if(tipoDeposito === 'deposito'){
        saldo_conta = conta.saldo
        total = parseFloat(saldo_conta) + parseFloat(valor)
        console.log(total)
        conta.saldo = total;
        await conta.save();
      }else{
        saldo_conta = conta.saldo
        total = parseFloat(saldo_conta) - parseFloat(valor)
        console.log(total)
        conta.saldo = total;
        await conta.save();
      }

    }

    res.status(201).json(novaTransacao);
  } catch (error) {
    console.error('Erro ao criar transação:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

//buscando do banco de dados
app.post('/login', async (req, res) => {
  const { cpf, senha } = req.body;

  try {
    // Busca o usuário pelo email e senha no banco
    const pessoa = await Pessoa.findOne({ where: { cpf, senha } });
    
    if (pessoa) {
      const conta = await Conta.findOne({where: {idPessoa: pessoa.idPessoa}})
      console.log('pessoa : ',pessoa.idPessoa)
      res.status(200).json({ message: 'Login bem-sucedido', pessoa, conta });
    } else {
      res.status(401).json({ message: 'cpf ou senha incorretos' });
    }
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

app.post('/extrato', async (req, res) => {
  const { idConta } = req.query;

  try {
    let where = {};
    if (idConta) {
      where.idConta = idConta;
    }

    const transacoes = await Transacao.findAll({
      where,
      order: [['dataTransacao', 'DESC']]
    });

    res.json(transacoes);
  } catch (error) {
    console.error("Erro ao buscar transações:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
