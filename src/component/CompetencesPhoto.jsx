import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import Skill from './SkillPhoto'
import ParallaxCache from './ParallaxCache';

import '../css/CompetencesPhoto.css'

const photo = [
    {nom: "Portraits",
    valeur: 90}, 
    {nom: "Nature",
    valeur: 90}, 
    {nom: "Evénementiel",
    valeur: 80}, 
    {nom: "Paysages",
    valeur: 75}
  ];


export default function CompetencesPhoto(){

    return (
          <ParallaxProvider>
            <ParallaxCache/>
            <Parallax y={[0, -20]}>
            <span id="competences"></span>
              <div id="competencesPhoto">
                  <Skill tab={photo}/>
              </div>
            </Parallax>
          </ParallaxProvider>
    );
}