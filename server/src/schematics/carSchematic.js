const Joi = require('joi')

/**
 * Estrutura para criação de um carro
 */
const createSchematic = Joi.object({
    name: Joi.string().required(),
    info: Joi.string().optional(),
    price_day: Joi.number().optional(),
    price_km: Joi.number().optional(),
    stock: Joi.number().optional(),
    image: Joi.string().optional()
})

/**
 * Estrutura para atualização de um carro
 */
const updateSchematic = joi.object({
    name: Joi.string(),
    info: Joi.string(),
    price_day: Joi.number(),
    price_km: Joi.number(),
    stock: Joi.number(),
    image: Joi.string()
}).min(1);

module.exports = {
    createSchematic,
    updateSchematic
}