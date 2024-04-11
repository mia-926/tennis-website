import axios from "axios";

import React, { useEffect, useRef, useState} from 'react';
import "../accountcss/password.css";
import "../../newHomepage/newHomepage.css";
import Form from 'react-bootstrap/Form';
import useAuth from "../../hooks/useAuth";
import useMsg from "../../hooks/useMsg";

import Button from 'react-bootstrap/Button';


export const Password = () => {
    const {setMsg} = useMsg();

    const {setAuth} = useAuth();
    const {auth} = useAuth();

    const [newPassword, setNewPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');

    function handleNewPasswordChange(event) {
      setNewPassword(event.target.value);
    }
    function handleOldPasswordChange(event) {
      setOldPassword(event.target.value);
    }

    function PasswordSubmit() {
      updateUser(oldPassword, newPassword)
      setNewPassword("")
      setOldPassword("")
  }

    useEffect(()=>{
        setMsg('')
    }, [newPassword, oldPassword])


    function updateUser(oldPassword, newPassword){
        const firstdata = {username: auth.username, password: oldPassword}
        axios.post('https://tennis-backend-c6oszgtd6a-uw.a.run.app/api/authPassword', firstdata)
        .then (response => {
          const data = {_id: auth._id, password: newPassword}
          axios.patch('https://tennis-backend-c6oszgtd6a-uw.a.run.app/api/user', data)
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
                      setMsg("New Password Must Have 6 Characters")
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
                 })
        })
        .catch(err => {
          console.log(err)
          if(!err?.response){
            setMsg("No Server Response")
          }
          else if(err.response?.status === 400){
            setMsg("Incorrect Current Password")
          }
          else if(err.response?.status === 401){
            setMsg("Please Enter Current Password")
          }
          else if(err.response?.status === 402){
            setMsg("Please Enter Username")
          }
          else{
            setMsg("Update Failed")
          }
        })
    }

    return (
        <div className = "accountFullPassword">
            <h4 className = "accountPasswordTitle railwaySemiBold">CHANGE PASSWORD</h4>
            <form>
                    <div class="InfoFormColumn">
                        <label className ="railwayMedium" for="inputPassword4">Enter Current Password</label>
                        <input type="password" autoComplete = "off" value={oldPassword} onChange={handleOldPasswordChange} style = {{height: 35}} class="form-control railway" id="currentPasswordForm" placeholder="Current Password"/>
                    </div>
                    <div class="InfoFormColumn" style = {{paddingTop: 10}}>
                        <label className ="railwayMedium" for="inputPassword4">New Password</label>
                        <input type="password" autoComplete = "off" value={newPassword} onChange={handleNewPasswordChange} style = {{height: 35}} class="form-control railway" id="newPasswordForm" placeholder="New Password"/>
                    </div>
                  <a href= "/forgot-password" className='account-password-forgot railwayMedium' style ={{textDecoration: "none"}}>Forgot Password?</a>
                    <Button onClick={PasswordSubmit} className="accountPasswordButton railwaySemiBold" style = {{height: 25}} variant="primary">
                        Change
                    </Button>
            </form>
        </div>
    )
}
