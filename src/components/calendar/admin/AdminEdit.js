import React, { useEffect, useRef, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './admin.css';
import axios from 'axios';
import { Instructors } from '../right/Instructors';
import moment from 'moment';

export const AdminEdit = (props) => {
    const [time, settime] = useState(moment(props.time, 'hh:mm A').format('HH:mm'));
    const [location, setlocation] = useState(props.location);
    const [address, setaddress] = useState(props.address);
    const [instructors, setinstructors] = useState(props.instructors);
    const [maxStudents, setmaxStudents] = useState(props.max);
    const [inputNotes, setInputNotes] = useState("");
    const [students, setStudents] = useState([]);
    const [studentCount, setStudentCount] = useState(0);
    const [edited, setEdited] = useState(0);
    const [errMsg, setErrMsg] = useState("");
    const errRef = useRef();

    
    useEffect(() => {
        settime(moment(props.time, 'hh:mm A').format('HH:mm'));
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
        setEdited(0);
        

    }, [props.lessonId])

  function handleChangeTime(event) { settime(event.target.value);}
  function handleChangeLocation(event) { setlocation(event.target.value);}
  function handleChangeAddress(event) { setaddress(event.target.value);}
  function handleChangeInstructors(event) {setinstructors(event.target.value.split(","));}
  function handleChangeLimit(event) { setmaxStudents(event.target.value);}
  function handleChangeNotes(event) { setInputNotes(event.target.value);}



  function patch(){
    setEdited(1);
    const data = Object.assign({ _id: String(props.lessonId) }, 
    time !== props.time && { time },
    location !== props.location && { location },
    address !== props.address && { address },
    instructors !== null && { instructors },
    maxStudents !== props.max && { maxStudents },
    inputNotes !== null && { inputNotes },
    );
    console.log(data);
    axios.patch("https://tennis-backend-c6oszgtd6a-uw.a.run.app/api/lesson", data)
    .then(response => {
      console.log("lesson edited")
      setErrMsg("*Lesson Added")
      console.log(response)
    })
    .catch(err => {
        if(!err?.response){
          setErrMsg("*No Server Response")
        }
        switch(err.response?.status){
          case 401:
            setErrMsg("*Please Enter a Date")
            break
          case 402:
            setErrMsg("*A lesson is Already on That Date")
            break
          case 403:
            setErrMsg("*Invalid Time")
            break
          case 408:
            setErrMsg("*Please Enter a Time")
            break
          case 399:
            setErrMsg("*Max Students Must be Positive")
            break
          case 405:
            setErrMsg("*Please Enter Max Students")
            break
          case 406:
            setErrMsg("*Please Enter Instructors")
            break
          case 407:
            setErrMsg("*Please Enter Address")
            break
          case 409:
            setErrMsg("*Please Enter Location")
            break
          case 410:
            setErrMsg("*Invalid Address")
            break
          case 411:
            setErrMsg("*Try Changing Address")
            break
          case 412:
            setErrMsg("*Coordinate Error")
            break
          case 422:
            setErrMsg("*ERROR")
            break
          default:
            setErrMsg("*Error Try Again")
        }
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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , flexDirection:"column"}}>
                <Button style={{width:'300px'}} onClick={patch} className= "button roundedInput" variant="success" >
                    Edit Lesson
                </Button>
                <Button style={{width:'300px', background:"transparent", marginTop:20, borderColor:"black", borderWidth:2, color:"black"}} className= "button roundedInput redDeleteHover" variant="success" >
                    Delete Lesson
                </Button>
                <p ref ={errRef} style = {{marginTop:20,height: 20, opacity:edited}} className= {errMsg ? (errMsg == "*Lesson Added"? "lessonvalidatedmsg":"lessonerrmsg") : "lessonoffscreen"} aria-live= "assertive"> {errMsg} </p> 
                </div>
                </Form>
            </div>
        </div>
    );
}
