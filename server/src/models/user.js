const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database');
const Bcrypt = require('bcrypt');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
    
        gender: {
            type: DataTypes.ENUM('Masculino', 'Femenino', 'Binário', 'Gay', 'Lésbico', 'Desconhecido...'),
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

User.beforeCreate(async (user) => {
    try {
        const hashedPassword = await Bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
    } catch (error) {
        console.log('Erro ao gerar o hash da senha.\n', error);
    }
});

User.prototype.comparePassword = async function (password) {
    return Bcrypt.compare(password, this.password);
};

module.exports = {
    User
};
