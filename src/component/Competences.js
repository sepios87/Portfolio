import React from 'react';
import {LinearProgress} from '@material-ui/core';
import { lighten, withStyles } from '@material-ui/core/styles';
import {Card,CardActionArea, CardContent, Typography}  from '@material-ui/core';

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
  
    return (
        <Card style={{width: "25%"}}>
        <CardActionArea>
          <CardContent>
            <Typography style={{textAlign : "center"}} gutterBottom variant="h5" component="h2">{props.nom}</Typography>
              <div>
              {props.tab.map((elem, i) => (
                    barreProgression(elem.source, elem.valeur, i)
                ))}
              </div>
          </CardContent>
        </CardActionArea>
      </Card>
    );

}