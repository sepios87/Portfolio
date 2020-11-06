import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail'; 
import { Frame } from "framer"
import Tooltip from '@material-ui/core/Tooltip';
import useSound from 'use-sound';

import './Footer.css'

export default function Footer (){

    const styleIcon={
        width : "36px",
        height : "36px",
        background: "linear-gradient(119deg, rgba(255,108,92,0.9) 4%, rgba(255,108,92,1) 65%)",
        padding : "7px",
        borderRadius : '50%',
        color : 'white',
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)",
    }

    const [play] = useSound(
        './musique/blop.mp3',
        { volume: 0.4 }
      );

    return(
            <div id="contact">
                <div className="iconDiv">
                    <Frame background="none" size="36px" animate={{y : [0, -10, 0]}} transition={{type: "spring", duration : 1.8, loop: Infinity}}>
                    <Tooltip title="+33 6 83 49 80 56" arrow>
                        <a onMouseEnter={() => {play();}} className="iconLien" href="tel:+33683498056"><PhoneIcon style={styleIcon}/></a>
                    </Tooltip>
                    </Frame> 
                </div>
                <div className="iconDiv">
                    <Frame background="none" size="36px" animate={{y : [0, -10, 0]}} transition={{delay : 0.25, type: "spring", duration : 1.8, loop: Infinity}}>
                        <Tooltip title="sepios.corp@gmail.com" arrow>
                            <a onMouseEnter={() => {play();}} className="iconLien" href="mailto:sepios.corp@gmail.com"><MailIcon style={styleIcon}/></a>   
                        </Tooltip>
                    </Frame>
                </div>
               <div className="iconDiv">
                    <Frame background="none" size="36px" animate={{y : [0, -10, 0]}} transition={{delay : 0.50, type: "spring", duration : 1.8, loop: Infinity}}>
                        <Tooltip title="florian toribio" arrow>
                            <a onMouseEnter={() => {play();}} rel="noopener noreferrer" className="iconLien" target="_blank" href="https://www.linkedin.com/in/florian-toribio/"><LinkedInIcon style={styleIcon}/></a>
                        </Tooltip> 
                    </Frame>
               </div>
               <div className="iconDiv">
                    <Frame background="none" size="36px" animate={{y : [0, -10, 0]}} transition={{delay : 0.75, type: "spring", duration : 1.8, loop: Infinity}}>
                        <Tooltip title="sepios87" arrow>
                            <a onMouseEnter={() => {play();}} rel="noopener noreferrer" className="iconLien" href="https://github.com/sepios87" target="_blank"><GitHubIcon style={styleIcon}/></a>   
                        </Tooltip>
                    </Frame>     
               </div>    
        </div>
    );
}
