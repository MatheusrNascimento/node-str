'use strict' // Comando para adicionar reclamacao de comandos fora do padrão no js

//Importa o express para o arquivo
const express = require('express');
// Cria uma aplicação express
const app = express();
// Cria uma variavel e insere os recursos para configuração de rotas da API
const router = express.Router();

// Cria um endpoint do tipo get com o caminho de /
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Minha primeira API em node KeK",
        version: "0.0.1"
    });
});
app.use('/', route);

module.exports = app;