import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import useAuth from '../hooks/useAuth';
import "./NavStyles.css";
import greenLogo from '../../../src/images/greenlogo.png';
import whiteLogo from '../../../src/images/logowhite.png';
function BootstrapNav(props) {
  const background = props.background;
  const myColor = props.color


  const [image, setImage] = useState(window.innerWidth);


useEffect(() =>{
    if(myColor == "black"){
      setImage(greenLogo)
    }
    else{
      setImage(whiteLogo)
    }
}, [props.color])
    return (
      <div>
      <a href = "/home">  <img style={{width:'6%', paddingLeft:10, position:"absolute", marginTop: ".7%"}}src ={image}></img></a>
      <Nav className="me-auto color railway" style={{backgroundColor:background, borderRadius:"0 15px 15px 0"}}>
        <Nav.Link  style={{color:myColor, paddingLeft:120, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/home ">Home</Nav.Link>
        <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}} href="/instructors">Instructors</Nav.Link>
        <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}} href="/mission">Mission</Nav.Link>
        <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/join-lesson">Join a Lesson</Nav.Link>
        <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/learn-more">Learn More</Nav.Link>
        <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/account">Account</Nav.Link>

      </Nav>
             
      </div>
    );
  }

export default BootstrapNav;

