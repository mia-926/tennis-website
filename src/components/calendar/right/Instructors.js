import React, {useState} from 'react';
import {Names} from './Names';
import { Participants } from './Participants';
import { Input } from './Input';
import './fonts.css';

import './right.css'
import racketImage from "../../../images/rackets.jpg";

import Button from 'react-bootstrap/Button';


export const Instructors = (props) => {
    const[message, setMessage] = useState("");
    const[requestMessage, setRequestMessage] = useState("Request for Lesson");

    
    function email(){
        setMessage ("You will receive an email if a lesson is scheduled on this day.");
        setRequestMessage("Requested")
    }
    console.log(message);
    if(props.isLesson){

        
        const instructorNames = props.people;
        let studentNames;
        if(props.students){
            studentNames = props.students;
            console.log("Instructors"+studentNames)
        }
        else{
            studentNames = [];
        }
        return (
            <div className='myContain'>
            <h2 className='inter'>INSTRUCTORS</h2>
            <Names names = {instructorNames}/>
            <div >
            <h2 className='inter'>PARTICIPANTS</h2>
            <Participants max = {props.max} students = {studentNames}/>
            <Input max = {props.max} students = {studentNames} lessonId = {props.lessonId}/>
            </div>

            </div>
        );
    }else{
        return (
            <div className='myContain' style = {{marginTop:20}}>
            <p>Click on a circled day to join a lesson!</p>
            <p className='inter'>Can't make other days?</p>
            <h5 style={{textAlign:'center'}}className='inter'>Request to have a lesson on the selected day.</h5>
        
            <Button className="greenb btn btn-primary buttonHover"onClick={email}>{requestMessage}</Button>
            <p style={{height:20, textAlign:"center", marginTop:40}}>{message}</p>
            
            </div>
        );
    }
}
