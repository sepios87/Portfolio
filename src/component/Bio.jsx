import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ParallaxCache from './ParallaxCache';
import Rotate from 'react-reveal/Rotate';

import BackBubble from './BackBubble'
import Button from './Button'

import '../css/Bio.css'

export default function Bio(props){

  return ( 
    <ParallaxProvider>
      <ParallaxCache/>
      <Parallax y={[10, -20]}>
      <Rotate bottom left>
        <Card id="carteBio">
        <BackBubble	nbCercle={4}/>
          <CardMedia title="image bio" id="imgBio" image={props.lien}/>
            <CardContent id="bio">
              <div>
                <Typography component="h5" variant="h5">Florian TORIBIO</Typography>
                <Typography variant="subtitle1" color="textSecondary">{props.job}</Typography>
                <p id="txtBio">{props.texte}</p>
                <Button href="CV_Florian_TORIBIO.pdf">Télécharger mon CV</Button>
              </div>
              <div id="timeLine"> 
              <Parallax y={[5, -8]}>
                {props.timeLine}
              </Parallax>
              </div>
            </CardContent>
        </Card>
        </Rotate>
      </Parallax>
    </ParallaxProvider>
  );
}