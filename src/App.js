import React from 'react';
import {BrowserRouter, Route, Redirect, useLocation } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Footer from './component/Footer'
import Burger from './component/Burger'
import NavBar from './component/NavBar'
import Musique from './component/Musique'
import Dev from './page/Dev'
import Photo from './page/Photo'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() { 

	const matches = useMediaQuery('(min-width:992px)');

	const HeaderRedirection = () => {
		const location = useLocation();
		return location.pathname === "/" ? <Redirect to="/dev"/> : <></>;
	  }

    return (
      <BrowserRouter>

			<Route path='/' component={HeaderRedirection}/>

			<Route path='/' component={() => matches ? <NavBar/> : <Burger/>}/>

			<Route path='/' component={Musique}/>

			<Route exact path='/dev' component={Dev}/>
			<Route exact path='/photo' component={Photo}/>
			
        	<Route path='/' component={Footer}/>

      </BrowserRouter>
    );
}

export default App;
