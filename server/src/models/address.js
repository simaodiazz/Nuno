const { 
    Sequelize,
    Model,
    DataTypes
} = require('sequelize');

const { 
    sequelize
} = require('../database');

const { 
    User
} = require('./user');

class Address extends Model {}

Address.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },

        street: {
            type: DataTypes.STRING,
            allowNull: false
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false
        },

        state: {
            type: DataTypes.STRING,
            allowNull: false
        },

        country: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Address',
        tableName: 'Addresses'
    }
);

Address.belongsTo(User)

module.exports = {
    Address
};
