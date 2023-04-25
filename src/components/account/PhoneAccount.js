import React, { useState, useEffect } from 'react';
import "./phoneaccountcss/phoneAccount.css";
import {PhoneUserInfo} from "./phoneInputs/PhoneUserInfo"
import {PhoneHistory} from "./phoneInputs/PhoneHistory"
import {PhoneUpcoming} from "./phoneInputs/PhoneUpcoming"
import {PhonePassword} from "./phoneInputs/PhonePassword"
import {PhoneDeleteButton} from "./phoneInputs/PhoneDeleteButton"
import useAuth from '../hooks/useAuth';
import { MsgProvider } from '../../context/MsgProvider';
import logo from '../../images/greenlogo.png';

export const PhoneAccount = () => {
    return (
    <MsgProvider>
         <div style={{height: 600, background: "transparent"}}>
            <div>
                <div className="white-rectangle"></div><div style={{height:0,display:"flex", flexDirection:"row", justifyContent:"center", alignContent:"center"}}><img style={{paddingTop:'20px',position:"absolute" , width:'15%'}}src = {logo}></img></div>
            </div>:
            <div className = "phoneaccountFullContainer" style = {{paddingTop: 750, height: window.innerHeight}}>
                    <div className = "phoneaccountUserInfo">
                        <PhoneUserInfo/>
                    </div>

                    <div className = "phoneaccountChangePassword">
                        <PhonePassword/>
                    </div>

                    <div className = "phoneaccountLessonHistory">
                        <PhoneHistory/>
                    </div>

                    <div className = "phoneaccountUpcomingHistory">
                        <PhoneUpcoming/>
                    </div>
                    <PhoneDeleteButton/>
            </div>
        </div>
    </MsgProvider>
    )
}
