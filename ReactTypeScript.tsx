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