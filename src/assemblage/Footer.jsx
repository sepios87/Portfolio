import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail'; 
import { Frame } from "framer"

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

    const styleA={
        display : "flex",
        color : "black",
        textDecoration :"none",
    }

    return(
            <div id="contact" style={{backgroundColor : "rgba(3, 219, 252, 0.2)", display : "flex", flexDirection : "column", alignItems : "center", height : "40px"}}>
                <div id ="footerIcon">
                <div>
                    <Frame background="none" size="36px" animate={{y : [0, -10, 0]}} transition={{type: "spring", duration : 1.8, loop: Infinity}}>
                        <a style={styleA} href="tel:+33683498056"><PhoneIcon style={styleIcon}/></a>
                    </Frame> 
                </div>
                <div>
                    <Frame background="none" size="36px" animate={{y : [0, -10, 0]}} transition={{delay : 0.25, type: "spring", duration : 1.8, loop: Infinity}}>
                        <a style={styleA} href="mailto:sepios.corp@gmail.com"><MailIcon style={styleIcon}/></a>   
                    </Frame>
                </div>
               <div>
                    <Frame background="none" size="36px" animate={{y : [0, -10, 0]}} transition={{delay : 0.50, type: "spring", duration : 1.8, loop: Infinity}}>
                        <a rel="noopener noreferrer" style={styleA} target="_blank" href="https://www.linkedin.com/in/florian-toribio/"><LinkedInIcon style={styleIcon}/></a>
                    </Frame>
               </div>
               <div>
                    <Frame background="none" size="36px" animate={{y : [0, -10, 0]}} transition={{delay : 0.75, type: "spring", duration : 1.8, loop: Infinity}}>
                        <a rel="noopener noreferrer" style={styleA} href="https://github.com/sepios87" target="_blank"><GitHubIcon style={styleIcon}/></a>   
                    </Frame>     
               </div>    
                </div>
            </div>
    );
}
