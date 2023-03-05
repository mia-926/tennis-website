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
               setCurrentDay(i);
               setIsLesson(true);
            }
        }
        
    }, [value])
    function getMonthName(monthNumber) {
        const date = new Date(monthNumber);
        return date.toLocaleString('en-US', { month: 'long' });
      }

    function getDayName(dateStr)
      {
       
          var date = new Date(dateStr);
    
          return date.toLocaleDateString('en-US', { weekday: 'long' }); 
          
      }
      console.log("MyCalender"+props.students[lessonTime])
    return (
        <div className='myContainer'>
            <div style={{flex:1}}>
            <DateText  isLesson = {isLesson} location = {props.location[lessonTime]} address = {props.address[lessonTime]} time = {props.times[lessonTime]} weekDay = {getDayName(value)} day = {value.getDate()} month = {getMonthName(value)} />
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
             <Instructors lessonId = {props.lessonId[lessonTime]} isLesson = {isLesson} max = {props.max[lessonTime]} students = {props.students[lessonTime]} people = {props.instructor[lessonTime]}/>
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