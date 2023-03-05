import axios from "axios";

import React, { useEffect, useRef, useState} from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./logininputStyle.css";
import useAuth from "../hooks/useAuth";


export const LoginInput = () => {
  const errRef = useRef();
  const {setAuth} = useAuth();

  const [password, setPasswordValue] = useState('');
  const [username, setUsername] = useState('');
  const [errMsg, setErrMsg] = useState('')
  const [keepLogin, setkeepLogin] = useState(true);

  useEffect(()=>{
    setErrMsg('')
  }, [username, password])

  function handlePasswordChange(event) {
    setPasswordValue(event.target.value);
  }
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handlekeepLogin(event) {
    setkeepLogin(!keepLogin);
  }
  function submit(){
    const data = { username: String(username), password: String(password)};
    axios.post('https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/authPassword', data)
        .then (response => {
          let _id = response.data
          setAuth({username, password, keepLogin, _id})
          window.location.href = '/join-lesson'
        })
        .catch(err => {
          if(!err?.response){
             setErrMsg("No Server Response")
          }
          else if(err.response?.status === 400){
            setErrMsg("Incorrect Password")
          }
          else if(err.response?.status === 401){
            setErrMsg("Please Enter Password")
          }
          else if(err.response?.status === 402){
            setErrMsg("Please Enter Username")
          }
          else{
            setErrMsg("Login Failed")
          }
          errRef.current.focus();
        })
  }

  return (
    <div>
    <Form style ={{width: 600}}>
    <Form.Group  className=  "mb-3"  controlId="formEmail" >
      <Form.Label>Username or Email</Form.Label>
      <Form.Control autoComplete = "off" value={username} onChange={handleUsernameChange} type="Username" placeholder="Enter Username or Password" />
    </Form.Group>

    <Form.Group  className= "mb-3" controlId="formPassword">
      <div>
      <Form.Label>Password</Form.Label>
      <a href= "/forgot-password" className='forgot'>Forgot Password?</a>
      </div>
      <Form.Control autoComplete = "off" value={password} onChange={handlePasswordChange} type="password" placeholder="Enter Password" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formEmailList">
  <div className="form-check-checkbox-container">
    <label className="form-check-label" htmlFor="formCheck-1">Keep me logged in</label>
    <input value={keepLogin} onChange={handlekeepLogin} className="form-check-input" type="checkbox" id="formCheck-1" checked= {keepLogin}/>
  </div>
    </Form.Group>
    <Button onClick={submit} className="submit-Button" style = {{height: 60}} variant="primary">
      Login
    </Button>
    
  </Form>
    <div style = {{display: "flex", alignItems: "center"}}>
   <p ref ={errRef} className= {errMsg ? "errmsg" : "offscreen"} aria-live= "assertive"> {"*"+ errMsg} </p>  
   </div>
  </div>
  )
}
