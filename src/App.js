import React from 'react';
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Footer from './component/Footer'
import Header from './component/Header'
import Burger from './component/Burger'
import NavBar from './component/NavBar'
import Dev from './page/Dev'
import Photo from './page/Photo'

import './App.css';

function App() { 

	const matches = useMediaQuery('(min-width:992px)');

    return (
      <BrowserRouter>

			<Redirect to="/dev" />

			<div id="header">
				<Route path='/' component={() => matches ? <NavBar/> : <Burger/>}/>

				<Route exact path='/photo' component={() => <Header job="photographe"  lien="/dev" image="./images/profil.jpg"/>}/>
				<Route exact path='/dev' component={() => <Header job="developpeur" lien="/photo" image="./images/profilGlish.gif"/>}/>
			</div>
			
			<div id="body">
				<Route exact path='/dev' component={Dev}/>
				<Route exact path='/photo' component={Photo}/>
			</div>
			
        	<Route path='/' component={Footer}/>

      </BrowserRouter>
    );
}

export default App;
