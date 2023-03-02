import React from 'react'
import { Input } from './Input';
import { Title } from './Title';
import { GreenCircles } from '../missionstatement/GreenCircles';
import "./signup.css";

export const SignUp = () => {
  return (
    <div >
        <GreenCircles/>
        <div className='container' style = {{paddingTop: 100}}>
            <div className='title'>
            <Title/>
            </div>
            <div className='form'>
            <Input/>
            </div>
        </div>
    </div>

  )
}
