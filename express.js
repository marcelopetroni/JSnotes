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

