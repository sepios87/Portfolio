import React from 'react'
import {Nav} from 'react-bootstrap'

export default function NavBar(){
    return (
        <Nav style={{padding : "1%"}} className="justify-content-end" variant="pills" defaultActiveKey="/home">
        <Nav.Item>
        <Nav.Link href="/home">Accueil</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">CV</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Réalisations</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    );
}