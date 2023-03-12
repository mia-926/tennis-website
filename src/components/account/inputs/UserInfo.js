import axios from "axios";

import React, { useEffect, useRef, useState} from 'react';
import "../accountcss/userinfo.css";
import Form from 'react-bootstrap/Form';
import useAuth from "../../hooks/useAuth";
import Button from 'react-bootstrap/Button';
import useMsg from "../../hooks/useMsg";


export const UserInfo = () => {
    const errRef = useRef();
    const {setAuth} = useAuth();
    const {auth} = useAuth();

    const {msg} = useMsg();
    const {setMsg} = useMsg();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    useEffect(()=>{
        setMsg('')
    }, [email, username])

    useEffect(()=>{
        errRef.current.focus()
    }, [msg])

    function updateUser(username = null, password = null, emailList = null, email = null){
        const data = Object.assign({ _id: String(auth._id) }, 
            username !== null && { username },
            password !== null && { password },
            emailList !== null && { emailList },
            email !== null && { email },
        );
        console.log(data)
        axios.patch('https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/user', data)
            .then (response => {
                console.log(response)
                setAuth({username: response.data.username, password: response.data.password, keepLogin: auth.keepLogin, _id: response.data._id, emailList: response.data.emailList, email: response.data.email, admin: response.data.admin});
                setMsg("Account Updated")
            })
            .catch(err => {
                if(!err?.response){
                    setMsg("No Server Response")
                 }
                 else if(err.response?.status === 398){
                   setMsg("Invalid Email")
                 }
                 else if(err.response?.status === 397){
                   setMsg("Email Taken")
                 }
                 else if(err.response?.status === 399){
                   setMsg("Username Must Have 4 Characters")
                 }
                 else if(err.response?.status === 396){
                    setMsg("Username Taken")
                  }
                  else if(err.response?.status === 400){
                    setMsg("Password Must Have 6 Characters")
                  }
                  else if(err.response?.status === 395){
                    setMsg("New Password Can Not Contain Spaces")
                  }
                  else if(err.response?.status === 390){
                    setMsg("Username Can Not Contain Spaces")
                  }
                 else{
                   setMsg("Update Failed")
                 }
                 errRef.current.focus();
               })
    }
    function handleEmailListChange(event) {
        let emailList = !auth.emailList
        updateUser(null, null, emailList)
    }
    function EmailSubmit() {
        updateUser(null, null, null, email)
        setEmail("")
    }
    function UsernameSubmit() {
        updateUser(username)
        setUsername("")
    }
    return (
        <div className = "accountFullUserInfo">
            <div style = {{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <h4 className = "accountUserInfoTitle">USER INFORMATION</h4>
                <p ref ={errRef} style = {{height: 20}} className= {msg ? (msg == "Account Updated"? "accountvalidatedmsg":"accounterrmsg") : "accountoffscreen"} aria-live= "assertive"> {"*"+ msg} </p> 
            </div>
            <form>
                <div class="Infoform-row">
                    <div class="InfoFormColumn">
                        <label for="inputEmail4">Current Username</label>
                        <input  type="email" style = {{height: 35 }} class="form-control constant" id="ConstUsername4" placeholder={auth.username} readOnly/>
                    </div>
                    <div class="InfoFormColumn">
                        <label for="inputPassword4">Current Email</label>
                        <input type="email" style = {{height: 35}} class="form-control constant" id="ConstEmail4" placeholder={auth.email} readOnly/>
                    </div>
                </div>
                <div class="Infoform-row" style = {{paddingTop: 10}}>
                    <div class="InfoFormColumn">
                        <label for="inputEmail4">Change Username</label>
                        <input type="email" autoComplete = "off" value={username} onChange={handleUsernameChange} style = {{height: 35}} class="form-control" id="inputUsername4" placeholder="New Username"/>
                    </div>
                    <div class="InfoFormColumn">
                        <label for="inputPassword4">Change Email</label>
                        <input type="email" autoComplete = "off" value={email} onChange={handleEmailChange} style = {{height: 35}} class="form-control" id="inputEmail4" placeholder="New Email"/>
                    </div>
                </div>
                <div>
                    <Button onClick={UsernameSubmit} className="accountButton" style = {{height: 25}} variant="primary">
                        Change
                    </Button>
                    <Button onClick={EmailSubmit}  className="accountButton right" style = {{height: 25}} variant="primary">
                        Change
                    </Button>
                </div>
                <div style = {{paddingTop: 25, display: "flex", alignItems:"center"}}>
                    <label className="acccount-form-check-label" htmlFor="formCheck-1">Sign me up for mailing list</label>
                    <input value={auth?.emailList} onChange={handleEmailListChange} className="form-check-input account" type="checkbox" id="formCheck-1" checked= {auth?.emailList}/>
                </div>
            </form>
        </div>
    )
}
