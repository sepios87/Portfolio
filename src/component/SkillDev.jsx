import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Bounce from 'react-reveal/Bounce';
import useSound from 'use-sound';
import BackBubble from './BackBubble'

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

function barreProgression(sourceImg, valeur, i){
  return (
    <div style={{display: "flex", padding : "2%"}} key={i} >
      <img src={sourceImg} alt="Logo" style={{width : "45px", height:"45px"}} />
      <BorderLinearProgress style={{width : "80%", margin : "auto"}} variant="determinate" value={valeur}/>
    </div>
  );
}

export default function SkillDev(props){

  const [play] = useSound(
    './musique/click.mp3',
    { volume: 0.55 }
  );
  
    return (
      <Bounce>
      <Card style={{width : "100%", marginBottom: "50px"}}>
      <BackBubble	nbCercle={3}/>
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