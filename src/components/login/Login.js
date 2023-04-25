import React, { useState, useEffect } from 'react';
import { LoginInput } from './LoginInput';
import { Title } from './Title';
import { LoginGreenCircles } from './LoginGreenCircles';
import "./login.css";
import logo from '../../images/greenlogo.png';

export const Login = () => {
  const size = () => {
    if(window.innerWidth < 700){
        return true;
    }
    return false;
}
const [iphoneSize, setIphoneSize] = useState(() => size())

if(iphoneSize){
  return (
    
    <div style={{height: 600, background: "transparent"}}>
    <div>
        <div className="white-rectangle"></div><div style={{height:0,display:"flex", flexDirection:"row", justifyContent:"center", alignContent:"center"}}><img style={{paddingTop:'20px',position:"absolute" , width:'15%'}}src = {logo}></img></div>
    </div>:
      <div style={{width:window.innerWidth}}>
          <div className='l' style = {{paddingTop: 125}}>
              <div className='b' style = {{flex: 3}}>
              <Title/>
              </div>
              <div className='p' style = {{flex: 8}}>
              <LoginInput/>
              </div>
          </div>
      </div>
    </div>

  )
}
  return (
    <div >
        <LoginGreenCircles/>
        <div className='l' style = {{paddingTop: 150}}>
            <div className='b' style = {{flex: 3}}>
            <Title/>
            </div>
            <div className='p' style = {{flex: 8}}>
            <LoginInput/>
            </div>
        </div>
    </div>

  );
}
