
import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './admin.css';
import axios from 'axios';
import { Instructors } from '../right/Instructors';
import useRequest from '../../hooks/useRequest';

export const AdminCalendar = (props) => {
    const [inputTime, setInputTime] = useState('');
    const [inputLocation, setInputLocation] = useState('');
    const [inputAddress, setInputAddress] = useState('');
    const [inputInstructors, setInputInstructors] = useState([]);
    const [inputLimit, setInputLimit] = useState('');
    const [requests, setRequests] = useState("");
    const [requestNum, setRequestNum] = useState(0);

    

  function handleChangeTime(event) { setInputTime(event.target.value);}
  function handleChangeLocation(event) { setInputLocation(event.target.value);}
  function handleChangeAddress(event) { setInputAddress(event.target.value);}
  function handleChangeInstructors(event) {setInputInstructors(event.target.value.split(","));}
  function handleChangeLimit(event) { setInputLimit(event.target.value);}




  function post(){
    const data = {date: String(props.value), time:String(inputTime), instructors:(inputInstructors), studentNames:([]), location: String(inputLocation), maxStudents: parseInt(inputLimit) };
    
    axios.post("https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/lesson", data)
    .then(response => {
      console.log("lesson added" + response);
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
  function get(){
  
    axios.get("https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/requestByDate?date=" + String(props.value.toISOString()))
    .then(response => {
        console.log(response.data)
        let messageList = "";
        if(response.data != "No Request"){
            for(let i = 0; i < response.data.messages.length; i++){
                messageList += response.data.messages[i] + '\n';
            }
        }
      setRequests(messageList);
      setRequestNum(response.data.users.length)

    })
    .catch(err => {
      console.log(err.response)
    })
  }

  get()
}, [props.value])

    return(
        <div className='inter myContain' style={{width: '800px'}}>
            <div style={{display: 'flex', flexDirection: "column", justifyContent:"center"}}>
            <h2 style={{textAlign:"center"}}>{props.weekDay}, {props.month} {props.day}</h2>
    

                <Form>

                
                <div style={{display: 'flex', flexDirection: "row", justifyContent: "space-between", width: '500px'}}>

                    {/* TIME */}
                <Form.Group className="mb-3" controlId="formBasicTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control autoComplete = "off" value = {inputTime} onChange = {handleChangeTime}type="time"/>
                </Form.Group>

                  {/* Location */}
                  <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control autoComplete = "off" value = {inputLocation} onChange = {handleChangeLocation} placeholder="Ex. Westlake High School" style={{width:"210px"}}/>
                </Form.Group>
                </div>

                <div style={{display: 'flex', flexDirection: "row", justifyContent: "space-between"}}>
                    {/* Address */}
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control style={{width:"500px"}}autoComplete = "off" value = {inputAddress} onChange = {handleChangeAddress}type="Address" placeholder="Enter address" />
                    </Form.Group>

                    </div>
                    {/* Requests */}

                    
                    <div style={{display: 'flex', flexDirection: "row", justifyContent: "space-between"}}>
                    <Form.Group className="mb-3" controlId="formBasicNotes">
                        <Form.Label>{requestNum} Requests</Form.Label>
                        <Form.Control disabled as="textarea" rows = {5}autoComplete = "off" style={{height: '200px'}} placeholder={requests} className="FormControl requests"/>
                    </Form.Group>



                    <div style={{display: 'flex', flexDirection: "column", justifyContent: "space-between"}}>
                    {/* Limit */}

                    <Form.Group className="mb-3" controlId="formBasicLimit">
                        <Form.Label>Student Limit</Form.Label>
                        <Form.Control autoComplete = "off" value = {inputLimit} onChange = {handleChangeLimit} placeholder="Enter Student Limit" />
                    </Form.Group>



                    {/* Instructors */}
                    <Form.Group className="mb-3" controlId="formBasicInstructors">
                        <Form.Label>Instructors</Form.Label>
                        <Form.Control as="textarea" rows = {5} autoComplete = "off" value = {inputInstructors} onChange = {handleChangeInstructors} placeholder="Enter Instructors with comma in bewtween" style={{width:200, height:100}}/>
                    </Form.Group>
                    </div>
                    </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{width:'300px'}} onClick={post} className= "button roundedInput" variant="success" >
                    Add Lesson
                </Button>
                </div>
                </Form>
            </div>
        </div>
    );
    }





//}