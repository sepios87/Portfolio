import React from 'react';
import {Frame, motion, useAnimation} from 'framer'

function BackgroundCircle(props) {

  const monAnim = useAnimation();

  let cercle = [];
  let couleur; 

  for (let i=0; i<props.nbCercle; i++) {

    couleur = i%2 === 0 ? "rgba(3, 219, 252,"+Math.round(Math.random()+0.1 * 100) / 100+")" : "rgba(255, 108, 92,"+Math.round(Math.random()+0.1 * 100) / 100+")";
    
    cercle.push(
      <motion.div key={i} transition={{type: "spring", damping: 3, stiffness: Math.random()*100}} animate={monAnim} style=
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
          monAnim.start({ x : offsetX/10, y : offsetY/10 })
          }
       }> 
            {cercle}
      </Frame>
  );
}

export default React.memo(BackgroundCircle) //optimise le cache