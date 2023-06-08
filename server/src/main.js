const Express = require('express')
const Server = require('./config/server.json')

const express = Express()
const { sequelize } = require('./database')

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
