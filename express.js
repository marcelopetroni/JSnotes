// EXPRESS
    // é um framework do node.js  que facilitam o desenvolvimento de aplicações web e API Rest
    // Roteamento: Permite mapear URL's para requisições

    // Utilize em conjunto a biblioteca nodemon que reinicia automaticamente o servidor sempre 
    // que detecta uma alteração no código. escreva no terminal: npm install -g nodemon
    // snippet para inicializar biblioteca:
    /* em package.json do projeto escreva: "scripts": {
                                                "dev": "nodemon index.js" 
                                                // assim podes usar npm run dev qu nem no front-end para iniciar
                                            }
    */
    // PROJETO NODE EXPRESS
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

    // QUER CONECTAR BACK-END COM BANCO DE DADOS? veja um exemplo pelo MySQL:
        // primeiro importe o banco, nesse caso o MySQL:
        const mysql = require("mysql");

        // faça a ponte por:
        const db = mysql.createPool({ // Quando uma aplicação precisa se conectar ao banco de dados, 
            host: "localhost",        // ela obtém uma conexão do pool.
            user: "root",
            password: "escolheUma",
            database: "NomeDaTabela"
        })

// QUERY 
    // Query essencialmente usado para consultas CRUD a partir de um código SQL.
    // veja:
        coneccaoBanco.query(sql, (error, results) => { // a conecção é o db declarado acima.
        if (error) {                                   // veja em POST como é utilizado isso.
          console.error(error);
        }})
        // se houver um erro, ele será exibido, se não, a consulta foi realizada com sucesso.
        // o uso de query é importante para segurança, pois define dentro de seu escopo a instrução sql a ser
        // executada, e nenhuma outra instução maliciosa estaria sendo considerada além daquela definida por nós.

// Params (query e route):
    // São usadas para atribuir rotas personalizadas.
        // A diferença fundamental está em como os parâmetros são passados na URL.

        // req.query.algo =>  aparecem após um ponto de interrogação (?) na URL, 
        // usado para filtrar/personalizar solicitação de dados, opcionais
        app.get('/rota', (req, res) => {
            const { atributo } = req.query; // req.query.algo ou a constante entre {} para não repetir duas vezes.

            const INSTRUCAOSQL = 'SELECT * FROM posts WHERE id = ?';
            bd.query(INSTRUCAOSQL, (atributo], (error, results) => {
                if (error) {
                    console.error(error);
                }
            })
        });
          // Exemplo de URL: http://exemplo.com/rota?usuario=valor1&nome=valor2

        // req.params.algo => são incorporados à própria rota, usados para identificar recursos, obrigatórios
        app.get('/rota/:usuario/:nome', (req, res) => { // declarados após ':' 
            const usuario = req.params.usuario;
        });
        // Exemplo de URL: http://exemplo.com/rota/usuario

                                            
// EXEMPLO DE CRUD (create, read, update, delete):

    // GET (ler/aquirir):
    server.get('/rotaDesejada', (req, res) => {
        // req é de requisição recebida de outra aplicação
        // res é de response que é a resposta enviada para outra aplicação
        res.send('Hello world!');
            // send para enviar dado.
    })

    // POST (enviar dados):
    server.post('/rotaDesejada', (req, res)=> {
        const {nome} = req.body;
        const {email} = req.body;
        const {numero} = req.body;
        // isso permite que você extraia propriedades específicas de um objeto e as atribua a variáveis locais.
        // o front-end envia esses atributos por seu método POST e é possível inserí-lo a partir do SQL no banco:

        let SQL = "'INSERT INTO NomeDaTabela (nome, email, numero) VALUES (?, ?, ?)';"
        // db.query para fazer uma solicitação ao banco:
        // (primeiro o codigo sql, [parêmetros], depois a função (error, results))
        db.query(SQL, [nome, email, numero], (error, results) => {
            if(error) {
                res.send(error); // envia para o front-end a mensagem de erro se a solicitação não deu certo.
            }
            // se não, é concluída com sucesso.
        })
    })
    // PULL E DELETE, o mesmo se aplica a eles, só muda a declaração 'server.algo' e o código SQL:
    server.pull('/rotaDesejada', (req, res)=> {
        const {idDaPagina} = req.params;

        const INSTRUCAOSQL = 'SELECT * FROM posts WHERE id = ?';
        db.query(INSTRUCAOSQL, [idDaPagina], (error, results) => {
            // algo a se fazer aqui
        });
    })
    server.delete('/rotaDesejada', (req, res)=> {
        const {idDaPagina} = req.params;

        const INSTRUCAOSQL = 'DELETE FROM posts WHERE id = ?';
        db.query(INSTRUCAOSQL, [idDaPagina], (error, results) => {
            // algo a se fazer aqui
        });
    })

// MIDDLEWARES
    /* Middleware em Express.js é uma função que possui acesso ao objeto de solicitação (req), 
    o objeto de resposta (res), e a próxima função no ciclo de vida do aplicativo (next)

        ele funciona como um intermédiario, uma função fora de uma rota capaz de manipular
        operações entre requisições. */

    // Casos comuns que são usados middlewares:
        // Autenticação, registro de solicitações, manipulação de cookies, etc, você realiza uma operação antes
        // que a solicitalçai atinja a rota especificada para ela. veja:

    // Esse exemplo de middleware verifica se o front-end está solicitando a atualização do atributo correto

        const Checagem = (req, res) => {
            // verifica se na requisição vinda do front-end apresenta o atributo name.
            if(!req.body.name) {
                return req.status(400).json("Nome é obrigatório/Nome inválido/Nome não fornecido.")
            }
            // else: continuar solicitações
            return next();
        }

        server.put('/rota', Checagem /* vai passar aqui */, (req, res) => {
            const {name} = req.params;
            const SQL = 'SELECT * FROM posts WHERE id = ?';

            db.query(SQL, [name], (error, results) => {
                if(error) {
                    res.send(error); 
                }
                // else: realizou solicitação.
            })
        })



