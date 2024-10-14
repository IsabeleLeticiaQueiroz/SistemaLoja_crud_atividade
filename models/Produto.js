import Sequelize from "sequelize"

import connection from "../config/sequelize-config.js"

const Produto = connection.define('produtos', {
    id: {
        type: Sequelize.INTEGER,       
        allowNull: false,              
        primaryKey: true,              
        autoIncrement: true,           
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },

    preco:{
        type: Sequelize.STRING,
        allowNull: false
    },

    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Produto.sync({force: false})

export default Produto