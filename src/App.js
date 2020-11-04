import React from 'react';
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Footer from './component/Footer'
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
			
			<Route path='/' component={() => matches ? <NavBar/> : <Burger/>}/>

			<Route exact path='/dev' component={Dev}/>
			<Route exact path='/photo' component={Photo}/>
			
        	<Route path='/' component={Footer}/>

      </BrowserRouter>
    );
}

export default App;
