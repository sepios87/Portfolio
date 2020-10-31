import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Carte from '../component/Carte'
import ParallaxCache from '../component/ParallaxCache'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BackBubble from '../component/BackBubble'

export default function Projets(){

  const matches = useMediaQuery('(min-width:992px)');

    return (
      <ParallaxProvider >
        <ParallaxCache/>
        <div id="projetGroupe">
        <div className="projet" id="mesProjets">
        <Parallax y={matches ? [-30, -80] : [-10, -20]}>
          <BackBubble	nbCercle={2}/>
          <Carte source="./Pilaf.PNG" nom="Projet Pilaf" txt="Projet scolaire réalisé avec un client factice. Ce site est 
            pensé pour repondre au besoin d'une application de gestion web"/>
          <BackBubble	nbCercle={3}/>
      </Parallax>
      <Parallax y={matches ? [10, -70] : [0, -20]}>
          <Carte source="./FollementTpsDanse.PNG" nom="Follement temps danse" txt="Site réalisé avec l'association Follement Temps Danse 
            association de danse à Versailles. Réalisé avec du wordPress"/>
      </Parallax>
        </div>
        <div className="projet">
        <Parallax y={matches ? [0, -90] : [0, -10]} x={matches ? [-15, -15] : [0, 0]}>
          <Carte source="./SpaceInvader.PNG" nom="Space invader" txt="Projet scolaire réalisé en Java pour s'entrainer aux tests."/>
      </Parallax>
      <Parallax y={matches ? [0, -60] : [0, -20]} x={matches ? [-50, -50] : [0, 0]}>
          <Carte source="./david.PNG" nom="David Lemonade" txt="Projet scolaire de site web réalisé à partir du charte graphique imposée."/>
          <BackBubble	nbCercle={4}/>
      </Parallax>
        </div>
        <div className="projet">
        <Parallax y={matches ? [0, -70] : [0, -10]} x={matches ? [0, 0] : [0, 0]}>
          <Carte source="./Jean.PNG" nom="Jean" txt="Premier de mes programmes qui est un jeu développé en Java. C'est un sorte de agario en .exe avec des petites choses en plus."/>
          <BackBubble	nbCercle={2}/>
      </Parallax>
      <Parallax y={matches ? [0, -30] : [0, -30]} x={matches ? [-10, -10] : [0, 0]}>
          <Carte source="./portfolio.PNG" nom="Portfolio" txt="Site web qui me représente développé entièrement en réact."/>
          <BackBubble	nbCercle={4}/>
      </Parallax>
        </div>
        </div>
      </ParallaxProvider>
    );
}