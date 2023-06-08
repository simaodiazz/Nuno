const Sequelize = require('sequelize')
const { sequelize } = require('../database')

const Car = sequelize.define('User', {
    
    id: {
        type: Sequelize.UUID,
        defaultVaule: Sequelize.UUIDV4,
        primaryKey: false
    }
})