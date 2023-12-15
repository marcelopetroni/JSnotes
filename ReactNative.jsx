// REACT NATIVE: QUAL A DIFERENÇA COM REACT.JS?

// React.js: desenvolvimento web
// React native: desenvolvimento mobile

    /* 1º DIFERENÇA: Diferente do react.js que utiliza tags da dom como div, img, span, button, no react native é 
    utilizado componentes nativos da plataforma(ios, android) como View, Image, Text, Touchable, veja: */

    // React.js
    import React from "react";
    function js() {
        render (
            <>
            <div> isso é um container </div>
            <img src= "isso é uma tag de imagem" alt="" />
            <span> isso é uma caixa de texto </span>
            <button> isso é um botão </button>
            <input type="isso é um input de texto" />
            </>
        )
    }
    // export default js;

    // React Native
        // primeiro importe os componentes da biblioteca react native
        import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';

    function native() {
        render(
            <>
            <View>Esse componente funciona como uma div no react native, é apenas um bloco</View>
            <Image>Esse é um componente de imagem no react native</Image>
            <Text>Esse é um componente de texto no react native</Text>
            <TouchableOpacity>Tem diferentes 'touchables', outros botões, esse é o opacity</TouchableOpacity>
            <TextInput>Esse é um componente de input de texto</TextInput>
            
            </>
        )
    }
    // export default native;

    /* 2º DIFERENÇA: Style: Não se utiliza css puro no React Native, mas pode ser utilizado uma forma de aplicar
    estilo que também é usado no React.js. Isso significa aplicando 'style = {algo: algo}' para ambos */

    <>
    // REACT.JS:
    <div style={'color: red'}>um container normal</div>

    // REACT NATIVE:
    <View style={'color: red'}>um container normal</View>
    </>

    /* Native: Como você também pode aplicar estilo de uma forma diferente, criando um objeto e atribuindo ele uma 
    estrutura de CSS com react StyleSheet, e onde for declarado seu componente é preciso referenciar esse objeto: */

        // Primeiro importe o StyleSheet da biblioteca react native:
        import { StyleSheet } from "react-native";

        // você cria uma variável e atribui StyleSheet.create à ela, dentro você declara a estrutura css junta:

        const estilos = StyleSheet.create({
            // cria objeto com as características desejadas:
            objeto: {
                backgroundColor: red,       // note que a estrutura é como se fosse declarar uma variável, 
                justifyContent: 'center',   // invés de 'background-color, se usa 'backgroundColor' e ',' no final
                alignItems: 'center'
            },  // botar ',' para separar os dois objetos assim como seus atributos

            cor: {
                color: red
            }
        });

        function native() {
            render(
                // em seu componente que deseja aplicar estilos, bote a declaração 'style = {variavelEstilo.objeto}'
                <>
                <View style = {estilos.objeto}> uma div </View>
                <Image style = {estilos.objeto}> uma imagem </Image>
                <Text style = {estilos.objeto}> um texto </Text>
                </>
            )
        }
        // export default native;

        // OBS: você pode aplicar dois diferentes estilos a um mesmo componente, veja:
            // é preciso por os dois dentro de colchetes: {[variavel.objeto, variavel.objeto2]}
        <> 
        <View style = {[estilos.objeto, estilos.cor]}> uma div </View>
        <Image style = {estilos.objeto}> essa imagem também terá características de 'objeto', mas não 'cor' </Image>
        </>

        // Obs: você pode criar quantas variáveis quiser com diferentes estilos para diferentes componentes
        // Obs2: o uso de 'display: flex' já vem embutida como default para todo componente, não precisa declarar


    // USO DE PROPS: 
        /* da mesma forma, apenas muda o nome, por exemplo, a ação de apertar algo é 'onClick' no js e 'onPress'
        no native, já a mudança de estado no js é onChange e no native é 'onValueChange' */

        function exemplo() {
            render (
                <>
                    <div onClick={handleDiv}> um container no react.js </div>
                    <View onPress = {handleDiv}> um container no react native </View>

                </>
            )
        }

        const handleDiv = () => {
            alert('Representação de uma função acionada quando ocorrido algum estado como o onPress');
        }

        /* ALGUMAS DIFERENÇAS LISTADAS:

        React: onClick
        React Native: onPress (ao apertar)

        React: onSubmit
        React Native: onSubmitEditing (envio de formulário)

        React: onChange
        React Native: onValueChange (mudança de estado)

        React: onChange
        React Native: onChangeText (input de texto)
        */

 
