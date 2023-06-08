const Express = require('express')
const Server = require('./config/server.json')

const express = Express()
const { sequelize } = require('./database')
const { userRoute } = require('./routes/user.route')

/**
 * Implementação dos middlewares de segurança
 */
const helmet = require('helmet')
const cors = require('cors')
const rateLimit = require('express-rate-limit');

express.use(helmet())
express.use(cors())
express.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // número máximo de solicitações permitidas por IP dentro do intervalo de tempo
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
