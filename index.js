import express from 'express'

const app = express()

import connection from './config/sequelize-config.js'

import ClientesController from "./controllers/ClientesController.js" 
import ProdutosController from "./controllers/ProdutosController.js" 
import PedidosController from "./controllers/PedidosController.js" 


app.use(express.urlencoded({extended: false}))

connection.authenticate().then(() => {
    console.log ("Conexão com o banco de dados feita com sucesso!")
}).catch((error) => {
    console.log(error)
})

connection.query(`create database if not exists loja;`).then(() => {
    console.log("O banco de dados está criado.")
}).catch((error) => {
    console.log(error)
})

app.set('view engine', 'ejs')

app.use(express.static('public'))

//rotas Controllers
app.use("/", ClientesController)
app.use("/", ProdutosController)
app.use("/", PedidosController)

//ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})

//SERVIDOR NA PORTA 8080
app.listen(8080,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})