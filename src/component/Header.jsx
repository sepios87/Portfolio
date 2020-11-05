import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {IconButton} from '@material-ui/core'
import Typical from 'react-typical';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import useSound from 'use-sound';

import BackgroundCircle from './BackgroundCircle'
import Profil from './Profil'

import './Header.css'

export default function Header(props){

  const [play] = useSound(
    './musique/scroll.mp3',
    { volume: 0.3 }
  );

  let lien = props.lien !== undefined ? props.lien : "/";

  const txt = 'C:\\Florian\\'+props.job+'>';

    return (
          <div>
          <BackgroundCircle nbCercle={12} />
            <div id="blocTexte">
              <div style={{display : "flex"}}>
                <h1 style={{marginTop : "2px"}}>{txt}</h1>
                <Typical steps={["profil", 3000, "projets" , 3000]} loop={Infinity} wrapper="h1"/>
              </div>
              <h2 id="sousTitre">Vous entrez dans mon monde</h2>
            <Profil lien={lien} image={props.image} />
          </div>
          <IconButton onClick={() => {play();}} href="#bio" style={{display : "block", margin : "5% auto", width: "90px", height: "90px"}} variant="contained"><ExpandMoreIcon id="plus" style={{width: "70px", height: "70px"}}/></IconButton>
          <IconButton onClick={() => {play();}} href="#home" style={{zIndex : "10", position: "fixed", bottom :"30px", right : "30px"}} variant="contained"><ExpandLessIcon style={{backgroundColor : "rgba(3, 219, 252, 0.1)", borderRadius :"10px", width: "35px", height: "35px"}}/></IconButton>
        </div>
    );
}