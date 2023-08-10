// O QUE É NODE?
// baseado no V8 do Google Chrome, é utilizado para executar JavaScript fora do navegador, usado para APIs back-end, servidor web, etc.

// MÓDULOS
// são funções e blocos de código encapsulados com funcionalidades específicas.

console.log(__dirname);
// use "__dirname" para referenciar ao diretório local, onde está o arquivo

console.log(__filename);
// use "_filename" para referenciar ao caminho do arquivo (incluindo seu nome)

// PARA REQUISITAR/ADICIONAR UM MÓDULO:
const modulo = require('modulepath');

// Quando criar um módulo, use exports para possibilitar enviá-lo e rquire para requisitado no arquivo desejado:
module.exports = "algo aqui"; // <--- arquivo 1 (nomeArquivo.js)

const modulo2 = require('./nomeArquivo.js'); // arquivo 2

// assim "linka" um javascript a outro.

