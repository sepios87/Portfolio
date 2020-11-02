import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import ParallaxCache from './ParallaxCache'

export default function BannerParallax(props){

    return (
            <ParallaxProvider>
				<ParallaxCache/>
				<ParallaxBanner
					layers={[{image: props.lien, amount: 0.5, expanded : false}]}
					style={{height: '320px', margin : "180px 0"}}
				/>
			</ParallaxProvider>
    );
}