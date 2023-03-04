import React from 'react'
import { Input } from './Input';
import { Title } from './Title';
import { GreenCircles } from '../missionstatement/GreenCircles';
import "./signup.css";

export const SignUp = () => {
  return (
    <div >
        <GreenCircles/>
        <div className='c' style = {{paddingTop: 150}}>
            <div className='t' style = {{flex: 3}}>
            <Title/>
            </div>
            <div className='f' style = {{flex: 8}}>
            <Input/>
            </div>
        </div>
    </div>

  )
}
