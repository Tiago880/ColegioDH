const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const User = db.define('User', {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        require: true
    },
    sexo:{
        type: DataTypes.CHAR,
        require: true
    },
    idade:{
        type: DataTypes.NUMBER,
        allowNull: false
    },
    cpf:{
        type: DataTypes.NUMBER,
        allowNull: false
    },
})

module.exports = User