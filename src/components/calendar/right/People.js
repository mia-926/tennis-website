import React, {useState} from 'react';
import './fonts.css';
const people = [
    "Tyler",
    "Ganhee",
    "Seb",
    "Nester"
]

export const People = () => {
        return people.map((person) => <li className='inter'>{person}</li>);
}