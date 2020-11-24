import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import Skill from './SkillPhoto'
import ParallaxCache from './ParallaxCache';

import './CompetencesPhoto.css'

const photo = [
    {nom: "Portrait",
    valeur: 90}, 
    {nom: "Nature",
    valeur: 90}, 
    {nom: "Evenementiel",
    valeur: 80}, 
    {nom: "Paysage",
    valeur: 75}
  ];


export default function CompetencesPhoto(){

    return (
          <ParallaxProvider>
            <ParallaxCache/>
            <Parallax y={[0, -30]}>
              <div id="competencesPhoto">
                  <Skill tab={photo}/>
              </div>
            </Parallax>
          </ParallaxProvider>
    );
}