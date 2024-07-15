'use strict'

// Cria um endpoint do tipo post
exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};

// Cria um endpoint do tipo put que espera receber um Id passado por a URL
exports.put = (req, res, next) => {
    const id = req.params.id;
    
    res.status(200).send({
        id: id,
        item: req.body
    });
};

// Cria um endpoint do tipo delete
exports.delete = (req, res, next) => {
    res.status(201).send({ 
        message: 'Foi deletado'
    });
};