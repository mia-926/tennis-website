import axios from "axios";

import React, { useEffect, useRef, useState, useContext} from 'react';

import AuthContext from "../../context/AuthProvider";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./inputStyle.css";

export const Input = () => {
  const errRef = useRef();
  const {setAuth} = useContext(AuthContext)
  const {auth} = useContext(AuthContext)
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
    console.log(data)
    axios.post('https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/authUser', data)
        .then (response => {
          console.log("first")
          console.log(response.data)
          axios.post('https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/user', data)
            .then (response => {
              console.log("second")
              console.log(response.data)
              login(password, username)
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
          else if(err.response?.status === 399){
            setErrMsg("Password must be at least 6 characters")
          }
          else if(err.response?.status === 398){
            setErrMsg("Username must be at least 4 characters")
          }
          else if(err.response?.status === 397){
            setErrMsg("Username Taken")
          }
          else if(err.response?.status === 396){
            setErrMsg("Email Taken")
          }
          else if(err.response?.status === 401){
            setErrMsg("Please Enter Password")
          }
          else if(err.response?.status === 402){
            setErrMsg("Please Enter Username")
          }
          else if(err.response?.status === 403){
            setErrMsg("Please Enter Email")
          }
          else{
            setErrMsg("Error Try Again")
          }
          errRef.current.focus();
        })
  }

  function login(user, pwd){
    const data = { username: String(user), password: String(pwd)};
    axios.post('https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/authPassword', data)
        .then (response => {
          console.log(response.data)
          let _id = response.data
          let keepLogin = true
          setAuth({user, pwd, keepLogin, _id})
          console.log(auth)
          window.location.href = '/join-lesson'
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
