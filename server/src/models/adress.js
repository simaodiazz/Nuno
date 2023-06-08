const Sequelize = require('sequelize')
const sequelize = require('../database')

const Adress = sequelize.define({
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: false
    },

    street: {
        type: Sequelize.STRING,
        allowNull: false
    },

    city: {
        type: Sequelize.STRING,
        allowNull: false
    },

    state: {
        type: Sequelize.STRING,
        allowNull: false
    },

    country: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = {
    Adress
}