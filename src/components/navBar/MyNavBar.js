import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import LeftNav from './LeftNav';
import RightNav from './RightNav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavStyles.css";



export const MyNavBar = (props) => {



const [imageWidth, setimageWidth] = useState(window.innerWidth);


useEffect(() =>{
    const handleResize = () => {
      setimageWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize)

    return () => {
        window.removeEventListener('resize', handleResize)
    }
}, [])

  return (
    <div>
      <Navbar fixed = "top" expand = "lg" style = {{marginTop: "-.7%"}}>
        {/* <Container> */}
          <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="color-my-navbar-collapse">
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
};


