const { create, remove, update, authenticate, find } = require('../controllers/user.controller')
const { Router } = require('express')

const router = new Router();

router.post('/user', create);
router.delete('/user/:id', remove);
router.put('/user/:id', update);
router.post('/user/authenticate', authenticate);
router.get('/user/:id', find)

module.exports = {
    router
}