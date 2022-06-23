import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Heading from "./Heading";

function Layout({ children, title }) {
  return (
    <>
      <Navbar bg="dark" expand="lg" className="p-4">
        <Container>
          <Navbar.Brand href="#home">
            <span>Next</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="mx-5 text-center">
                <Link href="/">Home</Link>
              </div>
              <div className="text-center">
                <Link href="/results">Results</Link>
              </div>
              <div className="mx-5 text-center">
                <Link href="/about-us">About</Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Heading title={title} />
        <div className="text-center">{children}</div>
      </Container>
    </>
  );
}

export default Layout;
