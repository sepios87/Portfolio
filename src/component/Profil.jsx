import React from "react";
import { Link } from 'react-router-dom';
import CodeIcon from '@material-ui/icons/Code';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Tooltip from '@material-ui/core/Tooltip';
import useSound from 'use-sound';

import './Profil.css'

export default function Profil(props) {

  const rayon = "250px"

  const [play] = useSound(
    './musique/blop.mp3',
    { volume: 0.4 }
  );

  return (
      <Link to={props.lien} id = "profilLien">
        <Tooltip title="Accéder au portfolio développeur" arrow>
          <CodeIcon onMouseEnter={() => {play();}} className="iconProfil" style={(props.lien === "/photo") ? ({visibility: "hidden"}) : ({visibility: "visible", right : 100, width: "32px", height : "32px"})} /> 
        </Tooltip>
        <span id="profil" style={{position : "absolute", zIndex : 10, borderRadius : "50%", width : rayon, height : rayon, backgroundImage: "url("+props.image+")", backgroundSize: "cover"}}></span>
        <video loop autoPlay muted style={{position : "absolute", zIndex : 9, borderRadius : "50%", width : rayon, height : rayon}}>
          <source src="./images/profilDeux.mp4" type='video/mp4' />
        </video>
        <Tooltip title="Accéder au portfolio photographe" arrow>
          <PhotoCameraIcon onMouseEnter={() => {play();}} className="iconProfil" style={(props.lien === "/dev") ? ({visibility: "hidden"}) : ({visibility: "visible", left : 100, width: "32px", height : "32px"})}/>
        </Tooltip>
      </Link>
  );
}
