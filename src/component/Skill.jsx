import React from 'react';
import {LinearProgress} from '@material-ui/core';
import { lighten, withStyles } from '@material-ui/core/styles';
import {Card,CardActionArea, CardContent, Typography}  from '@material-ui/core';
import Bounce from 'react-reveal/Bounce';
import useSound from 'use-sound';

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#ff6c5c', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#ff6c5c',
  },
})(LinearProgress);

function barreProgression(sourceImg, valeur, i){
  return (
    <div style={{display: "flex", padding : "2%"}} key={i} >
      <img src={sourceImg} alt="Logo" style={{width : "45px"}} />
      <BorderLinearProgress style={{width : "80%", margin : "auto"}} variant="determinate" value={valeur}/>
    </div>
  );
}

export default function Competences(props){

  const [play] = useSound(
    './musique/click.mp3',
    { volume: 0.55 }
  );
  
    return (
      <Bounce>
      <Card style={{width : "100%", marginBottom: "50px"}}>
        <CardActionArea onClick={() => {play();}}>
          <CardContent style={{width : "100%"}}>
            <Typography style={{textAlign : "center"}} gutterBottom variant="h5" component="h2">{props.nom}</Typography>
              <div>
              {props.tab.map((elem, i) => (
                    barreProgression(elem.source, elem.valeur, i)
                ))}
              </div>
          </CardContent>
        </CardActionArea>
      </Card>
      </Bounce>
    );

}