import React from 'react';
import {Card, CardContent, CardMedia, Typography}  from '@material-ui/core';
import ParallaxCache from './ParallaxCache';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Rotate from 'react-reveal/Rotate';

import BackBubble from './BackBubble'
import Button from './Button'

import './Bio.css'

export default function Bio(props){

  return (
    <div style={{display : "block", margin : "auto", width : "75%", marginBottom: "50px"}}>
    <ParallaxProvider>
      <ParallaxCache/>
      <Parallax y={[10, -20]}>
      <BackBubble	nbCercle={4}/>
      <Rotate bottom left>
        <Card style={{display : "flex"}}>
          <CardMedia id="imgBio" style={{width: "250px"}} image="./images/profilBio.jpeg"/>
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
    </div>
  );
}