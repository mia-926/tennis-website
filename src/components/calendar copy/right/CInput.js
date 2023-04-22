import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import {Participants} from './CParticipants';
import './right.css';
import './fonts.css';
import axios from 'axios';
import useReload from '../../hooks/useReload';
import useAuth from "../../hooks/useAuth";

export const CInput = (props) => {
  const {auth} = useAuth();
  const [inputValue, setInputValue] = useState('');
  const [didRegister, setDidRegiser] = useState('');
  const [newNames, setNewNames] = useState("");
  const {reload} = useReload()
  const {setReload} = useReload();

  function handleChange(event) {
    setInputValue(event.target.value);
  }
  function patch(){
    const data = {_id: String(props.lessonId), studentName:String(inputValue), student: String(auth._id)};
    console.log(data);
    axios.patch("https://wta-backend-c6oszgtd6a-wl.a.run.app/api/lessonAddStudent", data)
    .then(response => {
      setNewNames(inputValue);
      console.log(reload)
      setReload(!reload)
    })
    .catch(err => {
      setDidRegiser("Failed to add to Register. Try again later.")
    })

    setInputValue("");
  }

  if(props.students.length < props.max){
  return (
    <div>
      {/* <Participants max = {props.max} students = {props.students} newNames={newNames}/> */}
        <div className='inter myContain'>
        <label  className='myContain'>
            Participant Name
            <div>
                <input className = "ParticipantForm" type="text" value={inputValue} onChange={handleChange} />
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
      <div className='railway' style={{alignSelf:'center'}}>
        <h1 style={{fontSize:'2em', textAlign:'center', fontWeight:400, paddingTop:10}}>Lesson is Full</h1>
      </div>
    )
  }

}


