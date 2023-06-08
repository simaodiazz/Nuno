const { User } = require('../models/user')
const JWT = require('jsonwebtoken')

const create = async(request, response) => {
 
    try {
        const { gender, email, username, password } = request.body

        const user = await User.create({
            gender,
            email,
            username,
            password
        })
    
        const token = JWT.sign({ userId: user.id }, 'seuSegredoJWT', { expiresIn: '1h' });

        response.json({ user, token });

    } catch (error) {
        console.log(error)
        response.status(404).json(
            { 
                error: 'Ocorreu um erro ao tentar criar um utilizador' 
            }
        );
    }
}

const update = async (request, response) => {
    try {

      const { id } = request.params;
      const { gender, email, username, password } = request.body;
  
      const user = await User.findByPk(id);
  
      if (!user) {
        return response.status(404).json(
            { 
                error: 'Utilizador não encontrado' 
            }
        );
      }
  
      user.gender = gender;
      user.email = email;
      user.username = username;
      user.password = password;
  
      await user.save();
  
      response.json(user);
    
    } catch (error) {

        console.error(error);
        response.status(500).json(
            { 
                error: 'Ocorreu um erro ao atualizar o utilizador' 
            }
        );
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
  
        response.json(
            { 
                message: 'Usuário removido com sucesso' 
            }
        );
    
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Ocorreu um erro ao remover o usuário' });
    }
};

const authenticate = async (request, response) => {
    try {
        const { username, password } = request.body;
  
        // Verifique as credenciais do utilizador (pode ser uma lógica mais complexa)
        const user = await User.findOne({ where: { username, password } });
  
        if (!user) {
            return response.status(401).json({ error: 'Credenciais inválidas' });
        }
  
        // Gere o token JWT com base nas informações do usuário
        const token = JWT.sign({ userId: user.id }, 'user_cookie', { expiresIn: '1h' });
  
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
    authenticate
}