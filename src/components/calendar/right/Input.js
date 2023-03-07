import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import {Participants} from './Participants';
import './right.css';
import './fonts.css';
import axios from 'axios';
import useReload from '../../hooks/useReload';

export const Input = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [didRegister, setDidRegiser] = useState('');
  const [newNames, setNewNames] = useState("");
  const {reload} = useReload()
  const {setReload} = useReload();

  function handleChange(event) {
    setInputValue(event.target.value);
  }
  function patch(){
    const data = {_id: String(props.lessonId), studentName:String(inputValue), student: String("666")};
    console.log(data);
    axios.patch("https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/lessonAddStudent", data)
    .then(response => {
      setNewNames(inputValue);
      console.log(reload)
      setReload(!reload)
    })
    .catch(err => {
      setDidRegiser("Failed to add to Register. Try again later.")
    })
  }

  if(props.students.length < props.max){
  return (
    <div>
      {/* <Participants max = {props.max} students = {props.students} newNames={newNames}/> */}
        <div className='inter myContain'>
        <label  className='myContain'>
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
  else{
    return(
      <div className='inter' style={{alignSelf:'center'}}>
        <h1>Lesson is Full</h1>
      </div>
    )
  }

}


