const { Rented } = require('../models/rented');
const { createSchematic, updateSchematic } = require('../schematics/rentedSchematic');

const create = async (request, response) => {
    try {
        const { error } = createSchematic.validate(request.body);
        if (error) {
            return response.status(400).json({ error: error.details[0].message });
        }

        const { paymentType, totalPrice, startDate, endDate, status } = req.body;

        const rented = await Rented.create({
            paymentType,
            totalPrice,
            startDate,
            endDate,
            status
        });

        response.json({ rented });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Failed to create rented item' });
    }
};

const update = async (request, response) => {
    try {
        const { id } = request.params;
        const { error } = updateSchematic.validate(request.body);
        if (error) {
            return response.status(400).json({ error: error.details[0].message });
        }

        const { paymentType, totalPrice, startDate, endDate, status } = req.body;

        const rented = await Rented.findByPk(id);

        if (!rented) {
            return response.status(404).json({ error: 'Rented item not found' });
        }

        rented.paymentType = paymentType;
        rented.totalPrice = totalPrice;
        rented.startDate = startDate;
        rented.endDate = endDate;
        rented.status = status;

        await rented.save();

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