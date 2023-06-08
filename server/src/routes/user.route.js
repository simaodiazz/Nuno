const { create, remove, update, authenticate, find, findAll } = require('../controllers/user.controller')
const { Router } = require('express')

const userRoute = new Router();

userRoute.post('/user', create);
userRoute.delete('/user/:id', remove);
userRoute.put('/user/:id', update);
userRoute.post('/user/authenticate', authenticate);
userRoute.get('/user/:id', find)
userRoute.get('/user', findAll)

module.exports = {
    userRoute
}