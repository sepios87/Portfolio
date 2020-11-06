import React from 'react';
import useSound from 'use-sound';

import './Button.css'

export default function Button(props){

    const [play] = useSound(
        './musique/buttonHover.mp3',
        { volume: 0.6 }
      );

    return (
        <a onMouseEnter={() => {play();}} style={{display : "block", margin : "15px auto"}} className="myButton" rel="noopener noreferrer" target="_blank" href={props.href}>
            {props.children}
        </a>
    );
}