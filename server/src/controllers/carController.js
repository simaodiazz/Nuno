/**
 * Esta expressão quer dizer que eu vou buscar a varíavel Car a classe ../models/car
 * Igualmente para baixo só que de outra forma.
 */
const { Car } = require('../models/car');
const { createSchematic, updateSchematic } = require('../schematics/carSchematic')

/**
 * Metodo POST para criar um novo carro com base em createSchematic
 */
const create = async (request, response) => {
    try {

        // Validando se o corpo da requesição segue todas as regras
        const { error } = createSchematic.validate(request.body);

        // Caso o body não tenha todos os parametros precisos
        if (error) {
            return response.status(400).json({ error: error.details[0].message });
        }

        // Adquirindo todos os parametros de body
        const { name, info, price_day, price_km, stock, image } = request.body;

        // Cria o novo carro no banco de dados
        const car = await Car.create({
            name,
            info,
            price_day,
            price_km,
            stock,
            image
        });

        // Enviando o JSON do car como resposta
        response.json(car);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao criar um novo carro.' });
    }
};

/**
 * Método GET para encontrar todos os carros
 */
const findAll = async (request, response) => {
    try {
    
        // Adquirindo todos os carros
        const cars = await Car.findAll();
        
        // Verificando se cars não existe
        if (!cars) {
            response.status(500).json({ error: 'Ocorreu um erro ao obter os carros.' }); 
        }

        // Enviando o código JSON de todos os carros
        response.json(cars);

    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Ocorreu um erro ao obter os carros.' });
    }
};

/**
 * Método GET para encontrar um carro em específico atravez do id
 */
const find = async (request, response) => {
  try {

    // Adquirindo os parametros da definidos na rota
    const { id } = request.params;

    // Encontra o carro pelo ID no banco de dados
    const car = await Car.findByPk(id);

    // Virificando se o carro não existe
    if (!car) {
      return res.status(404).json({ error: 'Carro não encontrado.' });
    }

    // Enviando o carro como resposta
    res.json(car);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao obter o carro.' });
  }
};

/**
 * Método PUT para atualizar um carro em específico atravez de um id e um corpo
 */
const update = async (request, response) => {
  try {

    // Validando se o corpo da requesição segue todas as regras
    const { error } = updateSchematic.validate(request.body);

    // Caso body não tenha todos os parametros precisos
    if (error) {
        return response.status(400).json({ error: error.details[0].message });
    }

    // Adquirindo parametros e corpo
    const { id } = req.params;
    const { name, info, price_day, price_km, stock, image } = request.body;

    // Encontra o carro pelo ID no banco de dados
    const car = await Car.findByPk(id);

    // Verificando se o carro não existe
    if (!car) {
      return response.status(404).json({ error: 'Carro não encontrado.' });
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

    response.json(car);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Ocorreu um erro ao atualizar o carro.' });
  }
};

const remove = async (request, response) => {
    try {
        // Adquirindo todos os parametros
        const { id } = request.params;

        // Encontra o carro pelo ID no banco de dados
        const car = await Car.findByPk(id);

        // Verificando se o carro não existe
        if (!car) {
            return response.status(404).json({ error: 'Carro não encontrado.' });
        }

        // Remove o carro do banco de dados
        await car.destroy();

        // Enviando a mensagem que o carro foi removido com sucesso
        response.json({ message: 'Carro removido com sucesso.' });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Ocorreu um erro ao remover o carro.' });
    }
};

module.exports = {
  create,
  findAll,
  find,
  update,
  remove
};
