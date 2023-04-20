import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
const Header = () => {
  return (
  <header>
    <Navbar bg="light" variant = 'light' expand="lg" collapseOnSelect>
    <Container>
      <Navbar.Brand href="/"><img src={require('../img/BURBERRY1.png')} width="90"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/For_whom">Для кого</Nav.Link>
        <Nav.Link href="/Catalog">Каталог</Nav.Link>
        <Nav.Link href="/Profile">Профиль</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  );
}

export default Header