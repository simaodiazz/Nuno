const Joi = require('joi');

const createSchematic = Joi.object({
    paymentType: Joi.string().valid('KM', 'Day').required(),
    totalPrice: Joi.number().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    status: Joi.string().valid('Pendente', 'Ativo', 'Concluido', 'Cancelado', 'Atrasado', 'Em análise', 'Não especificado').default('Não especificado')
});

const updateSchematic = Joi.object({
    paymentType: Joi.string().valid('KM', 'Day'),
    totalPrice: Joi.number(),
    startDate: Joi.date(),
    endDate: Joi.date(),
    status: Joi.string().valid('Pendente', 'Ativo', 'Concluido', 'Cancelado', 'Atrasado', 'Em análise', 'Não especificado')
});

module.exports = {
    createSchematic,
    updateSchematic
};
