import React from 'react';
import {Frame, motion} from 'framer'

function BackBubble(props) {

    let cercle = [];
    let couleur; 
  
    for (let i=0; i<props.nbCercle; i++) {
  
      couleur = i%2 === 0 ? "rgba(3, 219, 252,"+Math.round(Math.random()+0.1 * 100) / 100+")" : "rgba(255, 108, 92,"+Math.round(Math.random()+0.1 * 100) / 100+")";

      const randx = Math.random()*100;
      const randy = Math.random()*100;
      
      cercle.push(
        <motion.div key={i} transition={{duration: 10, loop: Infinity}} animate={{x : [randx, Math.random()*100, Math.random()*100, randx], y : [randy, Math.random()*100, Math.random()*100, randy]}} 
        style={{position : 'absolute', top : (Math.random()*500)-250+'px', right : (Math.random()*500)-250+'px'}} >
          <Frame className="cercle" style={{zIndex : Math.random()*4-4, borderRadius: 120, backgroundColor : couleur}} size={20+Math.random()*100}/>
        </motion.div>
      );
    }    
  
    return (
      <Frame style={{position : "absolute"}} background="none"> 
              {cercle}
        </Frame>
    );
  }

export default React.memo(BackBubble)