import React from 'react'
import { LoginInput } from './LoginInput';
import { Title } from './Title';
import { GreenCircles } from '../missionstatement/GreenCircles';
import "./login.css";

export const Login = () => {
  return (
    <div >
        <GreenCircles/>
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
