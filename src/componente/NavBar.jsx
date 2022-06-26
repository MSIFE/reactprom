import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
  
    <Navbar bg="light" variant="light">
    <Container>
    <NavLink to="/"><Navbar.Brand >Navbar</Navbar.Brand></NavLink>
    <Nav className="me-auto">
     <Nav.Link> <NavLink to="/categoria/interior">Interior</NavLink> </Nav.Link>
     <Nav.Link><NavLink to='/categoria/exterior'>Exterior</NavLink></Nav.Link>
     <Nav.Link><NavLink to="/cart">Features</NavLink></Nav.Link>
      </Nav>
    <CartWidget />
    </Container>
  </Navbar>


  )
}
