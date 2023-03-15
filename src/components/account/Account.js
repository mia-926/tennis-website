import React from 'react'
import { GreenCircles } from './GreenCircles';
import "./accountcss/account.css";
import { Title } from "./Title"
import {UserInfo} from "./inputs/UserInfo"
import {History} from "./inputs/History"
import {Upcoming} from "./inputs/Upcoming"
import {Password} from "./inputs/Password"
import {DeleteButton} from "./inputs/DeleteButton"
import useAuth from '../hooks/useAuth';
import { MsgProvider } from '../../context/MsgProvider';

export const Account = () => {
    const {auth} = useAuth()
    const {setlastWindow} = useAuth();
    const{lastWindow} = useAuth()
    if(auth?._id != undefined){
    return (
        <MsgProvider>
        <div>
            <div className='accountGreenCircles' style={{position:"absolute", paddingRight:-200}}>
            <GreenCircles/>
            </div>
            <div className = "accountFullContainer" style = {{paddingTop: 100, height: window.innerHeight}}>
                <div  className = "accountTitleDiv">
                    <Title/>
                    <DeleteButton/>
                </div>
                <div  className = "accountChangeDiv">
                    <div className = "accountUserInfo">
                    <UserInfo/>
                    </div>

                    <div className = "accountChangePassword">
                    <Password/>
                    </div>
                </div>
                <div className = "accountViewDiv">
                    <div className = "accountLessonHistory">
                    <History/>
                    </div>

                    <div className = "accountUpcomingHistory">
                    <Upcoming/>
                    </div>
                </div>
            </div>
        </div>
        </MsgProvider>
        )
    }
    else{
        if(lastWindow === "/home"){
            return (
                window.location.href = '/home'
            );
        }
        else{
            setlastWindow("/account")
            return (
                window.location.href = '/login'
            );
        }
    }
}