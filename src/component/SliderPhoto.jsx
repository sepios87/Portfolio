import React from 'react';
import Carousel from 'react-bootstrap/Carousel' 
import CarouselPopUp from './CarouselPopUp'
import BackBubble from './BackBubble'
 
export default function sliderPhoto(){
    
    let map = new Map() 

    map.set("Paysage", ["./photos/paysage/paysage.jpg", "./photos/paysage/1.jpg", "./photos/paysage/2.jpg", "./photos/paysage/3.jpg", "./photos/paysage/4.jpg", "./photos/paysage/5.jpg", "./photos/paysage/6.jpg"])
    map.set("Portrait", ["./photos/portrait/portrait.jpg", "./photos/portrait/1.jpg", "./photos/portrait/2.jpg", "./photos/portrait/3.jpg", "./photos/portrait/4.jpg", "./photos/portrait/5.jpg"])
    map.set("Nature", ["./photos/nature/nature.jpg", "./photos/nature/1.jpg", "./photos/nature/2.jpg", "./photos/nature/3.jpg", "./photos/nature/4.jpg", "./photos/nature/5.jpg"])

    return (
        <div id="mesProjets" style={{zIndex : -1, width : "85%", margin : "auto"}}>
            <BackBubble	nbCercle={5}/>
            <Carousel>
                {Array.from(map, ([key, value]) => (
                    <Carousel.Item key={key} style={{maxHeight : "500px"}}>
                        <img  
                            style={{width : "100%"}}
                            src={value[0]}
                            alt = {value[0]}/>
                    <Carousel.Caption>
                        <h3 style={{marginBottom : "20%", fontSize : "3.6em"}}>{key}</h3>
                        <CarouselPopUp photo={value} />
                    </Carousel.Caption>
                    </Carousel.Item>
                        ))}
            </Carousel>
        </div>
    )
}