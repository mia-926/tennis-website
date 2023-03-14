import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import "./NavStyles.css";
import useAuth from '../hooks/useAuth';

function BootstrapNav(props) {
  const myColor = props.color;
  const background = props.background;
  const {setAuth} = useAuth();
  const {auth} = useAuth()
  function signOut(){
    setAuth({})
    window.location.href = "/home";
  }
  if(auth !== undefined && auth?._id !== undefined  && auth?.admin === true){
    return (
      <Nav style={{ backgroundColor:'transparent', borderRadius:"15px 0 0 15px", backgroundColor:background}}>
          <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%'}} href="/admin-page">Admin</Nav.Link>
          <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%'}}className = "white" href="/create-account">Create Account</Nav.Link>
          <Nav.Link style={{color:myColor, fontWeight:800, fontSize:'90%'}} className = "white" onClick = {signOut}>Sign Out</Nav.Link>
      </Nav>
);
}
  if(auth === undefined || auth?._id === undefined){
    return (
          <Nav style={{ backgroundColor:'transparent', borderRadius:"15px 0 0 15px", backgroundColor:background}}>
              <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%'}}className = "white" href="/create-account">Create Account</Nav.Link>
              <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%'}}className = "white" href="/login">Login</Nav.Link>
          </Nav>
    );
  }
  else{
  return (
    <Nav className  style={{ backgroundColor:'transparent', borderRadius:"0 0 0 15px", backgroundColor:background}}>
        <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%'}}className = "white" href="/create-account">Create Account</Nav.Link>
        <Nav.Link style={{color:myColor, fontWeight:800, fontSize:'90%'}} className = "white" onClick = {signOut}>Sign Out</Nav.Link>
    </Nav>
);
  }
}

export default BootstrapNav;