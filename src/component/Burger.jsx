import React from 'react'

import './Burger.css'

export default function Burger(){

return (
    <nav id="home">
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                <a href="#home"><li>Accueil</li></a>
                <a href="#bio" ><li>Bio</li></a>
                <a href="#mesProjets"><li>Projets</li></a>
                <a href="#competences"><li>Compétences</li></a>
                <a href="CV_Florian_TORIBIO.pdf" target="_blank"><li>CV</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </div>
    </nav>
);

}