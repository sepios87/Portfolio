import * as React from "react";
import { Frame } from "framer";

export default function Profil() {

  return (
    <div style={{display : 'flex', justifyContent : 'center', height:'250px', marginTop : "2%"}}>
        <Frame
      /*drag
      dragConstraints={{ velocity : 2, top: -window.innerHeight/2, left: -window.innerWidth/2, right: window.innerWidth/2-100, y :0, bottom : window.innerHeight/2-100 }}
      */
      whileHover={{ borderRadius: 100, rotate : 8}}
      shadow="10px 5px 5px rgba(255, 255, 255, 0.1)"
      size={250}
      initial={{ borderRadius: 180, rotate : 0}}
      background="none"
      style = {{backgroundImage: "url(./profil.jpg)", backgroundSize: "cover"}}
    />
    </div>
  );
}
