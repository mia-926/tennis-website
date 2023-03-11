import React from 'react'
import { GreenCircles } from '../missionstatement/GreenCircles';
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

    if(auth?._id != undefined){
    return (
        <MsgProvider>
        <div>
            <div className='accountGreenCircles'>
            <GreenCircles/>
            </div>
            <div className = "accountFullContainer" style = {{paddingTop: 75, height: window.innerHeight}}>
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
        setlastWindow("/account")
        return (
            window.location.href = '/login'
        );
    }
}