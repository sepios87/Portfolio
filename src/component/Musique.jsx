import React, { useEffect } from 'react'
import useSound from 'use-sound';

export default function Musique(){

    const [play, {isPlaying, stop}] = useSound(
		'./musique/fond.mp3',
		{ volume: 0.5 }
    );

	const onFocus = () => {if (!isPlaying) play()};
		
	const onBlur = () => {stop()};
		
	useEffect(() => {
		window.addEventListener('focus', onFocus);
        window.addEventListener('blur', onBlur);
		return () => {
			window.removeEventListener('focus', onFocus);
			window.removeEventListener('blur', onBlur);
		};
        });
        
	return <></>;
}