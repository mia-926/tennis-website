import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import {Participants} from './Participants';
import './right.css';
import './fonts.css';
import axios from 'axios';

export const Input = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [didRegister, setDidRegiser] = useState('');
  const [newNames, setNewNames] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }
  console.log(newNames)
  function patch(){
    const data = {_id: String(props.lessonId), studentName:String(inputValue), student: String("666")};
    console.log(data);
    axios.patch("https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/lessonAddStudent", data)
    .then(response => {
      setNewNames(inputValue);
      console.log(newNames)
    })
    .catch(err => {
      setDidRegiser("Failed to add to Register. Try again later.")
    })
  }

  return (
    <div>
      {/* <Participants max = {props.max} students = {props.students} newNames={newNames}/> */}
        <div className='inter contain'>
        <label  className='contain'>
            Participant Name
            <div>
                <input type="text" value={inputValue} onChange={handleChange} />
            </div>
        </label>
       <p></p>
        {/* <p>You typed: {inputValue}</p> */}
        <Button onClick={patch} className= "button" variant="success">Register</Button>{' '}
        <p>{didRegister}</p>
        </div>
    </div>
  );

}


