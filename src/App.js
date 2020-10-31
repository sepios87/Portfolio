import React from 'react';
import Footer from './assemblage/Footer'
import Projets from './assemblage/Projets'
import Bio from './assemblage/Bio'
import {BrowserRouter, Route} from "react-router-dom";
import Header from './assemblage/Header'
import Competences from './assemblage/Competences';

import './App.css';

function App() { 
  
    return (
      <BrowserRouter>

			<Route exact path='/' component={Header}/>

			<Route path='/' component={Projets}/>
        	<Route path='/' component={Competences}/>
          	<div style={{display : "block", margin : "auto", width : "75%", marginBottom: "50px"}}>
            	<Route path='/' component={Bio}/>
          	</div>
        	<Route path='/' component={Footer}/>

      </BrowserRouter>
    );
}

export default App;
