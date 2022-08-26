import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <Navbar fixed="bottom" collapseOnSelect className="navBg"  expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="me-auto">
              <Nav.Link>version</Nav.Link>
              <Nav.Link>copyright</Nav.Link>
              <Nav.Link as={Link} to={"/disclaimer"} >disclaimer</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to={"/test"} >Link to github</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    )
}

export default Footer