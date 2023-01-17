import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavStyles.css";
import Container from 'react-bootstrap/Container';



export const MyNavBar = () => {
  return (
    <div>
      <Navbar fixed = "top" expand = "lg">
        {/* <Container> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <LeftNav/>
            <RightNav/>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
};


