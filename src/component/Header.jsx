import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton';
import Typical from 'react-typical';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import useSound from 'use-sound';

import BackgroundCircle from './BackgroundCircle'
import Profil from './Profil'

import '../css/Header.css'

export default function Header(props){

  const [play] = useSound(
    './musique/scroll.mp3',
    { volume: 0.4 }
  );

  const TypingAnimation =  React.memo(()=>{
    return <Typical steps={[`${props.job}\\profil`, 3500, `${props.job}\\projets` , 3500, `${props.job}\\passioné`, 3500]} loop={Infinity} wrapper="h1"/>
  });

  let lien = props.lien !== undefined ? props.lien : "/";

  const txt = 'C:\\Florian\\';

    return (
          <div id="accueil">
          <BackgroundCircle nbCercle={10} />
           <div id="blocTexte">
              <div style={{display : "flex"}}>
                <h1>{txt}</h1>
                <TypingAnimation/>
              </div>
              {props.sousTitre}
            <Profil lien={lien} image={props.image} />
          </div>
          <div style={{ display : "block", margin : "5em  auto 10em auto", textAlign : "center"}}>
          <IconButton onClick={() => {play();}} href="#bio" style={{zIndex : 2}} variant="contained"><ExpandMoreIcon id="plus" style={{width: "70px", height: "70px"}}/></IconButton>
          </div>
          <IconButton onClick={() => {play();}} href="#accueil" id="goTop" variant="contained"><ExpandLessIcon style={{backgroundColor : "rgba(3, 219, 252, 0.1)", borderRadius :"10px", width: "35px", height: "35px"}}/></IconButton>
        </div>
    );
}