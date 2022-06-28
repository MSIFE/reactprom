import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
  <>
   
    <Container>
    <NavLink to="/"><Navbar.Brand >Navbar</Navbar.Brand></NavLink>
   
      <NavLink to="/categoria/interior">Interior</NavLink> 
     <NavLink to='/categoria/exterior'>Exterior</NavLink>
     <NavLink to="/cart">Features</NavLink>
      
    <CartWidget />
    </Container>
 
  </>

  )
}
