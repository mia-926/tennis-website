import React from 'react'
import { Input } from './Input';
import { Title } from './Title';
import { LoginGreenCircles } from '../login/LoginGreenCircles';
import "./signup.css";

export const SignUp = () => {
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
