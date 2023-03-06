import React, { useEffect, useRef, useState, useContext} from 'react';
import {MyCalendar} from './MyCalendar';
import 'react-calendar/dist/Calendar.css';
import "./calender.css";
import useAuth from '../hooks/useAuth';
import { Instructors } from './right/Instructors';
import { ApiCall } from './ApiCall';
import { ReloadProvider } from '../../context/ReloadProvider';
import { BottomCirlces } from './BottomCircles';


export const CalendarPage = () => {
    const {auth} = useAuth()

    if(auth?._id != undefined){
        return (
            <div style={{paddingTop: 100}}>
                <ReloadProvider>
                <BottomCirlces/>
                <ApiCall/>

                </ReloadProvider>
            </div>
        );
    }
    else{
        return (
            window.location.href = '/login'
        );
    }
}