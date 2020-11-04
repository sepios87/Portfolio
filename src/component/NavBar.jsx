import React from 'react'
import {Nav} from 'react-bootstrap'
import './NavBar.css'
 
export default function NavBar(){
 
    return (
        <Nav id="home" style={{padding : "1%"}} variant="pills" className="justify-content-end" defaultActiveKey="#home">
          <Nav.Item>
            <Nav.Link href="#home">Accueil</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#bio" eventKey="link-2">Bio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#mesProjets" eventKey="link-3">Mon travail</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#competences" eventKey="link-4">Compétences</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="CV_Florian_TORIBIO.pdf" target="_blank" eventKey="link-5">CV</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact" eventKey="link-6">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
    );
}