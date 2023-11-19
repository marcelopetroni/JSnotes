// O QUE É REST API?
    /* API significa Interface de Programação de Aplicativo. É um meio que permite que diferentes aplicações 
    se comuniquem programaticamente entre si e retornem uma resposta em tempo real.*/

    // ex: status de produto de loja, toda vez que o cliente tenta acessar o stauts, é feito uma requisição HTTP do
    // tipo GET (receber dados) para o API rest do serviço de logística. Ao receber a solicitação, ela consulta um
    // banco de dados e retorna os dados em forma de arquivo json que pode ser manipulada como quiser no projeto.

        // obs: HTTP do tipo POST envia dados para a aplicação.


// COMO FAÇO ESSE LINK?
    // Promises, Funções Async/Await e Manipulação de Respostas HTTP com o Objeto Response:

    ``` Primeiro analise quando será feito a solicitação HTTP: pode ser utilizada a função ao acionar algum evento,
    como o OnClick, ou toda vez que a página for carregada, comum o uso de UseEffect() ```

    const funcaoApi = async () => {
        // referência da função que realizará solicitação e chamada apenas quando preciso no código
    }; 

    useEffect(() => {
        // toda vez que a página for carregada será feito a solicitação HTTP.
    }, [])
    

    ``` FUNÇÕES ASSÍNCRONAS ```
    // utiliza o termo 'async' na declaração da função, Isso indica que a função será assíncrona, ou seja, suas 
    // operações não são imediatas e sempre retornaram uma Promise. 

        const funcaoApi2 = async () => {
            // código assíncrono aqui, note o async na declaração da função.
        };

        // Mas o que é promise?

        /* representa a conclusão (ou falha) de uma operação assíncrona, como uma solicitação HTTP.
        Utiliza a função await no qual pausa a execução da função até que a Promise retornada 
        pela função fetch seja resolvida ou rejeitada. */

        const funcaoApi3 = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

            // response = referência da promise
            // await = pausa função até que promise seja retornada.
            // fetch = retorna promise
            // o link: arquivo json com o conteúdo desejado vindo de outra API.
        };

    // Como isso são operações suscetíveis a erros e execeções, é preciso botar essas operações dentro
    // de um bloco try() catch():

    const funcaoApi4 = async () => {
        try {
           const response = await fetch(
              'https://jsonplaceholder.typicode.com/posts?_limit=10' 
           );

           setEstado(response.data);
           // seta dados do json recebido no estado do projeto que posteriormente pode ser manipulado como quiser.

        } catch (error) {
           alert("Mensagem de erro.");
            // Caso a solicitação não ocorra de acordo.
        }
    };