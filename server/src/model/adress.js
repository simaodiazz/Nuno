const Sequelize = require('sequelize')
const sequelize = require('../database')

const Adress = sequelize.define({
    street: {
        type: Sequelize.STRING,
        allowNull: false
    }
})