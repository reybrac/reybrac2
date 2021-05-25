import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <Navbar className="navi" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Reynaldo Bracamonte</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="mr-auto" id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link
              to="/"
              style={{
                color: "white",
              }}
            >
              About
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/portfolio"
              style={{
                color: "white",
              }}
            >
              Portfolio
            </Link>
          </Nav.Link>

          <NavDropdown title="Contact" id="basic-nav-dropdown">
            <NavDropdown.Item href="mailto:reybrac@yahoo.com">
              <i className="far fa-envelope"> Email </i>
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.linkedin.com/in/rey-bracamonte-0595591/"
              target="_blank"
            >
              <i className="fab fa-linkedin"> LinkedIn</i>
            </NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/reybrac" target="_blank">
              <i className="fab fa-github"> Github </i>
            </NavDropdown.Item>

            <NavDropdown.Item href="tel:9256993988">
              <i className="fas fa-phone-square-alt"> Phone </i>
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item
              href="https://drive.google.com/file/d/1bo1so6kh0pmmipS3mkXbqo6347CtYEHy/view?usp=sharing"
              download="RB Resume"
              target="_blank"
            >
              <i className="far fa-file-alt"> Resume</i>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars;
