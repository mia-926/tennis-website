import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./calender.css";
import moment from 'moment';
import { DateText } from './DateText';
import { Instructors } from './right/Instructors';


export const MyCalendar = () => {
    const [value, onChange] = useState(new Date());
    const mark = [
        '02-02-2023',
        '06-02-2023',
        '10-02-2023'
    ]

    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
      
        return date.toLocaleString('en-US', { month: 'long' });
      }

    function getDayName(dateStr)
      {
          var date = new Date(dateStr);
          return date.toLocaleDateString('en-US', { weekday: 'long' });        
      }

    return (
        <div className='container' >
            <div style={{flex:1}}>
            <DateText weekDay = {getDayName(value.getDay())} day = {value.getDate()} month = {getMonthName(value.getMonth())} />
            </div>
            <div style={{flex:1}} className='contain'>
            <Calendar onChange={onChange} value={value}
            
            tileClassName={({ date, view }) => {
                if(mark.find(x=>x===moment(date).format("DD-MM-YYYY"))){
                 return  'highlight'
                }
                }}
            />
            </div>
            <div style={{flex:1}}>
             <Instructors/>
             </div>
        </div>
    );
}

//(value, event) => alert('Clicked day: ', value)