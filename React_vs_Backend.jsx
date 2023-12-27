// QUER LINKAR SEU FRONT END COM SEU BACK END?
    // utilize biblioteca AXIOS para isso:

    // baixe utilizando: npm install axios 
        //e depois a importe:
        import Axios from 'Axios';
        import { useEffect, useState } from 'react';

/* Envie requisições CRUD para enviar/receber/atualizar/deletar dados no qual o back-end irá receber a solicitação,
   irá recorrrer ao banco de dados para executá-la e retornará uma resposta (response) para o front-end.  */
    
    // defina as props que serão também uma coluna da tabela do banco de dados
    // Exemplos com axios, GET (ler dados): 

    const funcaoExemplo = () => {
        // nomeDefinidoProAxios.get("Rota que se encontra dados")
        Axios.get("http://localhost:3001/register")

        .then(response => { // .then para manipular response, note que foi definida como função response => {}
            console.log(response);
            // nesse exemplo é pego os dados e printados no terminal
        })
    }
    // você pode, por exemplo, pegar os dados e botar em um estado que vai conter todos eles:

    const [exemplo, setExemplo] = useState();
    useEffect(() => {     // useEffect para atualizar os dados em tempo real toda vez que for renderizado a página
      Axios.get("http://localhost:3001/register")

      .then(response => {
        setExemplo(response.data); // response.data para pegar todos dados e aramazenar no estado exemplo
      })
    }, []);
    console.log(exemplo); // esse console log printará todos os dados do arquivo json fornecido pelo back-end
    
    
    // Exemplo de axios, POST (enviar dados):
    const teste = () => {
        // primeiro a rota + ',' + objeto com props que serão cada um respectivamente uma coluna da tabela do banco
      Axios.post('http://localhost:3001/rotaParaEnvioDosDados', {
        atributo1: 'exemplo',
        atributo2: 25,
        atributo3: 45.5,
        atributo4: 'exemplo@hotmail.com'
      })
      .then(response => {
        console.log(response); // response do back-end
      })
    };

    // Exemplo de axios, PUT (atualizar dados):
    const atualizarDados = (id) => {
        Axios.put(`http://localhost:3001/register/${id}`, {
            // A rota é seguida pelo ID do registro que será atualizado
            atributo1: 'novoExemplo',
            atributo2: 30,
            atributo3: 55.5,
            atributo4: 'novo_exemplo@hotmail.com'
        })
        .then(response => {
        console.log(response); // Response do back-end após a atualização
        })
    };
    // Exemplo de axios, DELETE (excluir dados):
    const excluirRegistro = (id) => {  // cada linha em uma tabela de banco de dados tem um id diferente.
        Axios.delete(`http://localhost:3001/register/${id}`)
        .then(response => {
            console.log(response); // Response do back-end após a exclusão
        })
    };
    
    
    
    
    
    
    
    
