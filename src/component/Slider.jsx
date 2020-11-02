import React from 'react';
import Carousel from 'react-bootstrap/Carousel' 
import MonCarousel from './Carousel'
import BackBubble from './BackBubble'
 
export default function slider(){
    
    let map = new Map() 

    map.set("Paysage", ["./photos/paysage/paysage.jpg"])
    map.set("Portrait", ["./photos/portrait/portrait.jpg"])
    map.set("Nature", ["./photos/nature/nature.jpg"])

    return (
        <div style={{zIndex : -1, width : "70%", margin : "auto"}}>
            <BackBubble	nbCercle={5}/>
            <Carousel>
                {Array.from(map, ([key, value]) => (
                    <Carousel.Item key={key} style={{maxHeight : "500px"}}>
                        <img  
                            style={{width : "100%"}}
                            src={value[0]}/>
                    <Carousel.Caption>
                        <h3 style={{marginBottom : "20%", fontSize : "500%"}}>{key}</h3>
                        <MonCarousel photo={value} />
                    </Carousel.Caption>
                    </Carousel.Item>
                        ))}
            </Carousel>
        </div>
    )
}