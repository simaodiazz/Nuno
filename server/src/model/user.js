const Sequelize = require('sequelize')
const { sequelize } = require('../database')

const User = sequelize.define({
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },

    gender: {
        type: Sequelize.ENUM('Masculino', 'Femenino', 'Desconhecido'),
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    username: {
        type: Sequelize.STRING,
        allowNull: false
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    avatar: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

module.exports = {
    User
}