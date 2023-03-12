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
      
      <Nav.Link  style={{color:myColor}} href="/account">Account</Nav.Link>
     <Nav.Link  style={{color:myColor}} href="/admin-page">Admin</Nav.Link>
    </Nav>

  );
}

export default BootstrapNav;