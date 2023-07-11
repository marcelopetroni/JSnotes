// COMANDOS BÁSICOS JS

// LEITURA DE DADOS:
console.log("Algo para exibir.");
// sempre finalizar linhas/bloco de código com ponto vírgula;
// é usado aspas simples para strings longas com mais de uma linha.

// undefined vs null: null é um objeto vazio que existe, já undefined não existe.

// OBJETO:
// declarado através de uma chaves {}

var objetoVazio = {};
var objeto = {
    name: "Marcelo", // separa os atributos/propriedades por vírgula
    sobrenone:"Nunes",
    idade: 15
};

console.log(objeto.name);

// ARRAY:
// declarado a partir de colchetes []

var array = [primeiroElemento = "leite", segundoElemento = "ovos"];
console.log(array);

// TIPOS DE DADOS:
// js é uma linguagem não tipada, interpretada, no qual pode declarar variáveis sem definir um tipo.
// será interpretado o tipo de dado e todas as variáveis são definidas por "var/let" e o interpretador define seu tipo.
// var -> escopo global, let -> limitada ao escopo em que é declarada.
// const não muda o valor, não adianta redefinir.
var tipoDeVariavel;
{
    let valorApenasAquiNoEscopo;
}
const naoMudaOValor = 1;
// os tipos de variável interpretadas presentes em js:

console.log("String, Number (int/double), Boolean, Undefined, Symbol, BigInt");

// para concatenar variaveis/texto/afins use + para separá-las ou vírgulas se for só variáveis:
var teste = 15;
var teste2 = 20;

console.log(teste2, teste);
console.log("Segue lista de compras: " + array);

// se quiser usar uma variável dentro de um texto use crase (``) + $ + variável dentro de chaves {algo}
console.log(`pedro tem ${teste} anos.`);


