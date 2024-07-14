'use strict' // Comando para adicionar reclamacao de comandos fora do padrão no js

//Importa o express para o arquivo
const express = require('express');
// Cria uma variavel e insere os recursos para configuração de rotas da API
const bodyparser = require('body-parser');
// Cria uma aplicação express
const app = express();
// Cria uma variavel e importa o pacote body-parser
const router = express.Router();

// Carregar as rotas
const indexRoute = require('./routes/index-route');
const productRoutes = require('./routes/product-route');

// Adiciona um middleware que usa o body-parser para tratar todas as requisiçoes que chegarem na API
app.use(bodyparser.json());
// Adiciona um middleware que adiciona codificação de URL ao body-parser
app.use(bodyparser.urlencoded({ extended: false}));




// Adiciona um Middleware que expõem o endpoint ~Health~ com o caminho indicando o caminho '/' para acessalo
app.use('/', indexRoute);
// Adiciona um Middleware que expõem todos os endpoints de product
app.use('/products', productRoutes)

module.exports = app;