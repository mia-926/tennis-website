
import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './admin.css';
import axios from 'axios';
import { Instructors } from '../right/Instructors';


export const AdminEdit = (props) => {
    const [time, settime] = useState(props.time);
    const [location, setlocation] = useState(props.location);
    const [address, setaddress] = useState(props.address);
    const [instructors, setinstructors] = useState(props.instructors);
    const [maxStudents, setmaxStudents] = useState(props.max);
    const [inputNotes, setInputNotes] = useState("");
    const [students, setStudents] = useState([]);
    const [studentCount, setStudentCount] = useState(0);

    
    useEffect(() => {
        settime(props.time);
        setlocation(props.location);
        setaddress(props.address);
        setinstructors(props.instructors);
        setmaxStudents(props.max);
        let studentFormatted = '';
        for(let i = 0; i < props.students.length; i++){
            studentFormatted += props.students[i] + "\n";
        }
        setStudents(studentFormatted);
        setStudentCount(props.students.length);
        
        

    }, [props.lessonId])

  function handleChangeTime(event) { settime(event.target.value);}
  function handleChangeLocation(event) { setlocation(event.target.value);}
  function handleChangeAddress(event) { setaddress(event.target.value);}
  function handleChangeInstructors(event) {setinstructors(event.target.value.split(","));}
  function handleChangeLimit(event) { setmaxStudents(event.target.value);}
  function handleChangeNotes(event) { setInputNotes(event.target.value);}



  function patch(){
    const data = Object.assign({ _id: String(props.lessonId) }, 
    time !== props.time && { time },
    location !== props.location && { location },
    address !== props.address && { address },
    instructors !== null && { instructors },
    maxStudents !== props.max && { maxStudents },
    inputNotes !== null && { inputNotes },
);
    console.log(data);
    axios.patch("https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/lesson", data)
    .then(response => {
      console.log("lesson edited")
      console.log(response)
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
                    <Form.Control autoComplete = "off" value = {time} onChange = {handleChangeTime}type="time"/>
                </Form.Group>

                  {/* Location */}
                  <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control autoComplete = "off" value = {location} onChange = {handleChangeLocation} placeholder="Ex. Westlake High School" style={{width:"210px"}}/>
                </Form.Group>
                </div>

                <div style={{display: 'flex', flexDirection: "row", justifyContent: "space-between"}}>
                    {/* Address */}
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control style={{width:"500px"}} autoComplete = "off" value = {address} onChange = {handleChangeAddress}type="Address" placeholder="Enter address" />
                    </Form.Group>
                    </div>
                    {/* students */}

                    
                    <div style={{display: 'flex', flexDirection: "row", justifyContent: "space-between"}}>
                    <Form.Group className="mb-3 bold" controlId="formBasicNotes">
                        <Form.Label>Students {studentCount} out of {maxStudents}</Form.Label>
                        <Form.Control disabled as="textarea" rows = {5}autoComplete = "off" value = {inputNotes} onChange = {handleChangeNotes} 
                        placeholder={students}  
                            style={{height: '200px'}} className="FormControl requests" />
                    </Form.Group>



                    <div style={{display: 'flex', flexDirection: "column", justifyContent: "space-between"}}>
                    {/* Limit */}

                    <Form.Group className="mb-3" controlId="formBasicLimit">
                        <Form.Label>Student Limit</Form.Label>
                        <Form.Control autoComplete = "off" value = {maxStudents} onChange = {handleChangeLimit} placeholder="Enter limit" />
                    </Form.Group>



                    {/* instructors */}
                    <Form.Group className="mb-3" controlId="formBasicInstructors">
                        <Form.Label>Instructors</Form.Label>
                        <Form.Control as="textarea" rows = {5} autoComplete = "off" value = {instructors} onChange = {handleChangeInstructors} placeholder="Enter Instructors with comma in bewtween" style={{width:200, height:100}}/>
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


