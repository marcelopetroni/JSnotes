import React from 'react';
import { useState} from 'react';

// USO DE INTERFACE + FUNÇÕES COM REACT:
    // os eventos das funções devem ter um tipo no TypeScript, veja no segundo exemplo a seguir:

    interface Pessoa {
        name: string
        email: string
    }
// declara o estado do tipo Pessoa (objeto)
    const [dados, setDados] = useState/* <Pessoa> */({}); // 

// declara função que será extraído os dados em um forms no html
    const handleSubmit = (e /*: React.FormEvent<HTMLFormElement>*/) => { // eventos precisam declar o tipo deles
        const { name, email } = e.target;
        setDados({
            /*
            [name]: value,
            [email]: value */
        })
    }
// declara função que exibe dados do tipo desejado
    const exibirData = (info:Pessoa) => {
        // aqui foi criado uma arrow function com um parâmetro do tipo Pessoa (um objeto)
        console.log(info.name); 
        console.log(info.email);
    }
// declara funçao que chamará ela
    const handleData = (e /*:React.MouseEvent<HTMLButtonElement>*/) => {
        e.preventDeafault();
        exibirData(dados) // nesse exemplo um pouco incompleto, é exibido os dados através de um estado 
                          // do tipo pessoa (objeto) 
    }

// componente no html que chamará função que exibe dados.
    < GamepadButton onClick = {handleData} /> // ao apertar o botão, é exibido os dados desejados.


// USO CORRETO DE INTERFACE + GENERICS + FUNÇÕES:
    

