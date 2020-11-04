import React from 'react';
import Projets from '../component/Projets'
import Bio from '../component/Bio'
import CompetencesDev from '../component/CompetencesDev';
import TimeLineDev from "../component/TimeLineDev"
import BannerParallax from '../component/BannerParallax';

export default function Dev() { 

    return (
        <div>
            <Bio job="Développeur" timeLine={<TimeLineDev/>} texte=" Etudiant en IUT Informatique, je suis aussi auto-entrepreneur 
                                        en développement et photographie. 
                                        J'apprécie beaucoup le contact humain et aime aider les 
                                        gens à trouver des solutions adaptées à leurs besoins 
                                        grâce à l’informatique. Pour y parvenir, j’aime travailler 
                                        en équipe, mais je suis aussi capable de mener un projet 
                                        seul. Les personnes avec qui je travaille mettent en 
                                        avant mon sérieux, mon écoute et mon adaptabilité."/>
            <BannerParallax lien='./images/pc.jpg'/>
            <Projets/>
            <BannerParallax lien='./images/pc2.jpg'/>
            <CompetencesDev/>
        </div>
    );
}
