import React from 'react'
import BackgroundCircle from '../component/BackgroundCircle'
import NavBar from '../component/NavBar'
import Profil from '../component/Profil'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {IconButton} from '@material-ui/core'
import Typical from 'react-typical';

export default function Header(){

    return (
        <div id="home">
          <BackgroundCircle nbCercle={12} />
          <NavBar/>
          <div id="header">
            <div style={{marginTop : "3%", display : 'flex', flexDirection: "column", alignItems : 'center', fontFamily: "'Source Code Pro', monospace"}}>
              <Typical steps={['C:\\user\\Florian>Projet', 3000, 'C:\\user\\Florian>Profil', 3000]} loop={Infinity} wrapper="h1"/>
              <h2 id="sousTitre" style={{fontWeight: "100"}}>Bonjour, bienvenue sur mon site web</h2>
            </div>
            <Profil/>
          </div>
          <IconButton onMouseEnter={() => {document.location.href="#mesProjets";}} href="#mesProjets" style={{display : "block", margin : "50px auto", width: "90px", height: "90px"}} variant="contained"><ExpandMoreIcon style={{width: "70px", height: "70px"}}/></IconButton>
        </div>
    );
}