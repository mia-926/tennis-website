import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import "./NavStyles.css";
import useAuth from '../hooks/useAuth';

function BootstrapNav(props) {
  const myColor = props.color;
  const rightbackground = props.rightbackground;
  const {setAuth} = useAuth();
  const {auth} = useAuth()
  function signOut(){
    setAuth({})
    window.location.href = "/home";
  }
  if(auth !== undefined && auth?._id !== undefined  && auth?.admin === true){
    return (
      <Nav style={{ borderRadius:"15px 0 0 15px", backgroundColor:rightbackground}}>
        <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}} href="/view-applications">Applications</Nav.Link>
          <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}} href="/admin-page">Edit Lessons</Nav.Link>
          <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}}className = "white" href="/create-account">Create Account</Nav.Link>
          <Nav.Link style={{color:myColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}} className = "white" onClick = {signOut}>Sign Out</Nav.Link>
      </Nav>
);
}
  else if(auth === undefined || auth?._id === undefined){
    return (
          <Nav style={{borderRadius:"15px 0 0 15px", backgroundColor:rightbackground}}>
             <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/instructor-signup">Become Instructor</Nav.Link>
              <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}}className = "white" href="/create-account">Create Account</Nav.Link>
              <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}}className = "white" href="/login">Login</Nav.Link>
          </Nav>
    );
  }
  else{
  return (
    <Nav className  style={{borderRadius:"15px 0 0 15px", backgroundColor:rightbackground}}>
       <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/instructor-signup">Become Instructor</Nav.Link>
        <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}}className = "white" href="/create-account">Create Account</Nav.Link>
        <Nav.Link style={{color:myColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}} className = "white" onClick = {signOut}>Sign Out</Nav.Link>
    </Nav>
);
  }
}

export default BootstrapNav;