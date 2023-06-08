const { create } = require('../controllers/userController')
const { Router } = require('express')

const router = new Router();

router.post('/', create);

module.exports = {
    router
}