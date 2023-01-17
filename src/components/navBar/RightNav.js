import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import "./NavStyles.css";

function BootstrapNav() {
  return (
        <Nav className>
            <Nav.Link className = "black" href="#create-account">Create Account</Nav.Link>
            <Nav.Link className = "black" href="#login">Login</Nav.Link>
        </Nav>
  );
}

export default BootstrapNav;