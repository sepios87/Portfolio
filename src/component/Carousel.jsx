import React from 'react'
import Carousel from 'react-bootstrap/Carousel' 
import './Carousel.css'

const tab=["/photos/1.jpg", "/photos/2.jpg",  "/photos/3.jpg",  "/photos/4.jpg", "/photos/5.jpg"]


export default function carousel(){

    const items = (image, i) =>{
        return (
            <Carousel.Item key={i} interval={1000}>
                <img style={{height : "500px", display : "block", margin : "auto"}}
                src={image}
                alt="First slide"
                />
            </Carousel.Item>
        );
    }

    return (
        <Carousel id="mesProjets" style={{width : "80%", display:"block", margin : "auto"}}>
                {tab.map((image, i) => (
                    items(image, i)
                ))}
        </Carousel>
    );
}