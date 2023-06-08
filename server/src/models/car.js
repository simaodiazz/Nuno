const Sequelize = require('sequelize')
const { sequelize } = require('../database')

const Car = sequelize.define('User', {
    
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: false
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    price: {
        type: Sequelize.STRING,
        allowNull: false
    },

    info: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

module.exports = {
    Car
}