import React, {useState, useEffect} from 'react';
import {Names} from './Names';
import { Participants } from './Participants';
import { Input } from './Input';
import './fonts.css';
import Form from 'react-bootstrap/Form';
import './right.css'
import racketImage from "../../../images/rackets.jpg";
import useAuth from "../../hooks/useAuth";
import axios from'axios';
import Button from 'react-bootstrap/Button';


export const Instructors = (props) => {
    const[message, setMessage] = useState("");
    const[requestMessage, setRequestMessage] = useState("Request for Lesson");
    const [inputValue, setInputValue] = useState('');
    const[showRequest, setShowRequest] = useState(true);
    const {auth} = useAuth();


    function post(){
        let data;
        if(requestMessage != ""){
        data = {user: auth._id, date:props.value, message:String(inputValue)};}
        else {data = {user: auth._id, date:props.value};}
        console.log(data)
        axios.post("https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/request", data)
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err.response)
        })
    
        setInputValue("");
      }
    

  function handleChange(event) {
    setInputValue(event.target.value);
  }
    
    function email(){
        post();
        setMessage ("You will receive an email if a lesson is scheduled on this day.");
        setRequestMessage("Requested")
    }

    useEffect(() => {
        setMessage("");
        setRequestMessage("Request for Lesson");
        
        let today = new Date(Date.now());
        today.setDate(today.getDate() - 1);
        if(props.value < today){
            setShowRequest(false);
        }else{
            setShowRequest(true);
    }
        
    }, [props.value])


    if(props.isLesson){

        
        const instructorNames = props.people;
        let studentNames;
        if(props.students){
            studentNames = props.students;
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
        if(showRequest){
        return (
            <div className='myContain' style = {{marginTop:20}}>
            <p>Click on a circled day to join a lesson!</p>
            <p className='inter'>Can't make other days?</p>
            <h5 style={{textAlign:'center'}}className='inter'>Request a lesson on the selected day and add an optional message.</h5>
            {/* <label  style={{ padding: 30, display: 'flex', alignItems: 'center' }}>
                <div>
                    <textArea style={{borderRadius:'20px', width:200, textAlign:"center",borderWidth:"0",  minHeight: 60,  verticalAlign: 'middle' }}type="text" value={inputValue} onChange={handleChange} placeholder="add optional message"/>
                </div>
            </label> */}
            <Form style={{padding:25}}>
                <Form.Group className="mb-3" controlId="formBasicInstructors">
                        <Form.Control as="textarea" rows = {5} autoComplete = "off" value = {inputValue} onChange = {handleChange} placeholder="add optional message" style={{width:200, height:100, borderWidth:0}}/>
                </Form.Group>
            </Form>
            <Button className="greenb btn btn-primary buttonHover"onClick={email}>{requestMessage}</Button>
            <p style={{height:20, textAlign:"center", marginTop:40}}>{message}</p>
            
            </div>
        );}
        else{
            return (
                <div className='myContain' style = {{marginTop:20}}>
                <p>Click on a circled day to join a lesson!</p>
                </div>
            );
        }
    }
}
