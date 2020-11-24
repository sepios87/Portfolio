import React from 'react';
import useSound from 'use-sound';

import './Button.css'

export default function Button(props){

    const [play] = useSound(
        './musique/buttonHover.mp3',
        { volume: 0.6 }
      );

    return (
        <div class="divButton" style={{display : "block", margin : "0 auto"}}>
            <a onMouseEnter={() => {play();}} className="myButton" rel="noopener noreferrer" target="_blank" href={props.href}>
            {props.children}
            </a>
        </div>
    );
}