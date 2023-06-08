const Joi = require('joi')

/**
 * Estrutura para criação de um utilizador
 */
const createSchematic = Joi.object({
    gender: Joi.string().valid('Masculino', 'Feminino', 'Desconhecido').required(),
    email: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    street: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required()
});

/**
 * Estrutura para atualização de um utilizador
 */
const updateSchematic = Joi.object({
    gender: Joi.string().valid('Masculino', 'Feminino', 'Desconhecido'),
    email: Joi.string(),
    username: Joi.string(),
    password: Joi.string(),
    street: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),
    country: Joi.string()
}).min(1);

module.exports = {
    createSchematic,
    updateSchematic
}