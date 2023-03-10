
import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './admin.css';
import axios from 'axios';
import { Instructors } from '../right/Instructors';


export const AdminCalendar = (props) => {
    const [inputTime, setInputTime] = useState('');
    const [inputLocation, setInputLocation] = useState('');
    const [inputAddress, setInputAddress] = useState('');
    const [inputLat, setInputLat] = useState('');
    const [inputLng, setInputLng] = useState('');
    const [inputInstructors, setInputInstructors] = useState([]);
    const [inputLimit, setInputLimit] = useState('');
    const [inputNotes, setInputNotes] = useState('');

    useEffect(() =>{
        if(props.isLesson){
            const lat = parseFloat(props.coordinates[0]);
            const lng = parseFloat(props.coordinates[1]);
            setInputTime(props.time);
            setInputLocation(props.location);
            setInputAddress(props.address);
            setInputLat(lat);
            setInputLng(props.lng);
            setInputInstructors(props.instructors);
            setInputLimit(props.max);
        }
    }, [props.value])
    

  function handleChangeTime(event) { setInputTime(event.target.value);}
  function handleChangeLocation(event) { setInputLocation(event.target.value);}
  function handleChangeAddress(event) { setInputAddress(event.target.value);}
  function handleChangeLat(event) { setInputLat(event.target.value);}
  function handleChangeLng(event) { setInputLng(event.target.value);}
  function handleChangeInstructors(event) {setInputInstructors(event.target.value.split(","));}
  function handleChangeLimit(event) { setInputLimit(event.target.value);}
  function handleChangeNotes(event) { setInputNotes(event.target.value);}



  function patch(){
    const data = {date: String(props.value), time:String(inputTime), instructors:(inputInstructors), studentNames:([]), location: String(inputLocation), maxStudents: parseInt(inputLimit) };
    console.log(data);
    axios.post("https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/lesson", data)
    .then(response => {
      console.log("lesson added")
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
                        <Form.Control autoComplete = "off" value = {inputAddress} onChange = {handleChangeAddress}type="Address" placeholder="Enter address" />
                    </Form.Group>

                    {/* Lat */}
                    <div style={{display: 'flex', flexDirection: "row"}}>
                    <Form.Group className="mb-3" controlId="formBasicLatitude">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control autoComplete = "off" value = {inputLat} onChange = {handleChangeLat} placeholder="Latitude"  style={{width: '100px'}} />
                    </Form.Group>

                   
                    {/* Lng*/}

                    <Form.Group className="mb-3" controlId="formBasicLongitude">
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control autoComplete = "off" value = {inputLng} onChange = {handleChangeLng} placeholder="Longitude"  style={{width: '100px'}} />
                    </Form.Group>
                    </div>
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
                    Add Lesson
                </Button>
                </div>
                </Form>
            </div>
        </div>
    );
    }





//}