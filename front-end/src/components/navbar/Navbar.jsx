import { HashLink as Link } from "react-router-hash-link";
import { Offcanvas, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";

import Button from "@components/button/Button";
import "./Navbar.scss";

export default function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);
  const closeOffcanvas = () => setExpanded(false);

  return (
    <Navbar className="navbar" expand="lg" expanded={expanded} variant="dark">
      <Container className="p-2">
        <Navbar.Brand>
          <Link to="../#home" className="navbar__brand">
            Bezpiecznie W Sieci
          </Link>
        </Navbar.Brand>
        <a
          aria-controls="navbar-toggler"
          type="button"
          className="navbar-toggler shadow-none border-0 p-0 navbar-toggler"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </a>
        <Navbar.Offcanvas
          className="navbar__sidebar"
          id="navbar-toggler"
          aria-labelledby="navbar-label-toggler"
          placement="start"
          onHide={closeOffcanvas}
        >
          <Offcanvas.Header className="border-bottom" closeVariant="white">
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={closeOffcanvas}
            ></button>
          </Offcanvas.Header>
          <Offcanvas.Body className="navbar__sidebar-body">
            <Nav className="justify-content-end fs-5 flex-grow-1 gap-3">
              <Link to="../#home" className="nav-link" onClick={closeOffcanvas}>
                <p className="m-0">home</p>
              </Link>
              <Link
                to="../#what-it-is"
                className="nav-link"
                onClick={closeOffcanvas}
              >
                <p className="m-0">co to jest?</p>
              </Link>
              <Link
                to="../#your-rights"
                className="nav-link"
                onClick={closeOffcanvas}
              >
                <p className="m-0">twoje prawa</p>
              </Link>
              <Button content="gra" link="../#quiz" />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
