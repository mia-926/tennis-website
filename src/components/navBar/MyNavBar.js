import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';

import LeftNav from './LeftNav';
import RightNav from './RightNav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavStyles.css";
import useAuth from '../hooks/useAuth';



export const MyNavBar = (props) => {

const setBackground = ()=>{
  if(window.innerWidth < 700){
    return "white";
  }
  else{
    return props.background;
  }
}

const setColor = ()=>{
  if(window.innerWidth < 700){
    return "black";
  }
  else{
    return props.color;
  }
}

const [imageWidth, setimageWidth] = useState(window.innerWidth);
const {setAuth} = useAuth();
const {auth} = useAuth();
const [navBackgroundColor, setNavBackgroundColor] = useState(()=>setBackground);
const [navLinkColor, setNavLinkColor] = useState(()=>setColor);
function signOut(){
  setAuth({})
  window.location.href = "/home";
}

useEffect(() =>{
    const handleResize = () => {
      setimageWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize)

    return () => {
        window.removeEventListener('resize', handleResize)
    }
}, [])

useEffect(() =>{
  setNavBackgroundColor(setBackground());
  setNavLinkColor(setColor());
}, [])
  if(window.innerWidth >= 992)
  return (
    <div>
      <Navbar fixed = "top" expand = "lg" style = {{marginTop: "-.7%"}}>
        {/* <Container> */}
          <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div style={{width:window.innerWidth, display:"flex", flexDirection:"row", justifyContent:"space-between", alignContent:"center"}}>
            <LeftNav color = {props.color} background = {props.background}/>
            <RightNav color = {props.rightColor}  rightbackground = {props.rightbackground}/>
            </div>
          </Navbar.Collapse>
          </div>
        {/* </Container> */}
      </Navbar>
    </div>
  );
  else{
    if(auth !== undefined && auth?._id !== undefined  && auth?.admin === true){
      return (
        <div>
        <Navbar fixed = "top" expand = "lg" style = {{marginTop: "-.7%"}}>
          {/* <Container> */}
            <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style = {{borderColor: navLinkColor, backgroundColor: navBackgroundColor, marginLeft: 5}}></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <div style={{width:window.innerWidth, width: "100%", borderRadius: "15px 15px 15px 15px", backgroundColor: navBackgroundColor, paddingLeft:5, paddingRight: 5,display:"flex", flexDirection:"column", justifyContent:"space-between", alignContent:"center"}}>
                <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/home ">Home</Nav.Link>
                <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}} href="/instructors">Instructors</Nav.Link>
                <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}} href="/mission">Mission</Nav.Link>
                <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/join-lesson">Join a Lesson</Nav.Link>
                <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/learn-more">Learn More</Nav.Link>
                <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/account">Account</Nav.Link>
                <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}} href="/admin-page">Admin</Nav.Link>
                <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}}className = "white" href="/create-account">Create Account</Nav.Link>
                <Nav.Link style={{color:navLinkColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}} className = "white" onClick = {signOut}>Sign Out</Nav.Link>
              </div>
            </Navbar.Collapse>
            </div>
          {/* </Container> */}
        </Navbar>
        </div>
      );
  }
  else if(auth === undefined || auth?._id === undefined){
    return (
      <div>
      <Navbar fixed = "top" expand = "lg" style = {{marginTop: "-.7%"}}>
        {/* <Container> */}
          <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style = {{borderColor: navLinkColor, backgroundColor: navBackgroundColor, marginLeft: 5}}></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <div style={{width:window.innerWidth, width: "100%", borderRadius: "15px 15px 15px 15px", backgroundColor: navBackgroundColor, paddingLeft:5, paddingRight: 5,display:"flex", flexDirection:"column", justifyContent:"space-between", alignContent:"center"}}>
              <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/home ">Home</Nav.Link>
              <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}} href="/instructors">Instructors</Nav.Link>
              <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}} href="/mission">Mission</Nav.Link>
              <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/join-lesson">Join a Lesson</Nav.Link>
              <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/learn-more">Learn More</Nav.Link>
              <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/instructor-signup">Become Instructor</Nav.Link>
              <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/account">Account</Nav.Link>
              <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}}className = "white" href="/create-account">Create Account</Nav.Link>
              <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}}className = "white" href="/login">Login</Nav.Link>
            </div>
          </Navbar.Collapse>
          </div>
        {/* </Container> */}
      </Navbar>
      </div>
    );
    }
    else{
      return (
        <div>
        <Navbar fixed = "top" expand = "lg" style = {{marginTop: "-.7%"}}>
          {/* <Container> */}
            <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style = {{borderColor: navLinkColor, backgroundColor: navBackgroundColor, marginLeft: 5}}></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <div style={{width:window.innerWidth, width: "100%", borderRadius: "15px 15px 15px 15px", backgroundColor: navBackgroundColor, paddingLeft:5,paddingRight: 5,display:"flex", flexDirection:"column", justifyContent:"space-between", alignContent:"center"}}>
                <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/home ">Home</Nav.Link>
                <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}} href="/instructors">Instructors</Nav.Link>
                <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}} href="/mission">Mission</Nav.Link>
                <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/join-lesson">Join a Lesson</Nav.Link>
                <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/learn-more">Learn More</Nav.Link>
                <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%',marginTop: ".7%"}} href="/account">Account</Nav.Link>
                <Nav.Link  style={{color:navLinkColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}}className = "white" href="/create-account">Create Account</Nav.Link>
                <Nav.Link style={{color:navLinkColor, fontWeight:800, fontSize:'90%', marginTop: ".7%"}} className = "white" onClick = {signOut}>Sign Out</Nav.Link>
              </div>
            </Navbar.Collapse>
            </div>
          {/* </Container> */}
        </Navbar>
        </div>
      );
    }
  }
};


