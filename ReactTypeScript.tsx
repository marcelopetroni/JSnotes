import React from 'react';
import { useState} from 'react';
// TYPESCRIPT
    // O TypeScript adiciona recursos úteis para a linguagem JavaScript, entre esses recursos, 
    // destacam-se a tipagem estática, interfaces, classes, herança, etc, + fácil de identificar bugs.

// Em typescript, as variáveis precisam ter um tipo declarado:

let age:number   // tipo: number
const isTrue: boolean = true // tipo: boolean

// evitar: usar tipo 'any' para definir uma variável de tipo dinâmico
let teste:any
// você pode mudar definir uma variável definida por any com 'as':

let exemplo = teste as string;

// você pode atribuir mais de um tipo a algo:
let num : number | string  // essa variável será do tipo number ou string

// FUNÇÕES: agora com paramêtros definidos:
const sum = (num: number, num2: number): number => {
    /* esse último ': number' define o tipo do retorno (opicional) */
    return num + num2
}

// tem como botar o retorno como void (procedimento que não retorna nada):
const message = () : void => {
    console.log('exemplo'); // por default se não tiver 'return' ele terá o retorno do tipo void
}

// TYPES E INTERFACES:
    // São estruturas usados para declaração de tipos de objeto:

    interface Pessoa {
        name: string
        email: string
    }

    type pessoas = {
        pessoas: Pessoa[] // a variável pode ser do tipo objeto, nessse exemplo é uma lista de objetos do tipo pessoa
        aboutThem: string
        cpf?: string // ao botar '?' após nome da variável, 
                    // torna o tipo definido 'opcional', adicionando o tipo 'undefined' além se string nesse exemplo
    }

    // Ao declarar um objeto com retorno :objeto, você deve/pode definir suas props:
    const data : pessoas = {
        aboutThem: 'Fulano e  Beltrano são gentis.',
        pessoas: [{email: 'fulano@document.com', name: 'fulano'}, {email: 'beltrano@doe.com', name: 'beltrano'}]
        // nesse exemplo, a prop 'pessoas', tem como tipo uma lista de objetos 'pessoa'.
        // logo foi preciso abrir um [] para a lista e um {} para botar cada respectiva prop do objeto pessoa
    }

    // OBS IMPORTANTE: QUER VER/BOTAR AUTOMATICAMENTE O QUE FALTA SER DECLARADO DO OBJETO INVÉS DE TRANSCREVER
    // CADA PROP DELE? APERTE CTRL + SPACE QUE APARECE COMO SUGESTÃO.

// Cuidado com tipos opcionais, veja:

function exemplo2(massage:string) {
}

exemplo2(data.cpf!) // nesse exemplo eu tento chamar uma prop de tipo string | undefined 
                    // e tem incompatibilidade com o parâmetro da função que é só string

// solução? botar um '!' ao lado da prop que foi definida como opcional ou acrescentar '?' no param da função.


// DIFERENÇA: entre type e interface:
    // interface é mais indicado para definir estruturas de objetos/classes
        // interfaces podem ser implementadas/extendidas

    //  type é mais indicado para criar tipos de união, interseção, tipos complexos


// USO DE FUNÇÕES com interface:
    // os eventos das funções devem ter um tipo no TypeScript, veja no segundo exemplo a seguir.
    // é possível ter como prop uma função dentro de uma interface, veja:

    interface InformacoesUsuario {
        cadastro() : string 
        // nesse exemplo, têm-se uma função como parâmetro que necessita de um retorno de string
    }
    // em seguida, ao chamar a interface, é preciso declarar a função com o retorno do tipo desejado:
    const exibirDadosUsuario: InformacoesUsuario = {
        cadastro() {
            return 'info pedida via string'
            // aqui poderia também ter um retorno de um estado do tipo string onde já foi preenchido 
            // o dado desejado anteriormente via forms
        }
    }

    // Agora um uso prático de interface + função

    interface Pessoa {
        name: string
        email: string
    }
    // declara o estado do tipo Pessoa (objeto)
    const [dados, setDados] = useState/* <Pessoa> */({}); // 

    // declara função que será extraído os dados em um forms no html
    const handleSubmit = (e /*: React.FormEvent<HTMLFormElement>*/) => { // eventos precisam declar o tipo deles
        const { name, email } = e.target;
        setDados({
            /*
            [name]: value,
            [email]: value */
        })
    }
    // declara função que exibe dados do tipo desejado
    const exibirData = (info:Pessoa) => {
        // aqui foi criado uma arrow function com um parâmetro do tipo Pessoa (um objeto)
        console.log(info.name); 
        console.log(info.email);
    }
    // declara funçao que chamará ela
    const handleData = (e /*:React.MouseEvent<HTMLButtonElement>*/) => {
        e.preventDeafault();
        exibirData(dados) // nesse exemplo um pouco incompleto, é exibido os dados através de um estado 
                          // do tipo pessoa (objeto) 
    }

    // componente no html que chamará função que exibe dados.
    < GamepadButton onClick = {handleData} /> // ao apertar o botão, é exibido os dados desejados.

// UNION
    // Quando você define dois tipos para uma variável, nesse exemplo veremos de dois objetos:

type animais = {
    vertebrado: boolean
}

const seresVivos: pessoas & animais = {
    aboutThem: "são seres",
    pessoas: [{email: 'algo', name: 'algo'}],
    vertebrado: true
    // foi declarado as props dos dois em uma variável por union
}

