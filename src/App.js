import React from 'react';
import BackgroundCircle from './component/BackgroundCircle';
import NavBar from './component/NavBar'
import Profil from './component/Profil'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import MediaControlCard from './component/projetCarte'
import Typical from 'react-typical';
import Competences from './component/Competences'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './App.css';

const titre = "C:\\user\\Florian>"

const langage = [
    {source: "./svg/003-java.svg",
    valeur: 70}, 
    {source: "./svg/006-react.svg",
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

  const logiciel = [
    {source: "./svg/visual-studio.svg",
    valeur: 70}, 
    {source: "./svg/eclipse.svg",
    valeur: 70}, 
    {source: "./svg/atom.svg",
    valeur: 70}, 
    {source: "./svg/azure.svg",
    valeur: 70}, 
    {source: "./svg/word.svg",
    valeur: 70}, 
    {source: "./svg/lightroom.svg",
    valeur: 70}, 
    {source: "./svg/photoshop.svg",
    valeur: 70}
  ];

function App() { 

  //x={[-10, 0]} 1er : position depart, 2 : position arrivé
  
    return (
      <div>
        <NavBar/>
        <div id="header">
          <div style={{marginTop : "3%", display : 'flex', flexDirection: "column", alignItems : 'center', fontFamily: "'Source Code Pro', monospace"}}>
              <div style={{display : 'flex'}}>
                <h1 style={{fontWeight: "400"}}>{titre}</h1>
                <Typical style={{fontWeight: "400", fontSize:"150%"}} steps={['Projet', 3000, 'Profil', 3000]} loop={Infinity} wrapper="h1"/>
              </div>
              
            <h2 style={{fontWeight: "100"}}>Bonjour, bienvenue sur mon site web</h2>
          </div>
          <BackgroundCircle nbCercle="10" />
          <Profil/>
          <ExpandMoreIcon style={{display : 'block', margin : "10% auto 5%", width: "60px", height: "60px"}}/>
        </div>
        
        <ParallaxProvider>
          <div style={{display : 'flex', justifyContent : 'space-around', paddingBottom:"100px"}}>
          <Parallax y={[0, -20]} x={[50, 0]}>
            <MediaControlCard/>
        </Parallax>
        <Parallax y={[-10, -60]}>
            <MediaControlCard/>
        </Parallax>
        <Parallax y={[0, -20]}  x={[-50, 0]}>
            <MediaControlCard/>
        </Parallax>
          </div>
        </ParallaxProvider>
        <div style={{backgroundColor : "rgba(3, 219, 252, 0.3)", height : "200px"}}></div>
        <ParallaxProvider>
            <Parallax y={["-50px", "-180px"]}>
              <div style={{display : 'flex', justifyContent : 'space-around'}}>
                <Competences nom="Langages" tab={langage}/>
                <Competences nom="Logiciels" tab={logiciel}/>
              </div>
            </Parallax>
        </ParallaxProvider>
      </div>
    );
}

export default App;
