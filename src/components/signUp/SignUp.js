import React, { useEffect, useRef, useState} from 'react';
import { Input } from './Input';
import { Title } from './Title';
import { LoginGreenCircles } from '../login/LoginGreenCircles';
import "./signup.css";
import logo from '../../images/greenlogo.png';

export const SignUp = () => {
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
      <div >
          <div className='signUpContainer' style = {{paddingTop: 125}}>
              <div className='signUpTitle' style = {{flex: 3}}>
              <Title/>
              </div>
              <div className='signUpForm' style = {{flex: 8}}>
              <Input/>
              </div>
          </div>
      </div>
    </div>
  )
}
  return (

    <div >
        <LoginGreenCircles/>
        <div className='signUpContainer' style = {{paddingTop: 150}}>
            <div className='signUpTitle' style = {{flex: 3}}>
            <Title/>
            </div>
            <div className='signUpForm' style = {{flex: 8}}>
            <Input/>
            </div>
        </div>
    </div>

  )
}
