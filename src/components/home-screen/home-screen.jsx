import '../home-screen/style-home.css';
import React from 'react';
import Top from '../top/top';
import Footer from '../footer/footer';


export default function HomeScreen(){
    const logo = "./assets/img/logo.png";

    const [secao, setSecao] = React.useState(
        <section>
            <img className="logo1" src={logo} alt="logo" width="136px" height="161px" />
            <h1>ZapRecall</h1>
            <button onClick={() => setSecao(<Top />)}>Iniciar Recall!</button>
        </section>
    );
    return(
        <>
            {secao}
        </>
    );
}