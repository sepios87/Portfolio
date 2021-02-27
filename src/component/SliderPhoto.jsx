import React from 'react';
// import Carousel from 'react-bootstrap/Carousel'
import Carousel from 'react-material-ui-carousel'
 
import CarouselPopUp from './CarouselPopUp'
import BackBubble from './BackBubble'

import '../css/SliderPhoto.css'
 
export default function sliderPhoto(){
    
    let map = new Map() 

    map.set("Paysages", ["./photos/paysage/paysage.jpg", "./photos/paysage/1.jpg", "./photos/paysage/2.jpg", "./photos/paysage/3.jpg", "./photos/paysage/4.jpg", "./photos/paysage/5.jpg", "./photos/paysage/6.jpg"])
    map.set("Portraits", ["./photos/portrait/portrait.jpg", "./photos/portrait/1.jpg", "./photos/portrait/2.jpg", "./photos/portrait/3.jpg", "./photos/portrait/4.jpg", "./photos/portrait/5.jpg"])
    map.set("Nature", ["./photos/nature/nature.jpg", "./photos/nature/1.jpg", "./photos/nature/2.jpg", "./photos/nature/3.jpg", "./photos/nature/4.jpg", "./photos/nature/5.jpg"])

    return (
        <div id="mesProjets" style={{zIndex : -1, width : "90%", margin : "auto"}}>
            <BackBubble	nbCercle={5}/>
            <Carousel autoPlay={false}>
            {Array.from(map, ([key, value]) => (
                <div key={key} style={{height : 400}}>
                    <img  style={{width : "100%", height : 400, objectFit : "cover"}} src={value[0]} alt = {value[0]}/>
                    <div style={{position : "absolute", display : "block", height : 0, top: "5%", left : "43.8%", color : "white"}}>
                        <h3 style={{position : "relative", marginBottom: 180, textAlign: "center"}}className="titreSlide" >{key}</h3>
                        <CarouselPopUp photo={value} />
                    </div>
                </div>
            ))}
            </Carousel>
        </div>
    )
}