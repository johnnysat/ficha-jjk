import { React } from 'react';

import mainImage from './../../images/jjk-main.jpg'
import './main.css'

export default function Main() {
    return (
        <>
            <div className="mainBox">
                <h1>UM PRG DE JUJUTSU KAISEN</h1>
                <p>Jujutsu Kaisen é um mangá japonês escrito e ilustrado por Gege Akutami,
                    serializado na Weekly Shōnen Jump desde 5 de março de 2018. Os capítulos individuais
                    são compilados em volume tankōbon, e publicados pela Shueisha desde julho de 2018.
                    A série é licenciada e publicada no Brasil pela editora Panini.</p>
            </div>
            <img 
            src={mainImage} 
            alt="Três personagens do anime, respectivamente: Megumi, Itadori e Gojo"
            />
        </>
    )
}