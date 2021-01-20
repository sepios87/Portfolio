import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail'; 
import { motion } from "framer"
import Tooltip from '@material-ui/core/Tooltip';

import '../css/Footer.css'

const Footer = () => {

    const styleIcon={
        width : "36px",
        height : "36px",
        background: "linear-gradient(119deg, rgba(255,108,92,0.9) 4%, rgba(255,108,92,1) 65%)",
        padding : "7px",
        borderRadius : '50%',
        color : 'white',
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)",
    }

    const animation = {y : [0, -10, 0]}

    return(
            <div id="contact">
                <div className="iconDiv">
                    <motion.div background="none" size="36px" animate={animation} transition={{type: "spring", duration : 1.8, loop: Infinity}}>
                    <Tooltip title="+33 6 83 49 80 56" arrow>
                        <a className="iconLien" href="tel:+33683498056"><PhoneIcon style={styleIcon}/></a>
                    </Tooltip>
                    </motion.div> 
                </div>
                <div className="iconDiv">
                    <motion.div background="none" size="36px" animate={animation} transition={{delay : 0.25, type: "spring", duration : 1.8, loop: Infinity}}>
                        <Tooltip title="sepios.corp@gmail.com" arrow>
                            <a className="iconLien" href="mailto:sepios.corp@gmail.com"><MailIcon style={styleIcon}/></a>   
                        </Tooltip>
                    </motion.div>
                </div>
               <div className="iconDiv">
                    <motion.div background="none" size="36px" animate={animation} transition={{delay : 0.50, type: "spring", duration : 1.8, loop: Infinity}}>
                        <Tooltip title="florian toribio" arrow>
                            <a rel="noopener noreferrer" className="iconLien" target="_blank" href="https://www.linkedin.com/in/florian-toribio/"><LinkedInIcon style={styleIcon}/></a>
                        </Tooltip> 
                    </motion.div>
               </div>
               <div className="iconDiv">
                    <motion.div background="none" size="36px" animate={animation} transition={{delay : 0.75, type: "spring", duration : 1.8, loop: Infinity}}>
                        <Tooltip title="sepios87" arrow>
                            <a rel="noopener noreferrer" className="iconLien" href="https://github.com/sepios87" target="_blank"><GitHubIcon style={styleIcon}/></a>   
                        </Tooltip>
                    </motion.div>     
               </div>    
        </div>
    );
}

export default React.memo(Footer);