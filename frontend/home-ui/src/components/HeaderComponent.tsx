import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import DropdownGlobe from '../services/dropdownGlobe';

const Header = () => {
  return (
    <Navbar sticky="top" collapseOnSelect className="navBg" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/home">W I C</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={'/about'}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to={'/contact'}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to={'/test'}>
              Test it
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Button href="http://localhost:3001" variant="primary">
            Login
          </Button>{' '}
          <DropdownGlobe />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
