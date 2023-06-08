const Express = require('express')
const Server = require('./config/server.json')

const express = Express()
const { sequelize } = require('./database')
const { userRoute } = require('./routes/userRoute')

const helmet = require('helmet')
const cors = require('cors')
const rateLimit = require('express-rate-limit');

/**
 * Implementação dos middlewares de segurança
 */
express.use(helmet())
express.use(cors())

/**
 * Número máximo de solicitações permitidas pelo mesmo IP durante 15 minutos
 */
express.use(rateLimit({
    windowMs: 900000,
    max: 100,
}));

// Middleware para que todas as request e response sejam interpretadas com JSON
express.use(Express.json())

// Conectando ao banco de dados e caso conecte ao banco de dados liga o servidor express
sequelize
    .sync()
    .then(() => {
        express.listen(Server.port, () => {
            console.log(`Express Server ligado na porta ${Server.port}`)
        })
    })
    .catch((error) => {
        console.log(error)
    }
)

// Usando a rota dos user
express.use('/api', userRoute)
