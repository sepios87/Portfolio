import React from "react";
import { Link } from 'react-router-dom';
import CodeIcon from '@material-ui/icons/Code';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import './Profil.css'

export default function Profil(props) {

  const style={
    display : 'flex', 
    justifyContent : 'center', 
    height:'250px', 
    marginTop : "2%",
  }

  return (
      <Link to={props.lien} style={style}>
        <CodeIcon className="iconProfil" style={(props.lien === "/photo") ? ({visibility: "hidden"}) : ({visibility: "visible", left : 20, position : 'relative', top : '220px', color : "rgb(3, 219, 252)"})} /> 
        <span id="profil" style={{zIndex : 10, boxShadow : "10px 5px 5px rgba(255, 255, 255, 0.1)", borderRadius : "50%", width : 250, height : 250, backgroundImage: "url("+props.image+")", backgroundSize: "cover"}}></span>
        <span style={{position : "absolute", zIndex : 9, boxShadow : "10px 5px 5px rgba(255, 255, 255, 0.1)", borderRadius : "50%", width : 250, height : 250, backgroundImage: "url(./images/profilDeux.jpg)", backgroundSize: "cover"}}></span>
        <PhotoCameraIcon className="iconProfil" style={(props.lien === "/") ? ({visibility: "hidden"}) : ({visibility: "visible", right : 20, position : 'relative', top : '220px', color : "rgb(3, 219, 252)"})}/>
      </Link>
  );
}
