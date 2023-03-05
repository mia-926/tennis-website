import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavStyles.css";

function BootstrapNav(props) {
  const myColor = props.color;
  console.log(myColor)
  return (
    
    <Nav className="me-auto color"  >
      <Nav.Link  style={{color:myColor}} href="/home ">Home</Nav.Link>
      <Nav.Link  style={{color:myColor}} href="/instructors">Instructors</Nav.Link>
      <Nav.Link  style={{color:myColor}} href="/mission">Mission</Nav.Link>
      <Nav.Link  style={{color:myColor}} href="/join-lesson">Join a lesson</Nav.Link>
      <NavDropdown title="Account"  id={myColor}>
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