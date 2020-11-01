import React from 'react';
import Footer from './assemblage/Footer'
import Projets from './assemblage/Projets'
import BioDev from './assemblage/BioDev'
import {BrowserRouter, Route} from "react-router-dom";
import Header from './assemblage/Header'
import Competences from './assemblage/Competences';
import Carousel from './component/Carousel'

import './App.css';

function App() { 
  
    return (
      <BrowserRouter>

			<Route exact path='/photo' component={() => <Header job="photographe" lien="/" image="./images/profil.jpg"/>}/>
			<Route exact path='/' component={() => <Header job="developpeur" lien="/photo" image="./images/profilDessin.jpg"/>}/>
			<Route exact path='/photo' component={Carousel}/>

			<Route exact path='/' component={Projets}/>
        	<Route exact path='/' component={Competences}/>
          	<div style={{display : "block", margin : "auto", width : "75%", marginBottom: "50px"}}>
            	<Route exact path='/' component={BioDev}/>
          	</div>
        	<Route path='/' component={Footer}/>

      </BrowserRouter>
    );
}

export default App;
