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
  console.log(myColor)


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
          <img style={{width:'6%', paddingLeft:10, position:"absolute"}}src ={image}></img>
      <Nav className="me-auto color railway" style={{backgroundColor:background}}>


        <Nav.Link  style={{color:myColor, paddingLeft:120, fontWeight:800, fontSize:'90%'}} href="/home ">Home</Nav.Link>
        <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%'}} href="/instructors">Instructors</Nav.Link>
        <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%'}} href="/mission">Mission</Nav.Link>
        <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%'}} href="/join-lesson">Join a lesson</Nav.Link>
        <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%'}} href="/learn-more">Learn More</Nav.Link>
        <Nav.Link  style={{color:myColor, fontWeight:800, fontSize:'90%'}} href="/account">Settings</Nav.Link>

      </Nav>
             
      </div>
    );
  }

export default BootstrapNav;

