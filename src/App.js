import React from 'react';
import Footer from './assemblage/Footer'
import Projets from './assemblage/Projets'
import Bio from './assemblage/Bio'
import {BrowserRouter, Route} from "react-router-dom";
import Header from './assemblage/Header'
import CompetencesDev from './assemblage/CompetencesDev';
import Slider from './component/Slider'
import Burger from './component/Burger'
import NavBar from './component/NavBar'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TimeLineDev from "./component/TimeLineDev"
import TimeLinePhoto from "./component/TimeLinePhoto"
import BannerParallax from './component/BannerParallax';
import './App.css';

function App() { 

	const matches = useMediaQuery('(min-width:992px)');
  
    return (
      <BrowserRouter>

			<div id="header">
				<Route path='/' component={() => matches ? <NavBar/> : <Burger/>}/>

				<Route exact path='/photo' component={() => <Header job="photographe" image="./images/profil.jpg"/>}/>
				<Route exact path='/' component={() => <Header job="developpeur" lien="/photo" image="./images/profilGlish.gif"/>}/>
			</div>
			
			<div id="body">
				<Route exact path='/' component={() => <Bio job="Développeur" timeLine={<TimeLineDev/>} texte=" Etudiant en IUT Informatique, je suis aussi auto-entrepreneur 
							en développement et photographie. 
							J'apprécie beaucoup le contact humain et aime aider les 
							gens à trouver des solutions adaptées à leurs besoins 
							grâce à l’informatique. Pour y parvenir, j’aime travailler 
							en équipe, mais je suis aussi capable de mener un projet 
							seul. Les personnes avec qui je travaille mettent en 
							avant mon sérieux, mon écoute et mon adaptabilité."/>}/>

				<Route exact path='/photo' component={() => <Bio timeLine={<TimeLinePhoto/>} job="Photographe" texte=" Etudiant en IUT Informatique, je suis aussi auto-entrepreneur 
							en photographie et en développement. 
							La photo est devenue une passion dévorante pour moi depuis le collège.
							Des fleurs en passant par le payage pour finir par les portraits, j'ai touché 
							à tout ! Le fait de prendre les gens en photo pour ensuite voir leur sourir quand 
							ils ont la photo entre les main me fait adorer ce métier. Que ce soit pour des photos 
							de mariage, pour des baptêmes, des photo instagram je serait ravie de vous faire 
							sourire vous aussi !"/>}/>


				<Route exact path='/' component={() => <BannerParallax lien='./images/pc.jpg'/>}/>
				<Route exact path='/photo' component={() => <BannerParallax lien='./images/photo.jpg'/>}/>

				<Route exact path='/photo' component={Slider}/>

				<Route exact path='/' component={Projets}/>

				<Route exact path='/' component={() => <BannerParallax lien='./images/pc2.jpg'/>}/>
				<Route exact path='/photo' component={() => <BannerParallax lien='./images/photo2.jpg'/>}/>

				<Route exact path='/' component={CompetencesDev}/>
			</div>
			
        	<Route path='/' component={Footer}/>

      </BrowserRouter>
    );
}

export default App;
