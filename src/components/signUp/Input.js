import axios from "axios";

import React, { useEffect, useRef, useState, useContext} from 'react';

import AuthContext from "../../context/AuthProvider";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuth from "../hooks/useAuth";

import "./inputStyle.css";

export const Input = () => {
  const errRef = useRef();
  const {lastWindow} = useAuth()
  const {setAuth} = useAuth()
  const [password, setPasswordValue] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailList, setEmailList] = useState(false);

  const [errMsg, setErrMsg] = useState('')
  useEffect(()=>{
    setErrMsg('')
  }, [username, password, email])

  function handlePasswordChange(event) {
    setPasswordValue(event.target.value);
  }
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleEmailList(event) {
    setEmailList(!emailList);
  }

  function make(){
    const data = { email: String(email), emailList: Boolean(emailList), username: String(username), password: String(password)};
    axios.post('https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/authUser', data)
      .then (response => {
        axios.post('https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/user', data)
          .then (response => {
            login(username, password)
          })
          .catch(err =>{
            setErrMsg("Error Try Again")
            errRef.current.focus();
          })
      })
      .catch(err => {
        if(!err?.response){
            setErrMsg("No Server Response")
        }
        else {
          switch(err.response?.status){
            case 399:
              setErrMsg("Password must be at least 6 characters")
              break
            case 390:
              setErrMsg("Username Can Not Contain Spaces")
              break
            case 388:
              setErrMsg("Password Can Not Contain Spaces")
              break
            case 395:
              setErrMsg("Invalid Email")
              break
            case 398:
              setErrMsg("Username must be at least 4 characters")
              break
            case 397:
              setErrMsg("Username Taken")
              break
            case 396:
              setErrMsg("Email Taken")
              break
            case 401:
              setErrMsg("Please Enter Password")
              break
            case 402:
              setErrMsg("Please Enter Username")
              break
            case 403:
              setErrMsg("Please Enter Email")
              break
            default:
              setErrMsg("Error Try Again")
          }
        }
        errRef.current.focus();
      })
  }

  function login(user, pwd){
    const data = { username: String(user), password: String(pwd)};
    axios.post('https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/authPassword', data)
        .then (response => {
          let _id = response.data._id
          let email = response.data.email
          let emailList = response.data.emailList
          let admin = response.data.admin
          let keepLogin = true
          setAuth({username, password, keepLogin, _id, emailList, email, admin})

          if(lastWindow != null){
            window.location.href = lastWindow
          }
          else{
            window.location.href = "/join-lesson"
          }
        })
        .catch(err => {
          setErrMsg("Error Try Again")
          errRef.current.focus();
        })
  }

  return (
    <div>
      <Form style ={{width: 600}}>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control autoComplete = "off" value={username} onChange={handleUsernameChange} type="Username" placeholder="Enter Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control autoComplete = "off" value={email} onChange={handleEmailChange} type="email" placeholder="Enter Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control autoComplete = "off" value={password} onChange={handlePasswordChange} type="password" placeholder="Enter Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmailList">
    <div className="form-check-checkbox-container">
      <label  className="form-check-label" htmlFor="formCheck-1">Sign me up for mailing list</label>
      <input value={emailList} onChange={handleEmailList} className="form-check-input" type="checkbox" id="formCheck-1" />
    </div>
      </Form.Group>
      <Button onClick={make} className="submit-Button" style = {{height: 60}} variant="primary">
        Sign Up
      </Button>
    </Form>
    <div style = {{display: "flex", alignItems: "center"}}>
    <p ref ={errRef} className= {errMsg ? "errmsg" : "offscreen"} aria-live= "assertive"> {"*"+ errMsg} </p>  
    </div>
  </div>
  )
}
