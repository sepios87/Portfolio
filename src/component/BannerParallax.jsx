import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import ParallaxCache from './ParallaxCache'
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function BannerParallax(props){

	const matches = useMediaQuery('(min-width:992px)');

    return (
            <ParallaxProvider>
				<ParallaxCache/>
				<ParallaxBanner 
					disabled = {matches ? false : true}
					layers={[{image: props.lien, amount: 0.6, expanded : false}]}
					style={{height: matches ? '320px' : "180px", margin : matches ? "180px 0" : "80px 0"}}
				/>
			</ParallaxProvider>
    );
}