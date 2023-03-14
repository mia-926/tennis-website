import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import LeftNav from './LeftNav';
import RightNav from './RightNav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavStyles.css";
import Container from 'react-bootstrap/Container';



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
      <Navbar fixed = "top" expand = "lg">
        {/* <Container> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div style={{width:window.innerWidth, display:"flex", flexDirection:"row", justifyContent:"space-between", alignContent:"center"}}>
            <LeftNav color = {props.color} background = {props.background}/>
            <RightNav color = {props.rightColor}  background = {props.background}/>
            </div>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
};


