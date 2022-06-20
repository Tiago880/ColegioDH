const express = require('express');

const routes = express.Router();
const CadastroController = require('../controllers/InserirCrontroller')


routes.get('/', (req, res) => {
    res.send("Hellow World")
})


routes.post('/pessoa', CadastroController.cadastroAluno)


module.exports = routes