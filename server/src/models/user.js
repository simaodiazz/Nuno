const Sequelize = require('sequelize')
const { sequelize } = require('../database')

const User = sequelize.define('User', {
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
}, {
    tableName: 'Users'
})

module.exports = {
    User
}