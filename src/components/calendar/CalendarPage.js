import React, {useState} from 'react';
import {MyCalendar} from './MyCalendar';
import 'react-calendar/dist/Calendar.css';
import "./calender.css";
import { Instructors } from './right/Instructors';
import { ApiCall } from './ApiCall';


export const CalendarPage = () => {
    return (
        <div style={{paddingTop: 100}}>
            <ApiCall/>
        </div>
    );
}
