const express = require('express')
const app = express()
const routes = require('../routes/rotas')
const conn = require('../db/conn')

const User = require('../models/User')

app.use(express.json())
app.use(routes);




conn.sync().then(()=>{
    app.listen(3000, function(){
        console.log("server is running")
    })    
}).catch((err) => console.log(err))