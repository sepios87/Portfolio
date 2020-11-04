import React from 'react';
import Bio from '../component/Bio'
import SliderPhoto from '../component/SliderPhoto'
import TimeLinePhoto from "../component/TimeLinePhoto"
import BannerParallax from '../component/BannerParallax';

export default function Photo() { 

    return (
        <div>
            <Bio timeLine={<TimeLinePhoto/>} job="Photographe" texte=" Etudiant en IUT Informatique, je suis aussi auto-entrepreneur 
                                en photographie et en développement. 
                                La photo est devenue une passion dévorante pour moi depuis le collège.
                                Des fleurs en passant par le payage pour finir par les portraits, j'ai touché 
                                à tout ! Le fait de prendre les gens en photo pour ensuite voir leur sourire quand 
                                ils ont la photo entre les mains me fait adorer ce métier. Que ce soit pour des photos 
                                de mariages, pour des baptêmes, des photos instagram je serais ravi de vous faire 
                                sourire vous aussi !"/>
                <BannerParallax lien='./images/photo.jpg'/>
                <SliderPhoto/>
                <BannerParallax lien='./images/photo2.jpg'/>
			</div>
    );
}
