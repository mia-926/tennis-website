import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import "./NavStyles.css";

function BootstrapNav() {
  return (
        <Nav className>
            <Nav.Link className = "white" href="#create-account">Create Account</Nav.Link>
            <Nav.Link className = "white" href="#login">Login</Nav.Link>
        </Nav>
  );
}

export default BootstrapNav;