import React from 'react';
import Projets from '../component/Projets'
import Bio from '../component/Bio'
import CompetencesDev from '../component/CompetencesDev';
import TimeLineDev from "../component/TimeLineDev"
import BannerParallax from '../component/BannerParallax';
import Header from '../component/Header'

export default function Dev() { 

    const job= "Développeur"

    return (
        <div>
            <Header job={job} sousTitre={<h2 id="sousTitre">Vous entrez dans mon monde</h2>} lien="/photo" image="./images/profilGlish.gif"/>
            <Bio job={job} timeLine={<TimeLineDev/>} lien="./images/profilBioDev.jpeg"
            texte=" Etudiant en IUT Informatique, je suis aussi auto-entrepreneur 
                                        en développement. 
                                        J'apprécie véritablement le contact humain et aime aider les 
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
