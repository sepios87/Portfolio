import React from 'react';
import {Rectangle} from 'react-shapes'
import {Frame, motion} from 'framer'

const number = [10];
let couleur1 = "rgba(255,102,102,"+Math.round(Math.random() * 100) / 100+")"
let couleur2 = "rgba(102,255,153,"+Math.round(Math.random() * 100) / 100+")"
let couleur = [couleur1, couleur2]


export default function CarreTurn(nbCarre) {
  let sortedKeys = Object.keys(nbCarre).sort();

  for (let i=3; i<parseInt(nbCarre[sortedKeys[0]]); i++){
    number.push(i*10)
  }

  return (
      <Frame size="100%" background={null}>
          {number.map(number => (
        <motion.div transition={{type: "spring", damping: Math.random()*4,stiffness: Math.random()*100, repeat : Infinity, delay : Math.random()*10}} animate={{rotate : Math.random()*360, opacity : 0.9}} style=
          {{position : 'absolute', top : Math.random()*(window.screen.height-200)+'px', right : Math.random()*(window.screen.width-200)+'px'}} >
            <Rectangle width={100} height={Math.random()*20+30} style={{backgroundColor: "DodgerBlue"}} r={10+Math.random()*50} fill={{color:couleur[(number/10)%2]}} strokeWidth={3} />
        </motion.div>
          ))}
      </Frame>
  );
}