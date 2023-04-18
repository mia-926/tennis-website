import React, { useState, useEffect } from 'react';
import { LoginInput } from './LoginInput';
import { Title } from './Title';
import { LoginGreenCircles } from './LoginGreenCircles';
import "./login.css";

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
    <div style={{width:window.innerWidth}}>
        <div className='l' style = {{paddingTop: 150}}>
            <div className='b' style = {{flex: 3}}>
            <Title/>
            </div>
            <div className='p' style = {{flex: 8}}>
            <LoginInput/>
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
