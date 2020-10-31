import React from "react";
import { Frame } from "framer";

export default function Profil() {

  const style={
    display : 'flex', 
    justifyContent : 'center', 
    height:'250px', 
    marginTop : "2%"
  }

  return (
    <div style={style}>
        <Frame
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
