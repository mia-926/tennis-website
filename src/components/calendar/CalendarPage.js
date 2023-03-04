import React, { useEffect, useRef, useState, useContext} from 'react';
import {MyCalendar} from './MyCalendar';
import 'react-calendar/dist/Calendar.css';
import "./calender.css";
import useAuth from '../hooks/useAuth';


export const CalendarPage = () => {
    const {auth} = useAuth()

    if(auth?._id != undefined){
        return (
            <div style={{paddingTop: 100}}>
                <MyCalendar/>
            </div>
        );
    }
    else{
        return (
            window.location.href = '/login'
        );
    }
}
