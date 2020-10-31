import React from 'react'
import {Nav} from 'react-bootstrap'
 
export default function NavBar(){
 
    return (
      <div>
        <style type="text/css">
          {`
            .nav-pills .nav-link.active, .nav-pills .show > .nav-link{
              background : none;
              border-radius: 30px;
              color : rgb(3, 219, 252);
              border : 1.5px solid rgb(3, 219, 252);
            }

            .nav-pills .nav-link{
              color :  black;
            }
            `}
        </style>
        <Nav style={{padding : "1%"}} variant="pills" className="justify-content-end" defaultActiveKey="#home">
          <Nav.Item>
            <Nav.Link href="#home">Accueil</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#bio" eventKey="link-2">Bio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#mesProjets" eventKey="link-3">Projets</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#competences" eventKey="link-4">Compétences</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#CV" eventKey="link-5">CV</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact" eventKey="link-6">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
}