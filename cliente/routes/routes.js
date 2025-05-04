const express = require('express');
const { createPessoa } = require('../controllers/pessoaController');
const { createConta } = require('../controllers/contaController');

const router = express.Router();

router.post('/pessoa', createPessoa);


router.post('/conta', createConta);

module.exports = router;
