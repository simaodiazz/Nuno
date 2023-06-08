const { create } = require('../controllers/userController')
const { Router } = require('express')

const router = new Router();

router.post('/user', create);

module.exports = {
    router
}