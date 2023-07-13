// MANIPULAÇÃO DE DADOS
// Assim como em java, quando posto um "." ao lado de uma variavel/objeto, imprimirá x funções a ser utilizadas:

let number = 45.55555;
console.log(number.toFixed(2));

// toFixed(num) para limitar o número de digitos após a vírgula de um número decimal.
// também tem toLowerCase() e toUpperCase() do java.

// Quer separar uma string pelos espços em branco onde cada setença é uma posição do array? use .split(" ")
let frase = "testando a função aqui.";
let array = frase.split(" ");
console.log("separado pelos espaços em branco: " + array);

// Para juntar esse array de novo é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, 
// porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento escolhido.
let testando = array.join("_");
console.log("string inteira unida de novo, mas por _ : " + testando);

// Para verificar se algo está dentro de um valor de uma variável, use .include(algo) e retorna true ou false:
let algo = "amo programação quando não me estressa.";
let verificar = algo.includes("estressa");
console.log(verificar);

// MANIPULANDO ARRAY
// .legth para imprimir a quantidade de posições de um array.
// Quer transformar uma string em um array? use Array.from(variavel):
let algo2 = "odeio problemas.";
algo2 = Array.from(algo2);
console.log(algo2);

// adicionar um item no final, .push():
algo2.push("novoItem");
console.log(algo2);

// remover .pop():
algo2.pop();
console.log(algo2);

// retornar alguns elementos do array? .slice(partida, fim):
algo2 = algo2.slice(0,5);
console.log(algo2);

// splice(partida, fim) pra remover elementos em um intervalo:
algo2.splice(0,2)
console.log(algo2);

// Quer saber o index de algo que você sabe que está no array? .indexOf(algo)
var mostrandoIndex = algo2.indexOf('o');
console.log("Index: " + mostrandoIndex);

// FORMA SIMPLIFICADA DE CONDICIONAL: (funciona com java também!)

var boleano = true;
console.log(boleano ? "é verdadeiro" : "não é verdadeiro.");
// condição ? sim (return se for true): não (return se for false)

var pao = true;
var queijo = true;
var presunto = 2;

console.log(pao && queijo ? "temos um sanduíche" : "não temos ingredientes");
console.log(presunto == 2 ? "misto" : "não tem presuntos suficientes.");


// ALGUMAS DIFERENÇAS DE JAVA:
// operadores aritmeticos:
// existe exponecial diferente de java que usa Math.pow()
console.log(5** 2);

// designar vs comparar vs ESTRITAMENTE igual:
console.log(one = 1);
console.log(5 == 5);

console.log("2" === 2); // false
console.log(2 === 2); // true
// quando usa três iguais, além de comparar, ele verifica se é do mesmo tipo
