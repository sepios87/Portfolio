import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Zoom from 'react-reveal/Zoom';
import useSound from 'use-sound';

import Button from './Button'

import './Carte.css'

export default function Carte(props) {

  const [play] = useSound(
    './musique/click.mp3',
    { volume: 0.55 }
  );

  return (
    <Zoom>
      <Card className="carte">
        <CardActionArea onClick={() => {play();}} >
          <CardMedia style={{height: "160px"}} image={props.source} title="projet"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign : "center"}}>{props.nom}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">{props.txt}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button href={props.lien}>Découvrir ce projet</Button>
        </CardActions>
      </Card>
    </Zoom>
  );
}