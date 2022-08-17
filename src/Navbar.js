import React from "react";
import './App.css'
import { Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" id="bg" >  
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Burger 1</Nav.Link>
          <Nav.Link href="#">Burger 2</Nav.Link>
          <Nav.Link href="#">Burger 3</Nav.Link>
          <Nav.Link  href="#">Burger 4</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
