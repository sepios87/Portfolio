import React from 'react'
import useSound from 'use-sound';

import './Burger.css'

export default function Burger(){

    const [play] = useSound(
        './musique/scroll.mp3',
        { volume: 0.4 }
      );

    return (
        <nav id="home">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <li><a href="#home">Accueil</a></li>
                    <li><a onClick={() => {play();}} href="#bio" >Bio</a></li>
                    <li><a onClick={() => {play();}} href="#mesProjets">Projets</a></li>
                    <li><a onClick={() => {play();}} href="#competences">Compétences</a></li>
                    <li><a href="CV_Florian_TORIBIO.pdf" target="_blank">CV</a></li>
                    <li><a onClick={() => {play();}} href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );

}