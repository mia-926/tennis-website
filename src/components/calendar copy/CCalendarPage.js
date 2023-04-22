import React, { useEffect, useRef, useState, useContext} from 'react';
import {CMyCalendar} from './CMyCalendar';
import 'react-calendar/dist/Calendar.css';
import "./ccalender.css";
import useAuth from '../hooks/useAuth';
import { Instructors } from './right/CInstructors';
import { CApiCall } from './CApiCall';
import { ReloadProvider } from '../../context/ReloadProvider';
import { BottomCirlces } from './CBottomCircles';
import { CGreyCircle } from './CGreyCircle';


export const CCalendarPage = () => {
    const {auth} = useAuth()
    const {setlastWindow} = useAuth();

    if(auth?._id != undefined){
        return (
            <div style = {{height:window.innerHeight, background: 'white',width:window.innerWidth}}>
            <div style={{paddingTop: 0}}>
                <ReloadProvider>
                <CApiCall/>
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