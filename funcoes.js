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

// use () => como atalho para criar uma função em js:
// exs:
var nomeFuncao = () => x * y;
nomeFuncao = (param) => 10 * param;