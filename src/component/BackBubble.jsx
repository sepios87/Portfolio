import React from 'react';
import {Frame, motion} from 'framer'

export default function BackgroundCircle(props) {

    let cercle = [];
    let couleur; 
  
    for (let i=0; i<props.nbCercle; i++) {
  
      if (i%2 === 0) {
        couleur = "rgba(3, 219, 252,"+Math.round(Math.random()+0.1 * 100) / 100+")"
      } else {
        couleur = "rgba(255, 108, 92,"+Math.round(Math.random()+0.1 * 100) / 100+")"
      }

      const randx = Math.random()*100;
      const randy = Math.random()*100;
      
      cercle.push(
        <motion.div key={i} transition={{duration: 10, loop: Infinity}} animate={{x : [randx, Math.random()*80, Math.random()*80, randx], y : [randy, Math.random()*80, Math.random()*80, randy]}} 
        style={{position : 'absolute', top : (Math.random()*500)-250+'px', right : (Math.random()*500)-250+'px'}} >
          <Frame className="cercle" style={{zIndex : Math.random()*3-4, borderRadius: 120, backgroundColor : couleur}} size={20+Math.random()*100}/>
        </motion.div>
      );
    }    
  
    return (
      <Frame style={{position : "absolute"}} background="none"> 
              {cercle}
        </Frame>
    );
  }