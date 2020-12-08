import React from "react";
import { Link } from 'react-router-dom';
import ComputerIcon from '@material-ui/icons/Computer';
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

  const [playTransform] = useSound (
    '/musique/transform.mp3'
  );

  return (
      <div id = "profilLien">
        <Link to='/dev' >
          <Tooltip title="Accéder au portfolio développeur" arrow>
            <ComputerIcon onClick={() => {playTransform();}} onMouseEnter={() => {play();}} className="iconProfil" style={(props.lien === "/photo") ? ({backgroundColor: "rgba(3, 219, 252, 0.15)", right : "4.8em"}) : ({backgroundColor: "rgba(0, 0, 0, 0)", right : "4.8em", animation: "pulseRed 1.5s infinite"})} /> 
          </Tooltip>
        </Link>
          <span id="profil" style={{position : "absolute", zIndex : 10, borderRadius : "50%", width : rayon, height : rayon, backgroundImage: "url("+props.image+")", backgroundSize: "cover"}}></span>
          <video loop autoPlay muted style={{position : "absolute", zIndex : 9, borderRadius : "50%", width : rayon, height : rayon}}>
            <source src="./images/profilDeux.mp4" type='video/mp4' />
          </video>
          <Link to='/photo' >
            <Tooltip title="Accéder au portfolio photographe" arrow>
              <PhotoCameraIcon onClick={() => {playTransform();}} onMouseEnter={() => {play();}} className="iconProfil" style={(props.lien === "/dev") ? ({backgroundColor: "rgba(3, 219, 252, 0.15)", left : "4.8em"}) : ({backgroundColor: "rgba(0, 0, 0, 0)", left : "4.8em", animation: "pulseRed 1.5s infinite"})}/>
            </Tooltip>
        </Link>
      </div>
  );
}
