import React from 'react'
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import useSound from 'use-sound';
import IconButton from '@material-ui/core/IconButton';

import './Musique.css'

export default function Musique(){

    const [play, { stop, isPlaying }] = useSound(
        './musique/fond.mp3',
        { volume: 0.4 }
    );

    return (
        <IconButton id="volume" onClick={() => {isPlaying ? stop() : play();}}>{isPlaying ? <VolumeUpOutlinedIcon style={{color : "rgba(3, 219, 252, 0.8)"}}/> : <VolumeOffOutlinedIcon style={{color : "rgba(255, 108, 92, 0.8)"}}/>}</IconButton>
    );
}
