const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')
const { Car } = require('./car')
const { User } = require('./user')

class Rented extends Model {}

Rented.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true 
        },

        paymentType: {
            type: DataTypes.ENUM('Kilometro', 'Dia', 'Não especifícado'),
            allowNull: false
        },

        totalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },

        startDate: {
            type: DataTypes.BIGINT,
            defaultValue: DataTypes.NOW
        },

        endDate: {
            type: DataTypes.BIGINT,
            defaultValue: DataTypes.NOW
        },

        status: {
            type: DataTypes.ENUM('Pendente', 'Ativo', 'Concluido', 'Cancelado', 'Atrasado', 'Em análise', 'Não especifícado'),
            defaultValue: 'Não específicado',
            set(value) {
                if (!value) {
                    this.setDataValue('status', 'Não específicado')
                } else {
                    this.setDataValue('status', value)
                }
            }
        }
    }, {
        sequelize,
        modelName: 'Rented',
        tableName: 'Renteds'
    }
)

Rented.hasOne(Car)
Rented.hasOne(User)

module.exports = {
    Rented
}