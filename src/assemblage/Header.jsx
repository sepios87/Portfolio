import React from 'react'
import BackgroundCircle from '../component/BackgroundCircle'
import NavBar from '../component/NavBar'
import Profil from '../component/Profil'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {IconButton} from '@material-ui/core'
import Typical from 'react-typical';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Burger from '../component/Burger'
import './Header.css'


export default function Header(props){

  const matches = useMediaQuery('(min-width:992px)');

  let lien = props.lien !== undefined ? props.lien : "/";

    return (
        <div id="home">
          <BackgroundCircle nbCercle={12} />
          {matches ? <NavBar/> : <Burger/>}
          <div id="header">
            <div style={{marginTop : "3%", display : 'flex', flexDirection: "column", alignItems : 'center', fontFamily: "'Source Code Pro', monospace"}}>
              <Typical steps={['C:\\Florian\\'+props.job+'>projets', 3000, 'C:\\Florian\\'+props.job+'>profil', 3000]} loop={Infinity} wrapper="h1"/>
              <h2 id="sousTitre">Vous entrez dans mon monde</h2>
            </div>
            <Profil lien={lien} image={props.image} />
          </div>
          <IconButton onMouseEnter={() => {document.location.href="#mesProjets";}} href="#mesProjets" style={{display : "block", margin : "80px auto", width: "90px", height: "90px"}} variant="contained"><ExpandMoreIcon style={{width: "70px", height: "70px"}}/></IconButton>
          <IconButton href="#home" style={{zIndex : "10", position: "fixed", bottom :"30px", right : "50px"}} variant="contained"><ExpandLessIcon style={{backgroundColor : "rgba(3, 219, 252, 0.1)", borderRadius :"10px", width: "35px", height: "35px"}}/></IconButton>
        </div>
    );
}