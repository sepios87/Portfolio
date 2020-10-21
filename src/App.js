import React from 'react';
import BackgroundCircle from './component/BackgroundCircle';
import NavBar from './component/NavBar'
import Profil from './component/Profil'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import MediaControlCard from './component/projetCarte'
import Typical from 'react-typical';
import Competences from './component/Competences'
import './App.css';

const titre = "C:\\user\\Florian>"

const langage = [
    {source: "./svg/003-java.svg",
    valeur: 70}, 
    {source: "./svg/006-react.svg",
    valeur: 70},
    {source: "./svg/010-github.svg",
    valeur: 70},
    {source: "./svg/018-c.svg",
    valeur: 70},
    {source: "./svg/021-mysql.svg",
    valeur: 70},
    {source: "./svg/027-php.svg",
    valeur: 70},
    {source: "./svg/029-javascript.svg",
    valeur: 70},
    {source: "./svg/030-html-5.svg",
    valeur: 70},
    {source: "./svg/031-css.svg",
    valeur: 70},
    {source: "./svg/032-nodejs.svg",
    valeur: 70},
  ];

function App() { 

  //x={[-10, 0]} 1er : position depart, 2 : position arrivé
  
    return (
      <div>
        <NavBar/>
        <div style={{marginTop : "3%", display : 'flex', flexDirection: "column", alignItems : 'center', fontFamily: "'Source Code Pro', monospace"}}>
            <div style={{display : 'flex'}}>
              <h1 style={{fontWeight: "400"}}>{titre}</h1>
              <Typical style={{fontWeight: "400", fontSize:"150%"}} steps={['Projet', 3000, 'Profil', 3000]} loop={Infinity} wrapper="h1"/>
            </div>
            
          <h2 style={{fontWeight: "100"}}>Bonjour, bienvenue sur mon site web</h2>
        </div>
        <BackgroundCircle nbCercle="10" />
        <Profil/>
        <ParallaxProvider>
          <div style={{display : 'flex',justifyContent : 'center', paddingTop : "300px", paddingBottom:"500px"}}>
          <Parallax y={[0, 0]} x={[-20, 0]}>
            <MediaControlCard/>
        </Parallax>
        <Parallax y={[0, 100]}  x={[0, 35]}>
            <MediaControlCard/>
        </Parallax>
        <Parallax y={[0, -50]}  x={[-30, 0]}>
            <MediaControlCard/>
        </Parallax>
          </div>

        </ParallaxProvider>
        <Competences tab={langage}/>
      </div>
    );
}

export default App;
