/**
 * Esta expressão quer dizer que eu vou buscar a varíavel Rented a classe ../models/rented
 * Igualmente para baixo só que de outra forma.
 */
const { Rented } = require('../models/rented');
const { createSchematic, updateSchematic } = require('../schematics/rentedSchematic');

/**
 * Método POST para adicionar um novo carro arrendado
 */
const create = async (request, response) => {

    try {
        
        // Validando se o corpo da requesição segue todas as regras
        const { error } = createSchematic.validate(request.body);
        
        // Verificando se a validação deu algum erro
        if (error) {
            return response.status(400).json({ error: error.details[0].message });
        }

        // Adquirindo todos os parametros do corpo
        const { paymentType, totalPrice, startDate, endDate, status } = req.body;

        // Criando o carro arrendado no modelo/tabela
        const rented = await Rented.create({
            paymentType,
            totalPrice,
            startDate,
            endDate,
            status
        });

        // Enviando o código rented como resposta 
        response.json({ rented });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Failed to create rented item' });
    }
};

/**
 * Método PUT para atualizar algum carro arrendado
 */
const update = async (request, response) => {

    try {
        
        // Adquirindo o id do carro arrendado nos parametros
        const { id } = request.params;

        // Validando se o corpo da requesição segue todas as regras
        const { error } = updateSchematic.validate(request.body);

        // Verificando se deu algum na validação do corpo
        if (error) {
            return response.status(400).json({ error: error.details[0].message });
        }

        // Adquirindo os parametros do corpo
        const { paymentType, totalPrice, startDate, endDate, status } = req.body;

        // Adquirindo o carro arrendado através do seu id
        const rented = await Rented.findByPk(id);

        // Verificando se o carro não existe
        if (!rented) {
            return response.status(404).json({ error: 'Rented item not found' });
        }

        // Atualização de todas as colunas
        rented.paymentType = paymentType;
        rented.totalPrice = totalPrice;
        rented.startDate = startDate;
        rented.endDate = endDate;
        rented.status = status;

        // Método para salvar o modelo/tabela
        await rented.save();

        // Envio da mensagem caso o carro arrendado seja 
        response.json({ rented });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Failed to update rented item' });
    }
};

const find = async (req, response) => {
    try {
        const { id } = req.params;

        const rented = await Rented.findByPk(id);

        if (!rented) {
            return response.status(404).json({ error: 'Rented item not found' });
        }

        response.json({ rented });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Failed to get rented item' });
    }
};

const findAll = async (request, response) => {
    try {
        const renteds = await Rented.findAll();

        response.json({ renteds });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Failed to get rented items' });
    }
};

const remove = async (request, response) => {
    try {
        const { id } = request.params;

        const rented = await Rented.findByPk(id);

        if (!rented) {
            return response.status(404).json({ error: 'Rented item not found' });
        }

        await rented.destroy();

        response.json({ message: 'Rented item deleted successfully' });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Failed to delete rented item' });
    }
};

module.exports = {
    create,
    update,
    find,
    findAll,
    remove
};