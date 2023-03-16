import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./calender.css";
import moment from 'moment';
import { AdminCalendar } from './admin/AdminCalendar';
import { AdminEdit } from './admin/AdminEdit';
import axios from 'axios';
import useReload from '../hooks/useReload';
import useAuth from '../hooks/useAuth';
import { ReloadProvider } from '../../context/ReloadProvider';
import { GreyCircle } from './GreyCircle';


export const AdminCalendarPage = () => {
    const {auth} = useAuth()

    if(auth?._id != undefined && auth?.admin == true){
        return (
            <div style = {{height:window.innerHeight, background: '#294539'}}>
            <div style={{paddingTop: 0}}>
                <ReloadProvider>
                <GreyCircle/>
                <AdminApiCall/>
                </ReloadProvider>
            </div>
            </div>
        );
    }
    else{
        return (
            window.location.href = '/login'
        );
    }
}

export const AdminPage = (props) => {
    const mark = props.dateList
    const requests = props.requests;

    function getMonthName(monthNumber) {
      const date = new Date(monthNumber);
      return date.toLocaleString('en-US', { month: 'long' });
    }

  function getDayName(dateStr)
    {
     
        var date = new Date(dateStr);
  
        return date.toLocaleDateString('en-US', { weekday: 'long' }); 
        
    }

    const firstDay = () => {
      if(mark.length > 0){
        let newDate = new Date(mark[0]);
        setNextDay(mark[0]);
      }
    }

    const [value, onChange] = useState(new Date());
    const [currentDay, setCurrentDay] = useState(0);
    const [lessonTime, setLessonTime] = useState(0);
    const [isLesson, setIsLesson] = useState(false);
    const [nextDay, setNextDay] = useState(()=>firstDay());
   
    
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
        let run = true;
        for(let i = 0; i < mark.length && run; i++){
          let newDate = new Date((mark[i]));
            if(value < newDate){
              setNextDay(getDayName(newDate) + ", " + getMonthName(newDate) + " " + ((newDate).getDate()));
              run = false;
            }
        }
        if(run === true){
          setNextDay("No upcoming Lessons")
        }
    

    }, [value])

if(isLesson){
    return (
        <div style={{position:'relative', paddingLeft:50, paddingRight:50, paddingTop: 150}} className='myContainer'>
            <div style={{flex:1, alignSelf: 'center', paddingRight:250}} className='myContain'>
              <h3 className = "railwayBold" style={{color:"white"}}>Edit a Lesson</h3>
            <Calendar calendarType="US" onChange={onChange} value={value} style={{height: 'auto', width: '50%'}}
                        next2Label = {null}
                        prev2Label = {null}
            tileClassName={({ date, view }) => {
                if(mark.find(x=>x===moment(date).format("MM/DD/YYYY"))){
                 return  'highlight'
                }
                if(requests.find(x=>x===moment(date).format("MM/DD/YYYY"))){
                    return  'requestDate'
                   }

                }
            
            }
            />
            </div>
            <div style = {{flex:1}}>
                <AdminEdit
                weekDay = {getDayName(value)} 
                day = {value.getDate()} 
                month = {getMonthName(value)} 
                value = {value}
                isLesson = {isLesson}
                location = {props.location[lessonTime]} 
                address = {props.address[lessonTime]}
                time = {props.times[lessonTime]} 
                max = {props.max[lessonTime]} 
                instructors = {props.instructor[lessonTime]}
                lessonId = {props.lessonId[lessonTime]}
                students = {props.students[lessonTime]}

                />
            </div>
        </div>
    );}else{
      return (
        <div style={{position:'relative', paddingLeft:50, paddingRight:50, paddingTop: 150}} className='myContainer'>
            <div style={{flex:1, alignSelf: 'center', paddingRight:250}} className='myContain'>
              <h3 className = "railwayBold"style={{color:"white"}}>Add a Lesson</h3>
            <Calendar onChange={onChange} value={value} style={{height: 'auto', width: '50%'}}
                        next2Label = {null}
                        prev2Label = {null}
            calendarType="US"
            tileClassName={({ date, view }) => {
                if(mark.find(x=>x===moment(date).format("MM/DD/YYYY"))){
                 return  'highlight'
                }
                if(requests.find(x=>x===moment(date).format("MM/DD/YYYY"))){
                    return  'requestDate'
                   }
                }}
            />
            </div>
            <div style = {{flex:1}}>
                <AdminCalendar 
                weekDay = {getDayName(value)} 
                day = {value.getDate()} 
                month = {getMonthName(value)} 
                value = {value}
                isLesson = {isLesson}
                />
            </div>
        </div>);
      

    }
}



export const AdminApiCall = () => {
    const[lessons, getLessons] = useState('');
    const[requests, getRequests] = useState('');
    const {reload} = useReload()

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    useEffect(() => {
       
        getAllLessons();
        getAllRequests();
       
    }, [reload]);

    const getAllLessons = () => {
        axios.get('https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/allLessons')
        .then((response) => {
            const allLessons = response.data;
            getLessons(allLessons);
        })
        .catch(error => console.error(`Error: $(error)`));
    }
    const getAllRequests = () => {
        axios.get('https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/getAllRequests')
        .then((response) => {
            const allRequests = response.data;
            getRequests(allRequests);
        })
        .catch(error => console.error(`Error: $(error)`));
    }
    return(
        <AdminApiTester lessons={lessons} requests = {requests}/> )
}


export const AdminApiTester = (props) => {
    const [time, setTime] = useState([]);
    const [location, setLocation] = useState([]);
    const [address, setAddress] = useState([]);
    const [max, setMax] = useState([])
    const [instructor, setInstructor] = useState([]);
    const [lessonIds, setLessonIds] = useState([]);
    const [dateList, setDateList] = useState([]);
    const [kids, setKids] = useState([]);
    const [requestDates, setRequestDates] = useState([]);
    const {menu, lessons} = props;

    useEffect(() => {
        const newTime = [];
        const newLocation = [];
        const newAddress = [];
         const newKids = [];
        const newMax = [];
        const newInstructor = [];
        const newDateList = [];
        const newLessonIds = [];
        const newRequestDates = [];

        for(let i = 0; i < props.requests.length; i++){
            let date, month, year;

            date = (props.requests[i].date).substring(8, 10);
            month = (props.requests[i].date).substring(5, 7); 
            year = (props.requests[i].date).substring(0, 4);
          

            newRequestDates.push(month + '/' + date + '/' +year);
          
        }

        for(let i = 0; i < lessons.length; i++){
            newTime.push(lessons[i].time);
            let date, month, year;

            date = (lessons[i].date).substring(8, 10);
            month = (lessons[i].date).substring(5, 7); 
            year = (lessons[i].date).substring(0, 4);
          

            newDateList.push(month + '/' + date + '/' +year);
            newInstructor.push(lessons[i].instructors);

            newMax.push(lessons[i].maxStudents);
            newLocation.push(lessons[i].location);
            newAddress.push(lessons[i].address);
            newKids.push(lessons[i].studentsNames);
            newLessonIds.push(lessons[i]._id);
        }

        setTime(newTime);
        setLocation(newLocation);
        setAddress(newAddress);
        setKids(newKids);
        setMax(newMax);
        setInstructor(newInstructor);
        setDateList(newDateList);
        setLessonIds(newLessonIds);
        setRequestDates(newRequestDates);
    }, [lessons])
    return (
        <div>
            <AdminPage
                students={kids}
                lessonId={lessonIds}
                location={location}
                address={address}
                
                max={max}
                requests = {requestDates}
                instructor={instructor}
                dateList={dateList}
                times={time}
            />
        </div>
    );
}

