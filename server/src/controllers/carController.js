const { Car } = require('../models/car');
const { createSchematic, updateSchematic } = require('../models/car')

const create = async (req, res) => {
    try {
        const { error } = createSchematic.validate(request.body);

        if (error) {
            return response.status(400).json({ error: error.details[0].message });
        }

        const { name, info, price_day, price_km, stock, image } = req.body;

        // Cria o novo carro no banco de dados
        const car = await Car.create({
            name,
            info,
            price_day,
            price_km,
            stock,
            image
        });

        res.status(201).json(car);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao criar um novo carro.' });
    }
};

const findAll = async (req, res) => {
  try {
    // Obtém todos os carros do banco de dados
    const cars = await Car.findAll();

    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao obter os carros.' });
  }
};

// Rota: GET /cars/:id
// Retorna um carro pelo ID
const find = async (req, res) => {
  try {
    const { id } = req.params;

    // Encontra o carro pelo ID no banco de dados
    const car = await Car.findByPk(id);

    if (!car) {
      return res.status(404).json({ error: 'Carro não encontrado.' });
    }

    res.json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao obter o carro.' });
  }
};

// Rota: PUT /cars/:id
// Atualiza um carro pelo ID
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, info, price_day, price_km, stock, image } = req.body;

    // Encontra o carro pelo ID no banco de dados
    const car = await Car.findByPk(id);

    if (!car) {
      return res.status(404).json({ error: 'Carro não encontrado.' });
    }

    // Atualiza os campos do carro
    car.name = name;
    car.info = info;
    car.price_day = price_day;
    car.price_km = price_km;
    car.stock = stock;
    car.image = image;

    // Salva as alterações no banco de dados
    await car.save();

    res.json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar o carro.' });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    // Encontra o carro pelo ID no banco de dados
    const car = await Car.findByPk(id);

    if (!car) {
      return res.status(404).json({ error: 'Carro não encontrado.' });
    }

    // Remove o carro do banco de dados
    await car.destroy();

    res.json({ message: 'Carro removido com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao remover o carro.' });
  }
};

module.exports = {
  create,
  findAll,
  find,
  update,
  remove
};
