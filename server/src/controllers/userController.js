const { User } = require('../models/user');
const JWT = require('jsonwebtoken');
const { createSchematic, updateSchematic } = require('../schematic/userSchematic')

/**
 * 
 */
const create = async (request, response) => {
    try {
        const { error } = createSchematic.validate(request.body);
        if (error) {
            return response.status(400).json({ error: error.details[0].message });
        }
  
        const { gender, email, username, password, street, city, state, country } = request.body;

        const user = await User.create(
            { 
                gender, 
                email, 
                username, 
                password,
                street,
                city,
                state,
                country
            }
        );
  
        const token = JWT.sign({ userId: user.id }, 'ABsjbgaKLÇWbgJsbAMskbçGAPWUÇ', { expiresIn: '1h' });
  
        response.json({ user, token });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Ocorreu um erro ao tentar criar um utilizador' });
    }
};

const find = async (request, response) => {
    const { id } = request.params;

    const user = await User.findByPk(id);

    if (!user) {
        return response.status(404).json({ error: 'Utilizador não encontrado' });
    }

    const { gender, email, username } = user;

    response.json({ gender, email, username });
};

const findAll = async(request, response) => {
    
    const users = await User.findAll({
        attributes: { exclude: ['password', 'street', 'city', 'state', 'country'] }
    });  

    response.json(users)
}

const update = async (request, response) => {
    try {
        const { id } = request.params;
        const { error } = updateSchematic.validate(request.body);
        if (error) {
            return response.status(400).json({ error: error.details[0].message });
        }

        const { gender, email, username, password, street, city, state, country } = request.body;

        const user = await User.findByPk(id);

        if (!user) {
            return response.status(404).json({ error: 'Utilizador não encontrado' });
        }

        if (gender) user.gender = gender;
        if (email) user.email = email;
        if (username) user.username = username;
        if (password) user.password = password;
        if (street) user.street = street;
        if (city) user.city = city;
        if (state) user.state = state;
        if (country) user.country = country;

        await user.save();

        response.json(user);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Ocorreu um erro ao atualizar o utilizador' });
    }
};

const remove = async (request, response) => {
    try {
        const { id } = request.params;

        const user = await User.findByPk(id);

        if (!user) {
            return response.status(404).json({ error: 'Usuário não encontrado' });
        }

        await user.destroy();

        response.json({ message: 'Usuário removido com sucesso' });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Ocorreu um erro ao remover o usuário' });
    }
};

const authenticate = async (request, response) => {
    try {
        const { username, password } = request.body;
  
        const user = await User.findOne({ where: { username } });
  
        if (!user) {
            return response.status(401).json({ error: 'Credenciais inválidas' });
        }
  
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (!passwordMatch) {
            return response.status(401).json({ error: 'Credenciais inválidas' });
        }

        const token = jwt.sign({ userId: user.id }, 'user_cookie', { expiresIn: '1h' });
  
        response.json({ token });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Ocorreu um erro ao autenticar o usuário' });
    }
};

module.exports = {
    create,
    update,
    remove,
    find,
    findAll,
    authenticate
};
