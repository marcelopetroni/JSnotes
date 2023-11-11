// ESTADOS
// O estado é um objeto interno do React usado para conter dados ou informações sobre um componente. 
// O estado de um componente pode mudar com o tempo; sempre que muda, o componente é renderizado novamente.


// No caso, uma classe que contém um estado herda da biblioteca Component e você pode 
// utilizá-lo para armazenar, mudar e manipular seus dados.
// pense como uma varíavel fluída que pode sempre mudar de valor.

    // declarando um estado:
    import React, { Component, useState } from 'react';

    function App() {
        const [estado, setEstado] = useState('Aqui definirá o valor inicial do estado');
        setEstado("Aqui mudo o valor do estado");
       
    } 

// mas como eu mudo valores? e com que utilidades práticas eu vou fazer isso?
// para mudar valores de um componente utilize setEstado(valor)

const funcaoParaMudarValor = () => {

    // quando tiver atributos: 
    setEstado({valor : "novoValor"})

    // sem atributos, apenas o valor:
    setEstado('algo');
}

// RESUMO: Os estados são usados principalmente para armazenar dados que podem mudar ao longo do tempo e 
// influenciar a renderização do componente. Portanto, você deve usar um estado quando o componente precisar 
// rastrear e exibir informações que podem ser alteradas pelo usuário ou por interações com a aplicação.

    // Exemplo: botão com valor inicial(o estado) declarado no construtor que muda o conteúdo dentro dele
    // quando o usuário clica no botão


    // SEGUE EXEMPLO INCLUINDO ATRIBUTOS DE UM OBJETO E LISTAS: 
    // 1ª importa component toda vez que criar um componente com estado.
    import React, { Component } from 'react';

    function App() { // 2º escreva nesse formato: 

        const [estado, setEstado] = useState(''); // para apenas um valor
        const [estado2, setEstado2] = useState([]); // para listas de estados
        const [estado3, setEstado3] = useState({}); // para objetos
    }
    
      const atualizarTexto = () => {
        setEstado(""); // nesse caso mudando o texto escrito dentro do botão.

        setEstado2(...estados2, estado2); // nesse caso, ele adiciona um novo valor a lista de estados.
                // é utilizado ... para representar a lista e ao lado o novo valor a ser inserido.

        setEstado3({
            titulo: botao,
            utilidade: apertar,
            apertado: false
        })
        // aqui foi definido atributos que podem ser alterados e chamados por meio de props tipo estado3.titulo
      }
    
        return (
          <div>
                // note que para funcionar foi preciso botar o estado dentro do botão por "{botao}"
                // esse valor é fluído que iniciará com o valor pré-definido com possibilidade de mudança
                // se a função for chamada pelo click do usuário.

            <button onClick={atualizarTexto}>{estado}</button> // onClick = {funcao}
            <button onClick={atualizarTexto}>{estado3.titulo}</button> 

            // 3º se for preciso, defina o parâmetro em que vai ser acionado a função que mudará seu valor
                // nesse caso é quando o usuário clicar no botão, é chamado a referência da função.
          </div>
        );

    export default App;
