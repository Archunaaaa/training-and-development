import "./Header.css";

import React from "react";
// import download from "../Assets/Imgs/download.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="container Header">
      <Navbar expand="lg" className="shadow bg-success fixed-top navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Hooks with API" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Use state">Use State</NavDropdown.Item>
                <NavDropdown.Item href="/ReducerApiList">
                  Use Reducer
                </NavDropdown.Item>
                <NavDropdown.Item   href="/usecontextform" to="usecontextform">
                  Use Context
                </NavDropdown.Item>
                <NavDropdown.Item   href="/Reduxtable" to="Reduxtable">
                  Redux
                </NavDropdown.Item>
                <NavDropdown.Item   href="/sagalist" to="sagalist">
                  Saga Api
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

// export default Header;
