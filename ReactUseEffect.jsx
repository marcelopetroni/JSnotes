// USE EFFECT 
    // O que o useEffect faz? Usando esse Hook, você diz ao React que o componente precisa fazer algo 
    // apenas depois de ser renderização. 

    // ele é executado uma vez após o componente ser renderizado, porém você pode definir parâmetros para
    // o UseEffect ser executado toda vez que algum estado X for atualizado.

    // A estrutura do useEffect é da seguinte forma:

    useEffect(() => {
        // Dentro do objeto devemos colocar todas as ações que serão executadas.
    

        // Os arrays definem quais os estados que o useEffect depende.
    }, []); // nesse colchete "[]" é adicionado o estado desejado.

    // Quer um exemplo?
        // imagine uma página que tenha um estado contador e um botão para incrementá-lo.

        const [EstadoContador, SetEstadoContador] = useState('');

        const HandleContador = () => {
            SetEstadoContador(EstadoContador + 1);
        }
        useEffect(() => {

            // Este código será executado após cada renderização do componente e exibido o contador atualizado.
            document.title = `Contador: ${EstadoContador}`;
          });

        return (
            <button onClick={HandleContador}>Aperte</button>
        )

        // O efeito do useEffect é executado após cada renderização do componente. 
        // No exemplo, ele altera o título da página para refletir o valor do contador atualizado. 

    // Pensa no estados como armazenadores dos valores que podem mudar em minha página e o UseEffect
    // o responsável por mudar esse valor do estado a cada renderização.
