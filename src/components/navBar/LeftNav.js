import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavStyles.css";

function BootstrapNav() {
  return (
    <Nav className="me-auto color">
      <Nav.Link className = "black" href="#home">Home</Nav.Link>
      <Nav.Link className = "black" href="#instructors">Instructors</Nav.Link>
      <Nav.Link className = "black" href="#mission">Mission</Nav.Link>
      <Nav.Link className = "black" href="#join-lesson">Join a lesson</Nav.Link>
      <NavDropdown title="Account" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Lesson History
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Upcoming Lessons</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default BootstrapNav;