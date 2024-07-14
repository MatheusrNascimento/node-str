'use strict'

const express = require('express');
const router = express.Router();

// Cria um endpoint do tipo post
router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

// Cria um endpoint do tipo put que espera receber um Id passado por a URL
router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    
    res.status(200).send({
        id: id,
        item: req.body
    });
});

// Cria um endpoint do tipo delete
router.delete('/:id', (req, res, next) => {
    res.status(201).send({ 
        message: 'Foi deletado'
    });
});

module.exports = router;