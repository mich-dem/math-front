import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";


export const Header = () => {

    return (
        <header>
            <Link to='add'>
                <button>Dodawanie</button>
            </Link>
            <Link to='sub'>
                <button>Odejmowanie</button>
            </Link>
            <Link to='mult'>
                <button>Mnożenie</button>
            </Link>
            <Link to='divid'>
                <button>Dzielenie</button>
            </Link>
            <Link to='res'>
                <button className="lastBtn">Wyniki</button>
            </Link>
        </header>
    )
}