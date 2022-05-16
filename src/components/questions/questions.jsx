import React from 'react';
import '../questions/style-questions.css'
import Footer from '../footer/footer';

export default function Questions(){
    const perguntas = [
        {
            "Pergunta":"O que é JSX?",
            "Resposta":"Uma extensão de linguagem do JavaScript"
        },
        {
            "Pergunta":"O React é __",
            "Resposta":"uma biblioteca JavaScript para construção de interfaces"
        },
        {
            "Pergunta":"Componentes devem iniciar com __",
            "Resposta":"letra maiúscula"
        },
        {
            "Pergunta":"Podemos colocar __ dentro do JSX",
            "Resposta":"expressões"
        },
        {
            "Pergunta":"O ReactDOM nos ajuda __ ",
            "Resposta":"interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            "Pergunta":"Usamos o npm para __",
            "Resposta":"gerenciar os pacotes necessários e suas dependências"
        },
        {
            "Pergunta":"gerenciar os pacotes necessários e suas dependências",
            "Resposta":"passar diferentes informações para componentes"
        },
        {
            "Pergunta":"Usamos estado (state) para __",
            "Resposta":"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
        
    ]
    // onClick={() => props.setMostraCartas("2")}

    return(
        <>
            <div className='card'>
                <h1>Pergunta 1</h1>
                <ion-icon size="large" name="play-outline"></ion-icon>
            </div> 
            <Footer />
        </>
    );
}