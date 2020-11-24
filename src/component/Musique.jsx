import React from 'react'
import useSound from 'use-sound';
import IconButton from '@material-ui/core/IconButton';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import MusicOffOutlinedIcon from '@material-ui/icons/MusicOffOutlined';

import './Musique.css'

export default function Musique(){

    const [play, { stop, isPlaying }] = useSound(
        './musique/fond.mp3',
        { volume: 0.4 }
    );

    return (
        <IconButton id="volume" onClick={() => {isPlaying ? stop() : play();}}>
            {isPlaying ? <MusicNoteOutlinedIcon style={{color : "rgba(3, 219, 252, 0.8)"}}/> : <MusicOffOutlinedIcon style={{color : "rgba(255, 108, 92, 0.8)"}}/>}
        </IconButton>
    );
}
