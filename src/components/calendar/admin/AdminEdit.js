
import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './admin.css';
import axios from 'axios';
import { Instructors } from '../right/Instructors';


export const AdminEdit = (props) => {
    const [inputTime, setInputTime] = useState(props.time);
    const [inputLocation, setInputLocation] = useState(props.location);
    const [inputAddress, setInputAddress] = useState(props.address);
    const [inputInstructors, setInputInstructors] = useState(props.instructors);
    const [inputLimit, setInputLimit] = useState(props.max);
    const [inputNotes, setInputNotes] = useState("");

    

  function handleChangeTime(event) { setInputTime(event.target.value);}
  function handleChangeLocation(event) { setInputLocation(event.target.value);}
  function handleChangeAddress(event) { setInputAddress(event.target.value);}
  function handleChangeInstructors(event) {setInputInstructors(event.target.value.split(","));}
  function handleChangeLimit(event) { setInputLimit(event.target.value);}
  function handleChangeNotes(event) { setInputNotes(event.target.value);}



  function patch(){
    const data = Object.assign({ _id: String(props.lessonId) }, 
    inputTime !== props.time && { inputTime },
    inputLocation !== props.location && { inputLocation },
    inputAddress !== props.inputAddress && { inputAddress },
    inputInstructors !== null && { inputInstructors },
    inputLimit !== props.max && { inputLimit },
    inputNotes !== null && { inputNotes },
);
    console.log(data);
    axios.patch("https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/lesson", data)
    .then(response => {
      console.log("lesson edited")
    })
    .catch(err => {
      console.log(err)
    })
  }

//   if(!(props.isLesson)){
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
                        <Form.Control style={{width:"500px"}} autoComplete = "off" value = {inputAddress} onChange = {handleChangeAddress}type="Address" placeholder="Enter address" />
                    </Form.Group>
                    </div>
                    {/* Instructors */}

                    
                    <div style={{display: 'flex', flexDirection: "row", justifyContent: "space-between"}}>
                    <Form.Group className="mb-3" controlId="formBasicNotes">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control as="textarea" rows = {5}autoComplete = "off" value = {inputNotes} onChange = {handleChangeNotes} placeholder="Enter Notes"  style={{height: '200px'}}/>
                    </Form.Group>



                    <div style={{display: 'flex', flexDirection: "column", justifyContent: "space-between"}}>
                    {/* Limit */}

                    <Form.Group className="mb-3" controlId="formBasicLimit">
                        <Form.Label>Student Limit</Form.Label>
                        <Form.Control autoComplete = "off" value = {inputLimit} onChange = {handleChangeLimit} placeholder="Enter Student Limit" />
                    </Form.Group>



                    {/* Notes */}
                    <Form.Group className="mb-3" controlId="formBasicInstructors">
                        <Form.Label>Instructors</Form.Label>
                        <Form.Control as="textarea" rows = {5} autoComplete = "off" value = {inputInstructors} onChange = {handleChangeInstructors} placeholder="Enter Instructors with comma in bewtween" style={{width:200, height:100}}/>
                    </Form.Group>
                    </div>
                    </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{width:'300px'}} onClick={patch} className= "button" variant="success" >
                    Edit Lesson
                </Button>
                </div>
                </Form>
            </div>
        </div>
    );
    }


