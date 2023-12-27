// EXPRESS
    // é um framework do node.js  que facilitam o desenvolvimento de aplicações web e API Rest
    // Roteamento: Permite mapear URL's para requisições

    // primeiro é preciso baixar o express em seu projeto por: npm install express

    const express = require('express');
    // forma de importar o express necessário no começo de cada arquivo que for utilizá-lo.

    // Em seguida você deve instanciar um objeto do tipo express para realizar operações:
    const server = express();
        // e depois atribuir uma porta a ele sempre independente se for localhost ou não:
        server.listen(3000);

        // ao hospedar em um site de hosting, ele identificará sua porta pela variável PORT.
        const PORT = 3000;
        app.listen(PORT);

// exemplo de CRUD (olhar documentação node):

// GET (ler/aquirir)

server.get('/rotaDesejada', (req, res) => {
    // req é de requisição recebida de outra aplicação
    // res é de response que é a resposta enviada para outra aplicação
    res.send('Hello world!');
        // send para enviar dado.
})

// QUERY E ROUTE PARAMS 
    // A diferença fundamental está em como os parâmetros são passados na URL
    // req.query.algo =>  aparecem após um ponto de interrogação (?) na URL, 
        // usado para filtrar/personalizar solicitação de dados, opcionais
        app.get('/rota', (req, res) => {
            const usuario = req.query.usuario;
            const nome = req.query.nome;
            // Restante do código...
          });

    // req.params.algo => são incorporados à própria rota, usados para identificar recursos, obrigatórios
        app.get('/rota/:usuario/:nome', (req, res) => { // declarados após ':' 
            const usuario = req.params.usuario;
            const nome = req.params.nome;
        });


