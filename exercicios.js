// 1º Transformar notas númericas no sistema de notas americano (A, B, C, D, F):

let notas = [5, 10, 7, 8, 6];

function showgrades(notas) {
    // podia ser o for convencional: for(let i = 0; i < notas.length, i++)
    for(let nota of notas) {
        if(nota >= 9) {
            console.log("A");
        }
        else if(nota >= 8) {
            console.log("B");
        }
        else if(nota >= 7) {
            console.log("C");
        }
        else if(nota >= 6) {
            console.log("D");
        }
        else {
            console.log("F");
        }
    }
}
showgrades(notas);

// 2º Renda vs despesas, criar dois arrays e calcular se uma família terá dinheiro pra pagar as contas e mostrar saldo.

let rendas = [100, 50, 400, 300, 150, 120, 80];
let despesas = [250, 200, 350, 100];

function calculateBalance(rendas, despesas) {
    let income = 0, losses = 0;

    for(let renda of rendas) {
        income += renda;
    }
    for(let loss of despesas) {
        losses += loss;
    }
    let result = income - losses;
    
    if(result >= 0) {
        console.log(`Your balance of R$${result} is positive.`);
    }
    else {
        console.log(`Your balance of R$${result} is negative.`);
    }
}
calculateBalance(rendas, despesas);

// 3º Celsius em Fahrenheits a partir de uma string.

let degree = "30C";
let degree2 = "100F";

function transform (unit) {
    let result, type, value;

    if(unit.includes("C") || unit.includes("F")) {
        if(unit.includes('C')) {
            type = "C";
        }
        else {
            type = "F";
        }
    
        if(type == "C") {
            value = Number(unit.replace("C", ""));
            result = value * 9/5 + 32;
        }
        else {
            value = Number(unit.replace("F", ""));
            result = (value - 32) * 5/9;
        }
        console.log(result.toFixed(1)); // limitar as casas decimais depois da vírgula em apenas 1.
    }
    else {
        throw "Grau não encontrado."
    }
}

console.log("Transformando Celsius em Fahrenheit: ");
try {
    transform(degree);
}
catch(e) {
    console.log(e);
}
console.log("Transformando Fahrenheit em Celsius: ");
try {
    transform(degree2);
}
catch(e) {
    console.log(e);
}

// 4º Buscando e contando dados em Arrays

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

function numCategoriasELivros(booksByCategory) {

    console.log("Tem " + booksByCategory.length + " categorias.");
    console.log("Com um total de " + booksByCategory[0].books.length + " livros em cada uma.");
}

function numeroAutores(booksByCategory) {
    let autores = [];

    for(let categoria of booksByCategory) {
        for(let posicao of categoria.books) {
            if(autores.indexOf(posicao.author) == -1) {
                autores.push(posicao.author);
            }
        }
    }
    console.log("Tem total de " + autores.length + " autores.");
}

function livrosDoAutor(string, booksByCategory) {

    // precisa de dois loops porque um percorre as posições do vetor e cada posição dele é um vetor também
    // então precisa percorrer as posições da posição.
    for(let objeto of booksByCategory) {
        for(let posicao of objeto.books) {
           if(posicao.author == string) {
                console.log(posicao.title);
           }
        }
    }
}
numCategoriasELivros(booksByCategory);
numeroAutores(booksByCategory);
console.log("Livros do autor Augusto Cury: ");
livrosDoAutor("Augusto Cury", booksByCategory);