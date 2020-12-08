import React from 'react';
import useSound from 'use-sound';

import '../css/Button.css'

export default function Button(props){

    const [play] = useSound(
        './musique/buttonHover.mp3',
        { volume: 0.6 }
      );

    return (
        <div className="divButton" style={{display : "block", margin : "5px auto 8px"}}>
            <a onMouseEnter={() => {play();}} className="myButton" rel="noopener noreferrer" target="_blank" href={props.href}>
            {props.children}
            </a>
        </div>
    );
}