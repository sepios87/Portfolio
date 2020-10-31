import React from 'react';
import {Card, CardContent, CardMedia, Typography}  from '@material-ui/core';
import TimeLine from "../component/TimeLine"
import ParallaxCache from '../component/ParallaxCache';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import BackBubble from '../component/BackBubble'

export default function Bio(){

  return (
    <ParallaxProvider>
      <ParallaxCache/>
      <Parallax y={[10, -20]}>
      <BackBubble	nbCercle={4}/>
        <Card style={{display : "flex"}}>
          <CardMedia id="imgBio" style={{width: "250px"}} image="./profil.jpg"/>
            <CardContent id="bio">
              <div>
                <Typography component="h5" variant="h5">Florian TORIBIO</Typography>
                <Typography variant="subtitle1" color="textSecondary">Développeur</Typography>
                <p id="txtBio">
                        Etudiant en IUT Informatique, je suis aussi auto-entrepreneur. 
                        J'apprécie beaucoup le contact humain et aime aider les 
                        gens à trouver des solutions adaptées à leurs besoins 
                        grâce à l’informatique. Pour y parvenir, j’aime travailler 
                        en équipe, mais je suis aussi capable de mener un projet 
                        seul. Les personnes avec qui je travaille mettent en 
                        avant mon sérieux, mon écoute et mon adaptabilité.</p>
                  <a href="http://sepios.fr/" style={{display : "block", margin : "20px auto"}} className="myButton">Télécharger mon CV</a>
              </div>
              <div id="timeLine"> 
                <TimeLine />
              </div>
            </CardContent>
        </Card>
      </Parallax>
    </ParallaxProvider>
  );
}