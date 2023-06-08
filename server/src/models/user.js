const { Sequelize, Model, DataTypes, UUID, UUIDV4 } = require('sequelize');
const { sequelize } = require('../database')
const { Address } = require('./address')
const { Bcrypt } = require('bcrypt')

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },

        gender: {
            type: DataTypes.ENUM('Masculino', 'Femenino', 'Desconhecido'),
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        avatar: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'Users'
    }
);

User.beforeCreate()

User.hasMany(Address);

module.exports = { 
    User
};
