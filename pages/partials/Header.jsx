import * as React from "react";
import { Nav, Navbar } from "react-bootstrap";
function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Leonardo Jaques</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="#home">Blog</Nav.Link>
          <Nav.Link href="#features">Sobre</Nav.Link>
          <Nav.Link href="#pricing">Contatos</Nav.Link>
        </Nav>
      </Navbar>
      <br />
    </header>
  );
}

export default Header;
