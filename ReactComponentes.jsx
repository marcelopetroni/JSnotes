// ORGANIZAÇÃO E REUTILIZAÇÃO DE CÓDIGO: Components
    // Você pode criar diversos recursos para ser exibido e repetido quantas vezes quiser em sua página.
    // Além disso, é possível criar componentes interativos que muda valores e realiza funções em um programa.

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

    `   
    // COMO CRIA UM COMPONENTE?
    // 1ª primeiro importe a biblioteca React (obrigatório em arquivos jsx)
    import React from 'react';

    // Depois dependendo se houver JavaScript ou não prossiga pro próximo passo:
        // 2º sem JavaScript, estrutura simples e direta:

        function MeuComponente({Pode_Ter_Props_Aqui}) {
            return (
              <div>
                <p>Este é um componente simples sem JavaScript e estados presentes.</p>
              </div>
            );
          }
        
        // 2º Se desejar incluir um estado, importe Component do react
        import React, { Component } from 'react';

    
    // UTILIZAÇÃO DO COMPONENTE:

     // arquivo: home.jsx
    // importe o react e o arquivo desejado para adicionar àquela parte do código em que deseja inserí-lo.

    import React from 'react';
    import Funcionalidades from '../../Funcionalidades';
    function Home() {
        return(
            <>
                <div>Aqui algumas configurações de minha página.</div>
                < Funcionalidades/> 
                < Funcionalidades/> 
                < Funcionalidades/> 
                // aqui por exemplo, adicionei toda uma nova feauture 3 vezes em minha Home Page adicionando
                // o arquivo separado a meu código, reutilizando ele onde eu quiser.
            </>
        )
    }

// VOCÊ PODE ADICIONAR PROPRIEDADES (PROPS) A SEUS COMPONENTES PARA DEFINIR DIFERENTES DADOS/FUNÇÕES ATRELADOS A ELE
import React from 'react';
import Funcionalidades from '../../Funcionalidades'; // componente sempre com letra maiúscula
    function Home() {
        return(
            <>
                <div>Aqui algumas configurações de minha página.</div>
                < Funcionalidades umaPropriedade = 'dadoX' outraPropriedade = 'dadoY' name = 'dadoY'/> 
                < Funcionalidades umaPropriedade = 'dadoZ' outraPropriedade = 'dadoW' name2 = 'dadoY'/> 
            </>
        )
    }
    // nesse caso, a Home Page apresentará a mesma feauture representada duas vezes com dados diferentes em cada uma.
    // pois suas props apresentam valores diferentes.

// NO HTML DO COMPONENTE: 
function Funcionalidades(props) {
    return(
        <>
            <div>{props.umaPropriedade}</div>
            <div>{props.outraPropriedade}</div>
            // ou bota a propriedade direto no parâmetro sem o props e fica: <div>{umaPropriedade}</div>
                                                                             <div>{outraPropriedade}</div>
        </>
    )
}

// Também tem como enviar funções e linká-los a componentes: 
    // arquivo principal
function App() {

    const funcao = () => {
        // algo que a função faz, pode ser algo relacionado ao componente.
    }
    return(
        <>
            < Funcionalidades funcaoDoOutroArquivo = {funcao}/> {/* a partir dessa prop, é linkado a função */}
        </>
    )
}
    // componente: 
function Funcionalidades({funcaoDoOutroArquivo}) {
    return(
        <>
            <div onClick={funcaoDoOutroArquivo}>Algo aqui</div>
                {/* nesse exemplo, ao clicar nessa div, é acionado a função do arquivo principal*/}
        </>
    )
}

// EXEMPLO DE UTILIZAÇÃO DOS PROPS: 

// LINKAR FUNÇÕES/INFORMAÇÕES ENTRE ARQUIVOS
// QUER APLICAR FEAUTURES A SEU COMPONENTE MAS NECESSITA DOS ESTADOS/INFOS DO ARQUIVO PRINCIPAL? LINKE ELES:

    // ex: card que apresenta botão de apagar, mas a lista de cards ta no arquivo principal e para apagá-lo, 
    // precisa da condição do OnClick do botão dentro do componente para poder aplicar feauture no arquivo principal

    // Arquivo principal:
    {<Card key={index} task={item} onDelete={handleDelete} /> } /* card com props */
                                            // onDelete é a referência da função apagar que será passado ao componente
    const handleDelete = (info) => {
        // função de apagar item da lista de cards
    }

    // Arquivo do componente:
    function CardComponent({task, onDelete}) { // prop referenciado a função apagar do outro arquivo
        return (
            <button onClick={() => onDelete(task)}>Apagar</button>
        )
    }

/* O que ocorre aqui? O componente CardComponent recebe as props 'task' e 'onDelete' do arquivo principal. 
   Quando o botão é clicado, a função onDelete é acionada, removendo assim o card associado à tarefa da lista.
   Neste exemplo, a lista de cards está no arquivo principal, e ao acionar a exclusão no componente (OnClick),
   a função handleDelete é chamada, removendo o estado correspondente ao card da lista de cards. */