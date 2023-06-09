import {React} from 'react';

import './card.css'

export default function Card(){
    return (
        <>
        <div className="card">
            <h2 className="titleCard">Links Úteis</h2>
            <ul className="listCard">
                <li>Feiticeiros & Classes</li>
                <li>Perícias & Talentos</li>
                <li>Energia Amaldiçoada</li>
                <li>Maldiçoes</li>
            </ul>
        </div>
        </>
    )
}