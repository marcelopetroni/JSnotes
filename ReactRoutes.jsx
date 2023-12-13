// REACT ROUTES
    // utilizado para redirecionar a página de um componente para outro

// primeiro importe a bibloteca react routes e o link:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // foi mudado o nome do atalho p/ router
import { Link } from 'react-router-dom';

// Cada item de sua escolha que você apertar redirecionará até a página desejada:
// HTML:
<>
<Link to = "/" style={{/* aqui você pode aplicar algumas mudanças estéticas a seu item */}}>
    <h2 className='Home'>Home</h2>
        {/* ao clicar nesse item, será redirecionado para a home page da página */} 
</Link>

<Link to = "/Sobre"> {/* ao usar 'to = algo' você escolhe o nome do caminho que será exibido ao lado do domínio */}
    <h2 className='Sobre a empresa'>Undone</h2>
        {/* ao clicar nesse item, será redirecionado para o sobre da empresa */} 
</Link>

    {/* Agora no local onde será exibido seus componentes escreva as tags <Routes> todas as routes aqui <Routes>

    ex: quero meus componentes na main e cada um será exbido se for clicado em um dos links que estão
    relacionado a eles*/}

    <main>
        <Routes> {/* Routes no plural */}

            <Route // cada Route indivídual dentro 
                path = "/Home"   // caminho da página 

                element = { <MeuComponente />} // o componente que será exibido naquele diretório

            />

            <Route 
                path = "/Sobre"   // caminho da página 

                element = { <OutroComponente />} // outro componente que será exibido naquele diretório

            />

        </Routes>
    </main>

</>






