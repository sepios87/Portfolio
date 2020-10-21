onHoverStart={
  async () => {
    await (
      coucou.start({ x: 100 }),
      coucou.start({ y: 100 })
    )


    import React from 'react';
    import {Circle} from 'react-shapes'
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
              {number.map(number => (
            <motion.div id={number} transition={{type: "spring", damping: Math.random()*4,stiffness: Math.random()*100}} animate={coucou} style=
              {{position : 'absolute', top : Math.random()*(window.screen.height-200)+'px', right : Math.random()*(window.screen.width-250)+'px'}} >
                <Circle onClick={() => document.getElementById(number).remove()} style={{backgroundColor: "DodgerBlue"}} r={10+Math.random()*50} fill={{color:couleur[(number/10)%2]}} strokeWidth={3} />
            </motion.div>
              ))}
          </Frame>
      );
    }