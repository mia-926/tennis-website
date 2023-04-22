import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./ccalender.css";
import moment from 'moment';
import { CDateText } from './CDateText';
import { CInstructors } from './right/CInstructors';
import logo from '../../images/greenlogo.png';



export const CMyCalendar = (props) => {
    const mark = props.dateList
   
  console.log(mark)
    function getMonthName(monthNumber) {
      const date = new Date(monthNumber);
      return date.toLocaleString('en-US', { month: 'long' });
    }

  function getDayName(dateStr)
    {
     
        var date = new Date(dateStr);
  
        return date.toLocaleDateString('en-US', { weekday: 'long' }); 
        
    }

    
    const checkToday = () => {
        const dt = new Date(Date.now);
        for(let i = 0; i < mark.length; i++){
            let newDate = new Date((mark[i]));
 
          
              if(newDate.toDateString() === dt.toDateString()){
                return true;
              }
          }
          return false;
    }
    const firstDay = () => {
      if(mark.length > 0){
        let newDate = new Date(mark[0]);
        return(mark[0]);
      }
    }

    const [value, onChange] = useState(new Date());
    const [currentDay, setCurrentDay] = useState(0);
    const [lessonTime, setLessonTime] = useState(0);
    const [isLesson, setIsLesson] = useState(true);
    const [nextDay, setNextDay] = useState(()=>firstDay());
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(true);
    const [isClicked, setIsClicked] = useState(false);

    const handleDivClick = () => {
      setIsClicked(!isClicked);
    }

    const handleDivClickOff = () => {
      setIsClicked(true);
    }


    
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


    }, [value, loading])
    console.log(props.times.length + "test")
  let today = new Date(Date.now());
  useEffect(() => {
      if(props.times.length > 0){
            setLoading(false);
      }
}, [props.times])
if(loading){
  return(
    <div style={{display:'flex', flexDirection:'row', alignContent:"center", justifyContent:"center"}}>
      <div style={{display:'flex', flexDirection:'column', alignContent:"center", justifyContent:"center", height:window.innerHeight}}>
      <p className='railwayBold'>LOADING LESSONS...</p>
      </div>
    </div>
  )
}

if(isClicked){
  return(
    <div>
      
    <div style={{marginTop:100, backgroundColor: "#294539",  borderTopLeftRadius:"50px", borderTopRightRadius:"50px", padding:50}}>
      <div onClick={handleDivClick}>
      <div style={{width:'25px', height:'4px', backgroundColor:"white", transform:"rotate(45deg)", position:"absolute", right:40}}></div>
      <div style={{width:'25px', height:'4px', backgroundColor:"white", transform:"rotate(-45deg)", position:"absolute", right:25}}></div>
      </div>
      <div>
      <CDateText 
        index = {lessonTime}
        coordinates={props.coordinates[lessonTime]} 
        isLesson = {isLesson} 
        location = {props.location[lessonTime]} 
        address = {props.address[lessonTime]}
        time = {props.times[lessonTime]} 
        weekDay = {getDayName(value)} 
        day = {value.getDate()} 
        month = {getMonthName(value)} 
        nextDay = {nextDay}
      />
      <div style={{flex:1}}>
        <CInstructors 
        lessonId = {props.lessonId[lessonTime]} 
        isLesson = {isLesson} max = {props.max[lessonTime]} 
        students = {props.students[lessonTime]} 
        people = {props.instructor[lessonTime]}
        value = {value}/>

      </div>
      </div>
    </div>
    </div>
  )
}
  today.setDate(today.getDate() - 1);
  console.log(isLesson + "lesson")
  if(isLesson){
    return (
        <div style={{position:'relative', paddingTop: 100}} className='myContainer'>
            <div style={{flex:1, alignSelf: 'center'}} className='myContain'>
            <h3 className ="railwayBold"style={{color:"#233831", fontSize: "250%", textAlign:"center"}}>JOIN A<br></br>LESSON</h3>
            <h4 className ="railwayBold"style={{color:"#233831", fontSize: "80%", textAlign:"center", height:'30px', paddingRight:20, paddingLeft:20, marginBottom:20}}>enter the particpant name to register for this lesson!</h4>
            <Calendar className="react-calendar" onChange={onChange} value={value} style={{height: 'auto', width: '50%'}}
            next2Label = {null}
            prev2Label = {null}
            calendarType="US"
            tileClassName={({ date, view }) => {
                if(mark.find(x=>x===moment(date).format("MM/DD/YYYY"))){
                 return  'highlight'
                }
                }}
            />
            </div>
                      
          <div style={{height:50, width:window.innerWidth, backgroundColor: "#294539", position:'fixed', bottom:0, borderTopLeftRadius:"50px", borderTopRightRadius:"50px", zIndex:100}}>
          <div onClick={handleDivClickOff}>
              <div style={{width:'20px', height:'4px', backgroundColor:"white", position:"absolute", transform:"rotate(315deg)", right:36, marginTop:25}}></div>
              <div style={{width:'20px', height:'4px', backgroundColor:"white",  position:"absolute",transform:"rotate(-315deg)", right:25, marginTop:25}}></div>
            </div>
          </div>
        </div>
    );
  }
  if(value < today){
    return (
      <div style={{position:'relative', paddingTop: 100}} className='myContainer'>
          <div style={{flex:1, alignSelf: 'center'}} className='myContain'>
          <h3 className ="railwayBold"style={{color:"#233831", fontSize: "250%", textAlign:"center"}}>FIND A<br></br>LESSON</h3>
          <h4 className ="railwayBold"style={{color:"#233831", fontSize: "80%", textAlign:"center", height:'30px', paddingRight:20, paddingLeft:20, marginBottom:20}}>select a day, check the times, and enroll!</h4>
          <Calendar onChange={onChange} value={value} style={{height: 'auto', width: '50%'}}
                      next2Label = {null}
                      prev2Label = {null}
          calendarType="US"
          tileClassName={({ date, view }) => {
              if(mark.find(x=>x===moment(date).format("MM/DD/YYYY"))){
               return  'highlight'
              }
              }}
          />
          </div>
          
          <div style={{height:50, width:window.innerWidth, backgroundColor: "#294539", position:'fixed', bottom:0, borderTopLeftRadius:"50px", borderTopRightRadius:"50px", zIndex:100}}>
          <div onClick={handleDivClickOff}>
              <div style={{width:'20px', height:'4px', backgroundColor:"white", position:"absolute", transform:"rotate(315deg)", right:36, marginTop:25}}></div>
              <div style={{width:'20px', height:'4px', backgroundColor:"white",  position:"absolute",transform:"rotate(-315deg)", right:25, marginTop:25}}></div>
            </div>
          </div>
      </div>
    );
  }
  else {
    return (
      <div style={{position:'relative', paddingTop: 100}} className='myContainer'>
          <div style={{flex:1, alignSelf: 'center'}} className='myContain'>
              <h3 className ="railwayBold"style={{color:"#233831", fontSize: "250%", textAlign:"center"}}>REQUEST A<br></br>LESSON</h3>
              <h4 className ="railwayBold"style={{color:"#233831", fontSize: "80%", textAlign:"center", height:'30px', paddingRight:20, paddingLeft:20, marginBottom:20}}>click request to let our instructors know you want a lesson on this day!</h4>
          <Calendar onChange={onChange} value={value} style={{height: 'auto', width: '50%'}}
                      next2Label = {null}
                      prev2Label = {null}
          calendarType="US"
          tileClassName={({ date, view }) => {
              if(mark.find(x=>x===moment(date).format("MM/DD/YYYY"))){
               return  'highlight'
              }
              }}
          />
          </div>
                    
          <div style={{height:50, width:window.innerWidth, backgroundColor: "#294539", position:'fixed', bottom:0, borderTopLeftRadius:"50px", borderTopRightRadius:"50px", zIndex:100}}>
          <div onClick={handleDivClickOff}>
              <div style={{width:'20px', height:'4px', backgroundColor:"white", position:"absolute", transform:"rotate(315deg)", right:36, marginTop:25}}></div>
              <div style={{width:'20px', height:'4px', backgroundColor:"white",  position:"absolute",transform:"rotate(-315deg)", right:25, marginTop:25}}></div>
            </div>
          </div>
      </div>
  );
}
}
