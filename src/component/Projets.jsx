import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Carte from './Carte'
import ParallaxCache from './ParallaxCache'

import '../css/Projets.css'

export default function Projets(){

  const matches = useMediaQuery('(min-width:992px)');

    return (
      <>
      <ParallaxProvider >
        <ParallaxCache/>
        <div id="projetGroupe">
        <div className="projet" id="mesProjets">
        <Parallax y={matches ? [-60, -120] : [0, -20]}>
          <Carte source="./images/Pilaf.png" lien="https://sawangg.github.io/Pilaf/" nom="Projet Pilaf" txt="Projet scolaire réalisé avec un client factice. Ce site est 
            pensé pour répondre aux besoins d'une application de gestion web. Nous avons réalisé ce projet en équipe de 4 sur une durée de 2 mois."/>
      </Parallax>
      <Parallax y={matches ? [30, -100] : [0, -20]}>
          <Carte source="./images/FollementTpsDanse.png" lien="https://follement-temps-danse.com/" nom="Follement temps danse" txt="Site réalisé avec l'association Follement Temps Danse 
            association de danse à Versailles. Réalisé avec du WordPress. C'est un site vitrine qui correspond à la refonte d'un ancien site web (en reprenant une logique de couleurs et de contenu)."/>
      </Parallax>
        </div>
        <div className="projet">
        <Parallax y={matches ? [0, -120] : [0, -10]} x={matches ? [-15, -15] : [0, 0]}>
          <Carte source="./images/SpaceInvader.png" lien="https://github.com/sepios87/Space-Invaders-TDD" nom="Space invader" txt="Projet scolaire réalisé en Java pour s'entraîner aux tests. Il reprend le principe du
          jeu Space Invaders : un jeu rétro avec des extraterrestres !"/>
      </Parallax>
      <Parallax y={matches ? [20, -60] : [0, -20]} x={matches ? [-30, -30] : [0, 0]}>
          <Carte source="./images/david.png" lien="https://sepios87.github.io/Site-Web-David-Lemonade/" nom="David Lemonade" txt="Projet scolaire de site web one page réalisé à partir d'une charte graphique imposée.
          Cette one-page devait être le site vitrine de l'association Cambava, un producteur de limonade. Nous l'avons réalisé en groupe de 3 sur une durée d'un mois."/>
      </Parallax>
        </div>
        <div className="projet">
        <Parallax y={matches ? [0, -70] : [0, -15]} x={matches ? [0, 0] : [0, 0]}>
          <Carte source="./images/Jean.png" lien="https://github.com/sepios87/Jean" nom="Jean" txt="Premier de mes programmes qui est un jeu développé en Java. C'est une sorte d'agario en .exe avec des éléments supplémentaires. Développé en classe de Terminale en cours d'ISN.
          Je le présente sur ce portfolio car même si le code n'est pas le plus beau, cela montre qu'on commence à un moment et c'est source de nostalgie !"/>
      </Parallax>
      <Parallax y={matches ? [80, -70] : [0, -30]} x={matches ? [-10, -10] : [0, 0]}>
          <Carte source="./images/portfolio.png" lien="#" nom="Portfolio" txt="Site web qui me représente, développé entièrement en React JS. Codé pendant 2 mois sur une durée d'environ 100 heures.
          A travers ce portfolio, j'ai voulu m'exprimer pleinement et j'ai donc créé une véritable identité graphique liant mon CV à mon portfolio."/>
      </Parallax>
        </div>
        </div>
      </ParallaxProvider>
      </>
    );
}