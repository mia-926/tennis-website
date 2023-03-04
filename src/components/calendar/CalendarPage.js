import React, { useEffect, useRef, useState, useContext} from 'react';
import {MyCalendar} from './MyCalendar';
import 'react-calendar/dist/Calendar.css';
import "./calender.css";
import AuthContext from "../../context/AuthProvider";


export const CalendarPage = () => {
    const {auth} = useContext(AuthContext)
    console.log(auth)
    return (
        <div style={{paddingTop: 100}}>
            <MyCalendar/>
        </div>
    );
}
