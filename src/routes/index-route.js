'use strict'

const express = require('express');
const router = express.Router();

// Cria um endpoint do tipo get
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Api rodando...",
        version: "0.0.1"
    });
});

module.exports = router;