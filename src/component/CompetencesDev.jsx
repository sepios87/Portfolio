import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import Skill from './SkillDev'
import ParallaxCache from './ParallaxCache';

import '../css/CompetencesDev.css'

const langage = [
    {source: "./svg/030-html-5.svg",
    valeur: 90},
    {source: "./svg/031-css.svg",
    valeur: 90},
    {source: "./svg/032-nodejs.svg",
    valeur: 80},
    {source: "./svg/029-javascript.svg",
    valeur: 75},
    {source: "./svg/027-php.svg",
    valeur: 75},
    {source: "./svg/003-java.svg",
    valeur: 70}, 
    {source: "./svg/018-c.svg",
    valeur: 70},
    {source: "./svg/kotlin.svg",
    valeur: 60},
    {source: "./svg/021-mysql.svg",
    valeur: 60},
    {source: "./svg/005-python.svg",
    valeur: 30},
  ];

  const framwork= [
    {source: "./svg/006-react.svg",
    valeur: 75
    },
    {source: "./svg/jquery.svg",
    valeur: 50},
    {source: "./svg/symfony.svg",
    valeur: 30
    }
  ]

  const logiciel = [
    {source: "./svg/visual-studio.svg",
    valeur: 90}, 
    {source: "./svg/eclipse.svg",
    valeur: 90}, 
    {source: "./svg/atom.svg",
    valeur: 85}, 
    {source: "./svg/azure.svg",
    valeur: 80}, 
    {source: "./svg/photoshop.svg",
    valeur: 75}
  ];


export default function CompetencesDev(){

    return (
          <ParallaxProvider>
            <ParallaxCache/>
            <Parallax y={[0, -10]}>
              <span id="competences"></span>
              <div id="competencesDev">
                <div className="compDivDev">
                  <Skill tab={langage} nom="Langages"/>
                </div>
                <div className="compDivDev">
                  <Skill tab={logiciel} nom="Logiciels"/>
                  <Skill tab={framwork} nom="Frameworks"/>
                </div>
              </div>
            </Parallax>
          </ParallaxProvider>
    );
}