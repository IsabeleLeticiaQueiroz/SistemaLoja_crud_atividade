// Importando o Sequelize

import Sequelize  from "sequelize";

// Criando os dados de conexão com banco de dados

const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '', 
    database: 'loja_crud',
    timezone: '-03:00'
})

export default connection