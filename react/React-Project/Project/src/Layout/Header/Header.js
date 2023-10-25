import "./Header.css";

import React from "react";
// import download from "../Assets/Imgs/download.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="container">
      <Navbar expand="lg" className="  shadow fixed-top navbar">
        <Container>
          <Link
            to="/house"
            className="text-dark text-decoration-none fw-bold me-3"
          >
            Home
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Hooks" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Use reducer">
                  Use Reducer
                </NavDropdown.Item>

                <NavDropdown.Item href="Use state">Use State</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                  Use Context
                </NavDropdown.Item>
              </NavDropdown>

              {/* <NavDropdown title="Hooks With API" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

// export default Header;
