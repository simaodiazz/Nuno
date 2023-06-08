const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')
const { Car } = require('./car')

class Rented extends Model {}

Rented.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultVaule: DataTypes.UUIDV4,
            primaryKey: true 
        },

        paymentType: {
            type: DataTypes.ENUM('KM', 'Day'),
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Rented',
        tableName: 'Renteds'
    }
)

Rented.hasOne(Car)

module.exports = {
    Rented
}