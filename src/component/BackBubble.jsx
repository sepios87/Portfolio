import React from 'react';
import { motion } from "framer-motion" 

function BackBubble(props) {

    let cercle = [];
    let couleur; 
  
    for (let i=0; i<props.nbCercle; i++) {
  
      couleur = i%2 === 0 ? "rgba(3, 219, 252,"+Math.round(Math.random()+0.1 * 100) / 100+")" : "rgba(255, 108, 92,"+Math.round(Math.random()+0.1 * 100) / 100+")";

      const randx = Math.random()*100;
      const randy = Math.random()*100;
      const size = 20+Math.random()*100;
      
      cercle.push(
        <motion.div key={i} transition={{duration: 10, repeat : Infinity}} animate={{x : [randx, Math.random()*120, Math.random()*100, randx], y : [randy, Math.random()*140, Math.random()*130, randy]}} 
        style={{position : 'absolute', top : (Math.random()*500)-250+'px', right : (Math.random()*500)-250+'px'}} >
          <span style={{zIndex : Math.random()*4-4, borderRadius: 120, backgroundColor : couleur, height : size, width: size, display : "inline-block"}}></span>
        </motion.div>
      );
    }    
  
    return (
      <motion-div>{cercle}</motion-div>
    );
  }

export default React.memo(BackBubble)