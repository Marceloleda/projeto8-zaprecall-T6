import React from 'react'
import '../top/style-top.css'
import Questions from '../questions/questions';

export default function Top(){
    const logo ="../src/assets/img/logo.png";
    return(
        <>
            <section>
                <header>
                    <img src={logo} alt="logo" width="52px" height="60px" />
                    <h1>ZapRecall</h1>
                </header>
                <Questions />
            </section>
        </>
    );
}