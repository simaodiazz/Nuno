const { create, remove, update, authenticate } = require('../controllers/userController')
const { Router } = require('express')

const router = new Router();

router.post('/user', create);
router.post('/user/:id', remove);
router.post('/user/:id', update);
router.post('/user', authenticate);

module.exports = {
    router
}