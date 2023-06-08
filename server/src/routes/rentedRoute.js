const { Router } = require('express')
const { create, find, findAll, remove, update } = require('../controllers/rentedController')

const rentedRoute = Router()

rentedRoute.post('/rented', create)
rentedRoute.get('/rented/:id', find)
rentedRoute.get('/rented', findAll)
rentedRoute.delete('/remove/:id', remove)
rentedRoute.put('/remove/:id', remove)