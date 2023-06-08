const Router = require('express')
const { create, find, findAll, remove, update } = require('../controllers/carController')

const carRoute = Router()

carRoute.post('/car', create)
carRoute.get('/car/:id', find)
carRoute.get('/car', findAll)
carRoute.delete('/car/:id', remove)
carRoute.put('/car/:id', update)

module.exports = {
    carRoute
}
