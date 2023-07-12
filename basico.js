// COMANDOS BÁSICOS JS

// LEITURA DE DADOS:
console.log("Algo para exibir.");
// sempre finalizar linhas/bloco de código com ponto vírgula;
// é usado aspas simples para strings longas com mais de uma linha.

// undefined vs null: null é um objeto vazio que existe, já undefined não existe.
// uma variável sempre será do tipo undifined até que você atribua um valor a ela e seja identificado seu tipo.

// OBJETO:
// declarado através de uma chaves {}

var objetoVazio = {};
var objeto = {
    name: "Marcelo", // atribui por dois pontos (:) e separa os atributos/propriedades por vírgula.
    sobrenone:"Nunes",
    idade: 15
};

console.log(objeto.name);

// ARRAY:
// declarado a partir de colchetes []

var array = [primeiroElemento = "leite", segundoElemento = "ovos"];
console.log(array);
// acessar valor específico do array:
console.log(array[0]);

// pode botar um objeto dentro de um array como uma posição dele:
var array2 = [
    "primeiroCarro", // não esquecer da vírgula
    {
        tag: 'Segundo carro',
        nome: 'HB20',
        ano: 2022
    }
]
console.log("Segue o atributo nome que se encontra no objeto que é 2º posição do vetor: " + array2[1].nome);


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

let student = {
    name: 'leo',
    age: 15
}
console.log(`${student.name} tem ${student.age} anos.`);

// FUNÇÕES:
// parecido com java, usa function seguido de nomeDaFuncao(): 

function nomeDaFuncao(parametro1, parametro2) { 
    // código, ex:
    console.log(parametro1 + parametro2);
}

// pode declarar uma variavel e atribuí-la como uma função:

var sum = function() {
    let total = teste + teste2;
    return total; // também tem o return do java.
}

// para a função ser utilizada, assim como em java, deve ser chamada:
nomeDaFuncao(50,50);
sum();

// Obs: javascript tem uma utilidade chamada hoisting:
// se chamado a função antes dele ser declarado, ele identificará no código e retorná o valor esperado
// como se tivesse trocasse de ordem, não seguindo obrigatoriamente uma linearidade:

hoisting();

function hoisting() {
    console.log("deu certo.");
}
// obs: você pode chamar outra função como parâmetro de outra.

// Construtores: parecido com java, só muda que precisa iniciar por function:
function Pessoa(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
}
var objetoNovo = new Pessoa("Ana", 15, 1.70);
// exibe os atributos definidos do objeto:
console.log(objetoNovo);