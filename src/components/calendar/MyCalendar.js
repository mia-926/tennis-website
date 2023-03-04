import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./calender.css";
import moment from 'moment';
import { DateText } from './DateText';
import { Instructors } from './right/Instructors';





export const MyCalendar = (props) => {

    const [value, onChange] = useState(new Date());
    const [currentDay, setCurrentDay] = useState(0);
    const [lessonTime, setLessonTime] = useState("0");
    const [isLesson, setIsLesson] = useState(false);
    
    const mark = props.dateList
   

    useEffect(() => {
        
        setIsLesson(false);
        const dt = new Date(value);

        for(let i = 0; i < mark.length; i++){
          let newDate = new Date((mark[i]));

        
            if(newDate.toDateString() === dt.toDateString()){
               setLessonTime(i);
               console.log(lessonTime)
               console.log(newDate.getHours())
               setCurrentDay(i);
               console.log("hi");
               console.log(props.instructor[lessonTime])
               setIsLesson(true);
               console.log(isLesson)
            }
        }
        
    }, [value])
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
            <DateText  isLesson = {isLesson} location = {props.location[lessonTime]} address = {props.address[lessonTime]} time = {props.times[lessonTime]} weekDay = {getDayName(value.getDay())} day = {value.getDate()} month = {getMonthName(value.getMonth())} />
            </div>
            <div style={{flex:1}} className='contain'>
            <Calendar onChange={onChange} value={value}
            
            tileClassName={({ date, view }) => {
                if(mark.find(x=>x===moment(date).format("MM/DD/YYYY"))){
                 return  'highlight'
                }
                }}
            />
            </div>
            <div style={{flex:1}}>
             <Instructors isLesson = {isLesson} max = {props.max[lessonTime]} students = {props.students[lessonTime]} people = {props.instructor[lessonTime]}/>
             </div>
        </div>
    );
}

//(value, event) => alert('Clicked day: ', value)

//let nowDay, nowMonth, nowYear, fullDate;
         // nowDay = dt.getDay();
        // nowMonth = dt.getMonth()+1;
        // nowYear = dt.getFullYear();
        // if (nowDay < 10) {
        //     nowDay = '0' + nowDay;
        //   }
          
        //   if (nowMonth < 10) {
        //     nowMonth = '0' + nowMonth;
        //   }
        // fullDate = nowDay + "/" + nowMonth + "/" + nowYear;
        // console.log(fullDate)