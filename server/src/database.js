const Sequelize = require('sequelize')
const Database = require('./config/database.json')

const sequelize = new Sequelize(
    Database.database,
    Database.username,
    Database.password,
    {
        dialect: Database.dialect,
        host: Database.host
    }
)

module.exports = {
    sequelize
}
