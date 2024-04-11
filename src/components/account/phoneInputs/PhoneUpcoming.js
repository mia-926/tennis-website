import React, { useEffect, useRef, useState} from 'react';
import "../phoneaccountcss/phoneUpcoming.css"
import useAuth from "../../hooks/useAuth";
import axios from "axios";

export const PhoneUpcoming = () => {
  const {setAuth} = useAuth();
  const {auth} = useAuth();
  const [allFutureLessons, setAllFutureLessons] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);


  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }
  useEffect(() => {
    axios.get("https://tennis-backend-c6oszgtd6a-uw.a.run.app/api/futureLessonsByStudentID?studentID="+ String(auth._id))
    .then((response) => {
        let tempAllLessons = response.data;
        let tempFutureLessons = []
        for(let i =0; i<tempAllLessons.length; i++){
          let date = (tempAllLessons[i].date).substring(8, 10);
          let month = (tempAllLessons[i].date).substring(5, 7); 
          let year = (tempAllLessons[i].date).substring(2, 4);
          tempFutureLessons.push(String(month + '/' + date + '/' +year+" - "+ tempAllLessons[i].time+" "+tempAllLessons[i].location))
        }
        setAllFutureLessons(tempFutureLessons)
    })
    .catch(error => console.error(`Error: $(error)`))
  }, [auth._id]);
  if(allFutureLessons.length >0){
    return (
      <div className="phoneaccountFullUpcoming">
        <div style={{ display: 'flex', alignItems: 'center' }}>  
          <div className='arrow' onClick={toggleExpand} style={{marginLeft: 10, width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderRight: isExpanded ? '10px solid #294539' : '10px solid #294539', transform: isExpanded ? 'rotate(180deg)' : 'rotate(270deg)' }} />
          <h4 className="phoneaccountUpcomingTitle railwaySemiBold">UPCOMING LESSONS</h4>
        </div>
        <div style={{ display: isExpanded ? 'block' : 'none' }}>
          <div className="phoneaccountUpcomingList" style={{ height: 220, overflow: "auto" }}>
            {allFutureLessons.map((lesson, index) => (
              <div key={index}>
                <p className='phonefutureLesson railwayMediumDigits' style = {{fontSize: "90%"}}>{lesson}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
    )
  }
  else{
    return (
      <div className="phoneaccountFullUpcoming">
      <div style={{ display: 'flex', alignItems: 'center' }}> 
        <div className='arrow' onClick={toggleExpand} style={{marginLeft: 10, width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderRight: isExpanded ? '10px solid #294539' : '10px solid #294539', transform: isExpanded ? 'rotate(180deg)' : 'rotate(270deg)' }} />
        <h4 className="phoneaccountUpcomingTitle railwaySemiBold">UPCOMING LESSONS</h4>
      </div>
      <div style={{ display: isExpanded ? 'block' : 'none' }}>
        <div className="phoneaccountUpcomingList" style={{ height: 220, overflow: "auto" }}>
                <p className='phonefutureLesson railwayMediumDigits'>No Upcoming Lessons</p>
        </div>
      </div>
    </div>
    )
  }
}