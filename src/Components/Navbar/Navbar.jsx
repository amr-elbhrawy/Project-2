import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
 import 'bootstrap/dist/css/bootstrap.min.css';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="#">
          <img src="/imgs/nav/logo.png" alt="Logo" height="40" />
        </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto">
            <Nav.Link href="#action1">Become a rental</Nav.Link>
            <Nav.Link href="#action2">Rental deals</Nav.Link>
            <Nav.Link href="#action3">How it works</Nav.Link>
            <Nav.Link href="#action4">Why choose us</Nav.Link>
          </Nav>

          <div className="d-flex gap-2">
            <Button variant="outline-success">Sign In</Button>
            <Button variant="outline-success">Sign Up</Button>
          </div>
         </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;