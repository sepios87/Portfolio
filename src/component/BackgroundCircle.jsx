import React from 'react';
import {Frame, motion, useAnimation} from 'framer'

export default function BackgroundCircle(props) {

  const coucou = useAnimation();

  let cercle = [];
  let couleur; 

  for (let i=0; i<props.nbCercle; i++) {

    if (i%2 === 0) {
      couleur = "rgba(3, 219, 252,"+Math.round(Math.random()+0.2 * 100) / 100+")"
    } else {
      couleur = "rgba(255, 108, 92,"+Math.round(Math.random()+0.2 * 100) / 100+")"
    }
    
    cercle.push(
      <motion.div key={i} transition={{type: "spring", damping: 3, stiffness: Math.random()*100}} animate={coucou} style=
      {{position : 'absolute', top : Math.random()*(window.screen.height)-150+'px', right : Math.random()*(window.screen.width)-150+'px'}} >
        <Frame className="cercle" style={{borderRadius: 120, backgroundColor : couleur}} size={30+Math.random()*100}/>
      </motion.div>
    );
  }    

  return (
    <Frame style={{position : "absolute"}} size="100%" background={null} onMouseMove={
      (event) => {

          let offsetX = event.clientX - window.innerWidth/2
          let offsetY = event.clientY -  window.innerHeight/2

          coucou.start({ x : offsetX/10 })
          coucou.start({ y : offsetY/10 })
          }
       }> 
            {cercle}
      </Frame>
  );
}