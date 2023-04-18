import React, { useEffect, useRef, useState} from 'react';
import { Input } from './Input';
import { Title } from './Title';
import { LoginGreenCircles } from '../login/LoginGreenCircles';
import "./signup.css";

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
    <div >
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
