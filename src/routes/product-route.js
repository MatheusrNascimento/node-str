'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

// Configura a rota de acesso para cada endpoint criado na controller
router.post('/', controller.post);
router.put('/:id', controller.put)
router.delete('/:id', controller.delete);


module.exports = router;