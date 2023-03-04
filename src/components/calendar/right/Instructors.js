import React, {useState} from 'react';
import {Names} from './Names';
import { Participants } from './Participants';
import { Input } from './Input';
import './fonts.css';
import './right.css'



export const Instructors = (props) => {

    if(props.isLesson){
        const instructorNames = props.people;
        let studentNames;
        if(props.students){
        studentNames = props.students;
        }
        else{
            studentNames = [];
        }
        console.log(instructorNames)
        return (
            <div className='contain'>
            <h2 className='inter'>INSTRUCTORS</h2>
            <Names names = {instructorNames}/>
            <div >
            <h2 className='inter'>PARTICIPANTS</h2>
            <Participants max = {props.max} students = {studentNames}/>
            <Input/>
            </div>

            </div>
        );
    }else{
        return (
            <div className='contain' style = {{marginTop:20}}>
            <h2 className='inter'>No Lesson Today</h2>
            <p>Click on a circled day to join a lesson!</p>
            </div>
        );
    }
}
