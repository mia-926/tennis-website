import React, {useState} from 'react';
import './fonts.css';

const instructorNames = [
    "Ethan",
    "Tarune"
]

export const Names = () => {
    return instructorNames.map((name) => <li className='inter'>{name}</li>);

 
}