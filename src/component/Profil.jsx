import React from "react";
import { Link } from 'react-router-dom';
import CodeIcon from '@material-ui/icons/Code';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import './Profil.css'

export default function Profil(props) {

  return (
      <Link to={props.lien} id = "profilLien">
        <CodeIcon className="iconProfil" style={(props.lien === "/photo") ? ({visibility: "hidden"}) : ({visibility: "visible", left : 20, position : 'relative', top : '220px', color : "rgb(3, 219, 252)"})} /> 
        <span id="profil" style={{zIndex : 10, borderRadius : "50%", width : 250, height : 250, backgroundImage: "url("+props.image+")", backgroundSize: "cover"}}></span>
        <span style={{position : "absolute", zIndex : 9, borderRadius : "50%", width : 250, height : 250, backgroundImage: "url(./images/profilDeux.gif)", backgroundSize: "cover"}}></span>
        <PhotoCameraIcon className="iconProfil" style={(props.lien === "/") ? ({visibility: "hidden"}) : ({visibility: "visible", right : 20, position : 'relative', top : '220px', color : "rgb(3, 219, 252)"})}/>
      </Link>
  );
}
