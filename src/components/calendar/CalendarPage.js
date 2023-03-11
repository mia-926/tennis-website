import React, { useEffect, useRef, useState, useContext} from 'react';
import {MyCalendar} from './MyCalendar';
import 'react-calendar/dist/Calendar.css';
import "./calender.css";
import useAuth from '../hooks/useAuth';
import { Instructors } from './right/Instructors';
import { ApiCall } from './ApiCall';
import { ReloadProvider } from '../../context/ReloadProvider';
import { BottomCirlces } from './BottomCircles';
import { MyMap } from './MyMap';
import { GreyCircle } from './GreyCircle';


export const CalendarPage = () => {
    const {auth} = useAuth()
    const {setlastWindow} = useAuth();

    if(auth?._id != undefined){
        return (
            <div style = {{height:window.innerHeight, background: '#294539'}}>
            <div style={{paddingTop: 0}}>
                <ReloadProvider>
                <GreyCircle/>
                <ApiCall/>

                </ReloadProvider>

                
            </div>
            </div>
        );
    }
    else{
        setlastWindow("/join-lesson")
        return (
            window.location.href = '/login'
        );
    }
}