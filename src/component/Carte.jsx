import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Zoom from 'react-reveal/Zoom';
import useSound from 'use-sound';

import BackBubble from './BackBubble'
import Button from './Button'
import Dialog from './DialogCarte';

import '../css/Carte.css'

export default function Carte(props) {

  const [play] = useSound(
    './musique/click.mp3',
    { volume: 0.55 }
  );

  const [open, setOpen] = useState(false);

  return (
    <>
      <Zoom>
        <BackBubble	nbCercle={2}/>
        <Card className="carte">
          <CardActionArea onClick={() => {
            play();
            setOpen(true);
            }} >
            <CardMedia style={{height: "160px"}} image={props.source} title="projet"/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{textAlign : "center"}}>{props.nom}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button onClick={() => setOpen(true)}>Découvrir ce projet</Button>
          </CardActions>
        </Card>
        <BackBubble	nbCercle={2}/>
      </Zoom>
      <Dialog handleClose={() => setOpen(false)} open={open} title={props.nom} langage={props.langage} content={props.txt} lien={props.lien} image={props.source}/>
    </>
  );
}