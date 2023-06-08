import {React} from 'react';

import './header.css'

export default function Header(){
    return (
        <>
        <header className="headerMenu">
            <h2 className="title">Jujutsu Kaisen</h2>
            <ul className="headerList">
                <li>Comunidade</li>
                <li>Sistema</li>
                <li>Cadastro</li>
            </ul>
            <div className="overlayHeader"></div>
        </header>
        </>
    )
}