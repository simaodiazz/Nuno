const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')

/**
 * Crio uma classe que extende a classe Model.
 * https://sequelize.org/api/v6/class/src/model.js~model
 */
class Car extends Model {}

/**
 * Este método vai iniciar o modelo criando uma tabela com todos os parametros a baixo.
 */
Car.init({

    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    info: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "Descrição em construção"
    },

    price_day: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },

    price_km: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },

    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Car',
    tableName: 'Cars'
})

module.exports = {
    Car
}