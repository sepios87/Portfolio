import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Bounce from 'react-reveal/Bounce';
import useSound from 'use-sound';

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: "rgba(255, 108, 92, 0.3)",
  },
  bar: {
    borderRadius: 20,
    backgroundColor: 'rgb(255, 108, 92)',
  },
})(LinearProgress);

function barreProgression(nom, valeur, i){
  return (
    <div style={{display: "flex", flexDirection : "column", padding : "2%"}} key={i} >
      <Typography style={{textAlign : "center"}} gutterBottom variant="h6" component="h3">{nom}</Typography>
      <BorderLinearProgress style={{width : "70%", margin : "0 auto 15px"}} variant="determinate" value={valeur}/>
    </div>
  );
}

export default function SkillPhoto(props){

  const [play] = useSound(
    './musique/click.mp3',
    { volume: 0.55 }
  );
  
    return (
      <Bounce>
      <Card style={{width : "100%", marginBottom: "50px"}}>
        <CardActionArea onClick={() => {play();}}>
          <CardContent style={{width : "100%"}}>
              <div>
              {props.tab.map((elem, i) => (
                    barreProgression(elem.nom, elem.valeur, i)
                ))}
              </div>
          </CardContent>
        </CardActionArea>
      </Card>
      </Bounce>
    );

}