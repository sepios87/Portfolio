import React from 'react';
import {Frame, motion, useAnimation} from 'framer'

const number = [10];
let couleur1 = "rgba(255,102,102,"+Math.round(Math.random()+0.2 * 100) / 100+")"
let couleur2 = "rgba(102,255,153,"+Math.round(Math.random()+0.2 * 100) / 100+")"
let couleur = [couleur1, couleur2]

export default function BackgroundCircle(nbCercle) {

  let sortedKeys = Object.keys(nbCercle).sort();

  const coucou = useAnimation();

  for (let i=3; i<parseInt(nbCercle[sortedKeys[0]]); i++){
    number.push(i*10)
  }

  return (
          <Frame size="100%" background={null} onMouseMove={
             (event) => {
    
                 let offsetX = event.clientX - window.innerWidth/2
                 let offsetY = event.clientY -  window.innerHeight/2
                 
                 coucou.start({ x : offsetX/10 })
                 coucou.start({ y : offsetY/10 })
                 }      
              }> 
          {number.map((number, i) => (
        <motion.div key={i} transition={{type: "spring", damping: 3,stiffness: Math.random()*100}} animate={coucou} style=
          {{position : 'absolute', top : Math.random()*(window.screen.height)-100+'px', right : Math.random()*(window.screen.width)+150+'px'}} >
            <Frame style={{borderRadius: 120, backgroundColor : couleur[(number/10)%2]}} size={20+Math.random()*100}/>
        </motion.div>
          ))}
      </Frame>
  );
}