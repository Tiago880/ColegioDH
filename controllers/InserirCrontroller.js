const User = require('../models/User')
const express = require('express')
const app = express()
app.use(express.json())

const CadastroController = {
    cadastroAluno: (req, res) => {
    
        const name  = req.body.name
        const email = req.body.email
        const sexo = req.body.sexo
        const idade= req.body.idade
        const cpf= req.body.cpf
    
    
        User.create({name, email, sexo,idade,cpf})
    
        res.json({name,email,sexo,idade,cpf})
    }
}


module.exports = CadastroController