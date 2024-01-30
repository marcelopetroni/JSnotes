// TYPESCRIPT
    // O TypeScript adiciona recursos úteis para a linguagem JavaScript, entre esses recursos, 
    // destacam-se a tipagem estática, interfaces, classes, herança, etc, + fácil de identificar bugs.

// Em typescript, as variáveis precisam ter um tipo declarado:

    let age:number   // tipo: number
    const isTrue: boolean = true // tipo: boolean

// evitar: usar tipo 'any' para definir uma variável de tipo dinâmico
    let exemp:any
// você pode mudar definir uma variável definida por any com 'as':

    let exemplo = exemp as string;

// você pode atribuir mais de um tipo a algo:
    let num : number | string  // essa variável será do tipo number ou string

// FUNÇÕES: agora com paramêtros definidos:
    const sum = (num: number, num2: number): number => {
        /* esse último ': number' define o tipo do retorno (opicional) */
        return num + num2
    }
// é possível ter como prop uma função dentro de uma interface, veja:

    interface InformacoesUsuario {
        text: string
        cadastro() : string 
        // nesse exemplo, têm-se uma função como parâmetro que necessita de um retorno de string
    }

// em seguida, ao chamar a interface, é preciso declarar a função com o retorno do tipo desejado:
    const exibirDadosUsuario: InformacoesUsuario = {
        text: 'algo aqui',
        cadastro() {
            return 'info retornada tipo string'
            // aqui poderia também ter um retorno de um estado do tipo string onde já foi preenchido 
            // o dado desejado anteriormente via forms
        }
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

// CLASSES NO TYPESCRIPT: (parecido com java)
    // você deve ter os atributos com seu tipo e um construtor onde será extraídos os dados dos atributos:
    class Exemplo {
        private name: string /* pode ser usado readonly, protected e private */
        private weight: number
        private height: number // pode botar os parâmetros dentro do construtor

        constructor(name: string, weight: number, height: number) {
            this.name = name
            this.weight = weight
            this.height = height
        }
    }

// Generics
    function exibirValor<T>(parametro: T): void {
        console.log(parametro);
    }

// aqui, ao chamar função, você define o seu tipo previamente e pode definir que tipo será usada nela.
    exibirValor<string>('Olá, mundo!'); // Exemplo de uso com string
    exibirValor<number>(42); // Exemplo de uso com número