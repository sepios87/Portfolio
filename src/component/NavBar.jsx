import React from 'react'
// import Nav from 'react-bootstrap/Nav'
import useSound from 'use-sound';

import '../css/NavBar.css'
 
export default function NavBar(){
  
  const [play] = useSound(
    './musique/scroll.mp3',
    { volume: 0.4 }
  );
 
    return (
      <nav id="navbar" style={{position : "relative", zIndex : 2, color : "black", display : "flex", alignContent : "space-around", justifyContent : "flex-end", margin : "1.5% 3% 0 0"}}>
        <a href="#accueil">Accueil</a>
        <a onClick={() => {play();}} href="#bio">Bio</a>
        <a onClick={() => {play();}} href="#mesProjets">Mon travail</a>
        <a onClick={() => {play();}} href="#competences">Compétences</a>
        <a href="CV_Florian_TORIBIO.pdf" target="_blank">CV</a>
        <a onClick={() => {play();}} href="#contact">Contact</a>
      </nav>
    );
}