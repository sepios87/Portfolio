import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Carte from './projetCarte'

export default function Projets(){
    return (
        <ParallaxProvider>
        <div id="projet" style={{paddingTop: "250px" ,display : 'flex', flexDirection: "column", alignItems : 'center', marginBottom : "150px"}}>
        <div style={{display :"flex"}}>
        <Parallax y={[-30, -80]}  x={[-50, -60]}>
          <Carte/>
      </Parallax>
      <Parallax y={[10, -50]}  x={[40, 50]}>
          <Carte/>
      </Parallax>
        </div>
        <div style={{display :"flex"}}>
        <Parallax y={[0, -60]}  x={[-10, -30]}>
          <Carte/>
      </Parallax>
      <Parallax y={[30, -10]}  x={[30, 50]}>
          <Carte/>
      </Parallax>
        </div>
        <div style={{display :"flex"}}>
        <Parallax y={[40, -60]}  x={[-40, -70]}>
          <Carte/>
      </Parallax>
      <Parallax y={[100, 20]}  x={[-10, 0]}>
          <Carte/>
      </Parallax>
        </div>
        </div>
      </ParallaxProvider>
    );
}