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
        <div style={{height: 600, background: "transparent"}}>
        <div>
            <div className="white-rectangle"></div><div style={{height:0,display:"flex", flexDirection:"row", justifyContent:"center", alignContent:"center"}}><img style={{paddingTop:'20px',position:"absolute" , width:'15%'}}src = {logo}></img></div>
        </div>:
        <div style={{position:"absolute",top:100, width: "100%"}}>
            <h2 className='railwayBold' style = {{textAlign: "center",  fontSize: "250%", color: "#294539"}}> ACCOUNT DETAILS</h2>
                    <div className = "phoneaccountUserInfo" style = {{marginTop: "3%"   , marginBottom: "3%"}}>
                        <PhoneUserInfo/>
                    </div>

                    <div className = "phoneaccountChangePassword" style = {{marginBottom: "3%"}} >
                        <PhonePassword/>
                    </div>

                    <div className = "phoneaccountLessonHistory" style = {{marginBottom: "3%"}}>
                        <PhoneHistory/>
                    </div>

                    <div className = "phoneaccountUpcomingHistory">
                        <PhoneUpcoming/>
                    </div>
                    <PhoneDeleteButton/>
        </div>
    </div>
    )
}
