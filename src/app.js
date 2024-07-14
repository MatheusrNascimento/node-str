'use strict' // Comando para adicionar reclamacao de comandos fora do padrão no js

//Importa o express para o arquivo
const express = require('express');
// Cria uma variavel e insere os recursos para configuração de rotas da API
const bodyparser = require('body-parser');
// Cria uma aplicação express
const app = express();
// Cria uma variavel e importa o pacote body-parser
const router = express.Router();

// Adiciona um middleware que usa o body-parser para tratar todas as requisiçoes que chegarem na API
app.use(bodyparser.json());
// Adiciona um middleware que adiciona codificação de URL ao body-parser
app.use(bodyparser.urlencoded({ extended: false}));

// Cria um endpoint do tipo get
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Api rodando...",
        version: "0.0.1"
    });
});

// Cria um endpoint do tipo post
const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

// Cria um endpoint do tipo put que espera receber um Id passado por a URL
const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;

    req.status(200).send({
        id: id,
        item: req.body
    });
});

// Cria um endpoint do tipo delete
const del = router.delete('/:id', (req, res, next) => {
    res.status(201).send({ 
        message: 'Foi deletado'
    });
});

// Adiciona um Middleware que expõem o endpoint ~route~ com o caminho indicando o caminho '/' para acessalo
app.use('/', route);
// Adiciona um Middleware que expõem o endpoint ~create~ com o caminho indicando o caminho '/products' para acessalo
app.use('/products', create)
// Adiciona um Middleware que expõem o endpoint ~put~ com o caminho indicando o caminho '/products/:id' para acessalo
app.use('/products', put);
// Adiciona um Middleware que expõem o endpoint ~del~ com o caminho indicando o caminho '/products/:id' para acessalo
app.use('/products', del);

module.exports = app;