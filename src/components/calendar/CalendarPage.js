import React, {useState} from 'react';
import {MyCalendar} from './MyCalendar';
import 'react-calendar/dist/Calendar.css';
import "./calender.css";
import { Instructors } from './right/Instructors';


export const CalendarPage = () => {
    return (
        <div style={{paddingTop: 100}}>
            <MyCalendar/>
        </div>
    );
}
