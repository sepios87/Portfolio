import React from 'react';
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useSound from 'use-sound';

import Footer from './component/Footer'
import Burger from './component/Burger'
import NavBar from './component/NavBar'
import Dev from './page/Dev'
import Photo from './page/Photo'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() { 

	const [play, {isPlaying }] = useSound(
		'./musique/fond.mp3',
		{ volume: 0.5 }
	  );

	  if (!isPlaying){
		  play();
	  }

	const matches = useMediaQuery('(min-width:992px)');

    return (
      <BrowserRouter>

			<Redirect to="/dev"/>
			
			
			<Route path='/' component={() => matches ? <NavBar/> : <Burger/>}/>

			<Route exact path='/dev' component={Dev}/>
			<Route exact path='/photo' component={Photo}/>
			
        	<Route path='/' component={Footer}/>

      </BrowserRouter>
    );
}

export default App;
