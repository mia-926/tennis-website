import React, {useState, useEffect} from 'react';
import {CNames} from './CNames';
import { CParticipants } from './CParticipants';
import { CInput } from './CInput';
import './fonts.css';
import Form from 'react-bootstrap/Form';
import './right.css'
import racketImage from "../../../images/rackets.jpg";
import useAuth from "../../hooks/useAuth";
import axios from'axios';
import Button from 'react-bootstrap/Button';


export const CInstructors = (props) => {
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
        axios.post("https://tennis-backend-c6oszgtd6a-uw.a.run.app/api/request", data)
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
            <div style={{backgroundColor:"#294539", color:"white"}}>
            <h4 className='railway' style={{fontSize:"100%"}}>instructors:</h4>
            <CNames names = {instructorNames}/>
            <div >
            <div style={{paddingBottom:'30px'}}>
            <h2 className='railway' style={{paddingBottom:10, paddingTop:20, fontSize:"100%"}}>participants:</h2>
            <CParticipants max = {props.max} students = {studentNames}/>
            </div>
            <CInput max = {props.max} students = {studentNames} lessonId = {props.lessonId}/>
            </div>

            </div>
        );
    }else{
        if(showRequest){
        return (
            <div className='myContain' style = {{marginTop:20, color:"white"}}>
            <h5 style={{textAlign:'center'}}className='railway'>Request a lesson on the selected day and add an optional message.</h5>
            <Form style={{padding:25}}>
                <Form.Group className="mb-3" controlId="formBasicInstructors">
                        <Form.Control as="textarea" rows = {5} autoComplete = "off" value = {inputValue} onChange = {handleChange} placeholder="add optional message" style={{height:100, borderWidth:0}}/>
                </Form.Group>
            </Form>
            <Button className="whiteb btn btn-primary buttonHover railway"onClick={email}>{requestMessage}</Button>
            <p style={{height:20, textAlign:"center", marginTop:40}}>{message}</p>
            
            </div>
        );}
        else{
            return (
                <div className='myContain railway' style = {{marginTop:20, color:'white', paddingBottom:window.innerHeight-400}}>
                <p>Click on a circled day to join a lesson!</p>
                </div>
            );
        }
    }
}
