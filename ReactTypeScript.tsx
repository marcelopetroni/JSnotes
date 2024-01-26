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

