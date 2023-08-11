import { Fragment } from "react";
// TUDO QUE APRENDI SOBRE REACT:
// 1º Quer saber como criar projeto react.js?
`cd + diretório // (ex -> C:\Users\marce\OneDrive\Documentos\VscodeProjetos) 
para especificar onde quer incluir seu projeto

npm create vite@latest TestandoReact --template react // para criar um projeto vite + react

code . // para entrar no projeto no vscode // atalho para entrar no projeto pelo vscode rapidamente

NO PROJETO: 
obs: se não tiver a pasta "node_modules" precisa baixar o npm para designar um local host para o projeto, 
logo no terminal escreva:
npm install

em seguida:
npm run dev // para inicializar e ser dito em que local host (servidor local) está seu projeto e fornecer o link`


// ESTRUTURA PROJETO REACT:
    // OBS: jsx é uma extensão do react que possibilita a mistura de JavaScript e HTML.

// node_modules - que contém todos os pacotes e dependências da aplicação;
// App.jsx - Página HTML inicial do nosso projeto que será exibida no navegador.
// App.css - Arquivo global principal CSS de estilização do HTML do App.jsx
    // você pode criar novos arquivos e pastas no src organizando o projeto, só trate de importá-lo onde precisar.


// main.jsx - Arquivo responsável por inicializar nossa aplicação.
    // carrega o conteúdo dos arquivos de estilização e estrutura criados por mim (através da tag < nomeArquivo/>)
    // toda vez que for criado novos arquivos jsx, deve ser importado no main (import nome from "./diretório/nome"):

    import basico from  "./basico";
    ReactDom.render (
        < basico/>  // Aqui é adicionado um arquivo novo ao projeto que será carregado.
    )

    // OBS ARQUIVOS CSS: você pode tanto importá-lo apenas no arquivo jsx desejado diretamente, como no main assim:

    import './diretorio/meuArquivo.css'; 
    // diferente dos arquivos jsx, no css não é preciso utilizar o 'From' e é preciso especificar '.css' no final.
        // não é preciso usar a tag <link> para unir HTML ao css, apenas o import basta. (e é recomendado)

    // também é possível importar uma pasta inteira com todos os arquivos jsx/css especificando diretório:
    import diretorio from '/diretorio/diretorio2'; // considere que diretorio tenha vários arquivos estilizando.


// index.html - Arquivo HTML onde será injetado todo o JavaScript que for compilado para ser exibido no navegador.
    // renderiza nosso conteúdo, muda configurações básicas como o título da aba, etc.


// DEMONSTRAÇÃO DE UM ARQUIVO HTML ATRÁVES DE REACT:
    // 1º crie uma função com o nome do arquivo jsx:

    import './meuArquivoCSSDessaPagina'; // crie um diretório com pastas com o jsx e o css e importe ele no jsx.
    function nomeArquivo() {
        // 2º para inserir HTML, use a função return() com o conteúdo HTML desejado dentro.
        return(
            <>
                <h1>HTML que será exibido em minha página.</h1>

                // 3º está vendo essa tag vazia "<></>"? chamada Fragment, possibilita adicionar mais de um elemento
                // HTML em minha função, pois por default só é aceito um retorno, então é necessário por dentro 
                // de um fragmento para ser retornado todo o conteúdo HTML.

                <h1> Veja como não há erro de sintaxe aqui por estar dentro de um fragmento.</h1>
            </>
        )
    }
    export default nomeArquivo;
    // aqui é exportado minhas configurações que serão carregadas no main.

    // OBS SUPER IMPORTANTE:
    <>
        <div className="algo"> // no react, ao declarar uma classe no HTML é usado className invés de só class.
                                // pois já existe "class" em JavaScript aí mudaram para não ter interferência.
            <h1>title</h1>
        </div>

    </>

// QUER ADICIONAR NOVAS FONTES PARA SER UTILIZADO NO SEU CSS DO PROJETO?
    // 1º Use alguma plataforma como o Google Fonts para escolher a fonte e pegar seu respectivo <link> HTML.
    // 2º adicione a pasta INDEX.HTML na tag <head> 
    // 3º no arquivo css desejado, referencie a fonte desejada para aquele bloco com a propriedade font-family.
    // ex: .classe { font-family: 'FonteX', serif }

   // <head>
    //    <link rel="stylesheet" href="FonteX" />   <-- arquivo index.html
   // </head>


// ORGANIZAÇÃO E REUTILIZAÇÃO DE CÓDIGO: Components
    // Você pode criar diversos recursos para ser exibido e repetido quantas vezes quiser em sua página.

    ` EXEMPlO: Considere dois diretórios, uma pasta chamada Home com seu arquivo jsx e css e um chamado
    funcionalidades onde há uma feauture específica que você deseja adicionar a sua Home page, com seus respectivos
    arquivos css e jsx:

    ^ Components
        ^ funcionalidades
            ^ arquivoHTML.jsx
            ^ arquivoCSS.css
    
    ^ Home
        ^ home.jsx
        ^ home.css

    // Reutilização: Você pode adicionar uma novo feauture a Home page adicionando toda a configuração 
    (arquivo funcionalidades) ao arquivo jsx do Home, e repetí-lo quantas vezes quiser e em qualquer arquivo desejado.

    Veja esse mesmo exemplo:
    `   
    // arquivo: home.jsx
    // importe o arquivo desejado para adicionar àquela parte do código que deseja inserí-lo.
    import funcionalidades from '../../funcionalidades';
    function Home() {
        return(
            <>
                <div>Aqui algumas configurações de minha página.</div>
                < funcionalidades/> 
                < funcionalidades/> 
                < funcionalidades/> 
                // aqui por exemplo, adicionei toda uma nova feauture 3 vezes em minha Home Page adicionando
                // o arquivo separado a meu código, reutilizando ele onde eu quiser.
            </>
        )
    }

// VOCÊ PODE ADICIONAR PROPRIEDADES A SEUS COMPONENTES PARA TER DADOS DIFERENTES:
import funcionalidades from '../../funcionalidades';
    function Home() {
        return(
            <>
                <div>Aqui algumas configurações de minha página.</div>
                < funcionalidades umaPropriedade = 'dadoX' name = 'dadoY'/> 
                < funcionalidades outraPropriedade = 'dadoX' name2 = 'dadoY'/> 
            </>
        )
    }

// NO HTML DO COMPONENTE: 
function funcionalidades(props) {
    return(
        <>
            <div>{props.umaPropriedade}</div>
            <div>{props.outraPropriedade}</div>
            // ou bota a propriedade direto no parâmetro sem o props e fica: <div>{umaPropriedade}</div>
                                                                             <div>{outraPropriedade}</div>
        </>
    )
}
// nesse caso, a Home Page apresentará a mesma feauture representada duas vezes com dados diferentes em cada uma.
// pois seus dados foram definidos respectivamente em seu componente.



