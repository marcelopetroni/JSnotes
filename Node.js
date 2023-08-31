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

// NPM (node package manager)
    // Ele é usado para instalar, gerenciar e compartilhar pacotes de código reutilizável escritos em JavaScript.

// npm install <nome-do-pacote>: Instala um pacote específico.
// npm run AlgoAqui: executa scripts definidos no arquivo "package.json"

`{
    "name": "meu-projeto",
    "version": "1.0.0",
    "scripts": {
      "start": "NomeArquivo",
      "test": "arquivo tests"
    },
    "dependencies": {
      // Dependências do projeto
    }
  }`

// Você pode atribuir um arquivo a ser executado como no exemplo "start" : NomeArquivo no arquivo json.js
// e no terminal escrever npm run start que será executado NomeArquivo.

// Recurso interessante do Node: process.stdin.on
  // usado para interções em tempo real de entrada de dados.
  // ex: perguntas que são lançadas a medida que o usuário responde elas.

const ask = (index = 0) => {
  process.stdout.write("\n Alguma pergunta aqui.");
}

process.stdin.on("roda qualquer coisa aqui repetidamente até dar process.exit", data => {
  if("alguma condição") {
    ask();
  }
  else {
    process.exit();
  }
});

// Funções de tempo Node:

  // SetTimeout: Irá esperar um tempo e uma rodar função.
    setTimeout(funcaoSemParentesesPorqueEhReferencia, tempoASeEsperar );
    // clearTimeout: Cancela função acima.

    //ex:
      const finished = () => console.log("done!");
      setTimeout(finished, 3000); // esperará 3s para ser executado a função.
    
      console.log("Esse print será mostrado primeiro que o da função acima pelo setTimeOut, um assincronismo");


  // setInterval: De tempo x em tempo x será executado uma função.
    setInterval(funcao, interval); // a cada tempo do intervalo, será executado a função escolhida.

    // clearInterval: Cancela função acima.


// EVENTS
 // Usado para permitir a comunicação assíncrona entre diferentes partes do código. o Event Emitter é uma parte 
 // importante do módulo "events" incorporado, que permite que objetos emitam e ouçam eventos.

  // chamando events
  const EventEmitter = require('events');

  // emitindo evento:
  const ev = new EventEmitter();
  ev.emit("Say something", "Algo");
  ev.emit("Say something", "OutraCoisa");

  // ligar evento:
  ev.on("Say something", (message) => {
    console.log(message);
  })
