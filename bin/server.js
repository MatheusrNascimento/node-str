'use strict'

const app = require('../src/app');

// Importando os pacotes para baixados para serem usados na API.  
// OBS: tudo que foi coloca somente entre '(aspas simples) na funcao require ela vai busscar direto no arquivo dos modules
const http = require('http');
const debug = require('debug')('nodestr:server');

// Cria uma variavel inserindo uma porta de acesso a api informada por as variaveis de embiente ou por um valor padrão
const port = normalizePort(process.env.PORT || 3000);
// Insere a configuração da porta na applicação express intanciada
app.set('port', port);


// Cria um servidor http que recebe a applicação(app) como callback fazendo com que a aplicação possa ser acessada ao fazer requisições par ao servidor http
const server = http.createServer(app);


server.listen(port);
// chama a função onError para mappear o tipo do erro que ocorreu na aplicação!
server.on('error', onError);
// Chama o metodo que inicia o debug da API
server.on('listening', onListening);
console.log('Api esta rodando na porta: ' + port);

// Funcão criada apenas para verificar se a porta que esta sendo buscada nas variaveis de ambiente é uma porta valida
function normalizePort(val){
    const port = parseInt(val, 10);
    
    if(isNaN(port)){
        return val;
    }
    else if( port >= 0){
        return port;
    }

    return false;
}

function onError(error) {
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

        switch (error.code) {
            case 'EACESS' :
                console.log(bind + ' Requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE' :
                console.log(bind + ' is already un use');
                process.exit(1);
                break;
            default:
                throw error;
        }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' 
    ? 'pipe ' + addr 
    : 'port ' + addr.port;
    debug('Listening on ' + bind);
}