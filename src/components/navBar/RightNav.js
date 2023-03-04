import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import "./NavStyles.css";
import useAuth from '../hooks/useAuth';

function BootstrapNav() {
  const {setAuth} = useAuth();
  const {auth} = useAuth()
  function signOut(){
    console.log("test")
    setAuth({})
    window.location.href = "/home";
  }
  if(auth === undefined || auth?._id === undefined){
    return (
          <Nav className>
              <Nav.Link className = "white" href="/create-account">Create Account</Nav.Link>
              <Nav.Link className = "white" href="/login">Login</Nav.Link>
          </Nav>
    );
  }
  else{
  return (
    <Nav className>
        <Nav.Link className = "white" href="/create-account">Create Account</Nav.Link>
        <Nav.Link className = "white" onClick = {signOut}>Sign Out</Nav.Link>
    </Nav>
);
  }
}

export default BootstrapNav;