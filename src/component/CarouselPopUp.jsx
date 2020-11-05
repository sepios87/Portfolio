import React, {useState} from 'react';
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import './CarouselPopUp.css'

export default function AutoRotatingCarouselModal (props) {

    const matches = useMediaQuery('(min-width:992px)');

    const [handleOpen, setHandleOpen] = useState({ open: false });

    const styleUp={
        backgroundColor: "rgba(3, 219, 252, 0.3)", 
        height : "90%" 
    }

    const styleDown={
        backgroundColor: "rgba(3, 219, 252, 0.4)", 
        height : "100%"
    }

    const Item = (props2) => {
        return (
            <Slide
              media={<img style={{width : "85%"}} src={props2.source} alt = {props2.source} />}
              mediaBackgroundStyle={styleUp}
              style={styleDown}
              landscape = {true}
              title = ""
              subtitle = ""
            />
        )
    }

    return (
        <div>
          <button style={{backgroundColor : "rgba(0, 0, 0, 0)", border  :"none"}} onClick={() => setHandleOpen({ open: true })}><div className="myButton" style={{zIndex : "20", display : "block", margin : "0 auto", position : "relative", bottom : "6%"}}>Voir</div></button>
          <AutoRotatingCarousel
            label="Fermer"
            mobile={!matches}
            open={handleOpen.open}
            onClose={() => setHandleOpen({ open: false })}
            onStart={() => setHandleOpen({ open: false })}
            autoplay={false}
            style={{ position: "absolute", width : "80%" }}
          >
              {props.photo.map((item, i) => <Item key={i} source={item}/>)}
          </AutoRotatingCarousel>
        </div>
      );
}
