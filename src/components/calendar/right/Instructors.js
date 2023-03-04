import React, {useState} from 'react';
import {Names} from './Names';
import { Participants } from './Participants';
import { Input } from './Input';
import './fonts.css';
import './right.css';

const instructorNames = [
    "Ethan",
    "Tarune"
]

export const Instructors = () => {
    return (
        <div className='contain'>
           <h2 className='inter'>INSTRUCTORS</h2>
           <Names/>
        <div >
           <h2 className='inter'>PARTICIPANTS</h2>
           <Participants/>
           <Input/>
        </div>

        </div>
    );
}
