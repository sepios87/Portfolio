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
                    <a href="#home"><li>Accueil</li></a>
                    <a onClick={() => {play();}} href="#bio" ><li>Bio</li></a>
                    <a onClick={() => {play();}} href="#mesProjets"><li>Projets</li></a>
                    <a onClick={() => {play();}} href="#competences"><li>Compétences</li></a>
                    <a href="CV_Florian_TORIBIO.pdf" target="_blank"><li>CV</li></a>
                    <a onClick={() => {play();}} href="#contact"><li>Contact</li></a>
                </ul>
            </div>
        </nav>
    );

}