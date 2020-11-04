import React from 'react'
import BackgroundCircle from './BackgroundCircle'
import Profil from './Profil'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {IconButton} from '@material-ui/core'
import Typical from 'react-typical';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import './Header.css'

export default function Header(props){

  let lien = props.lien !== undefined ? props.lien : "/";

    return (
          <div id="home">
          <BackgroundCircle nbCercle={12} />
            <div id="blocTexte">
              <Typical steps={['C:\\Florian\\'+props.job+'>projets', 3000, 'C:\\Florian\\'+props.job+'>profil', 3000]} loop={Infinity} wrapper="h1"/>
              <h2 id="sousTitre">Vous entrez dans mon monde</h2>
            <Profil lien={lien} image={props.image} />
          </div>
          <IconButton href="#bio" style={{display : "block", margin : "5% auto", width: "90px", height: "90px"}} variant="contained"><ExpandMoreIcon id="plus" style={{width: "70px", height: "70px"}}/></IconButton>
          <IconButton href="#home" style={{zIndex : "10", position: "fixed", bottom :"30px", right : "50px"}} variant="contained"><ExpandLessIcon style={{backgroundColor : "rgba(3, 219, 252, 0.1)", borderRadius :"10px", width: "35px", height: "35px"}}/></IconButton>
        </div>
    );
}