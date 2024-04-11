import React, { useEffect, useRef, useState} from 'react';
import "../phoneaccountcss/phoneHistory.css"
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "../../newHomepage/newHomepage.css";

export const PhoneHistory = () => {
  const {setAuth} = useAuth();
  const {auth} = useAuth();
  const [allPastLessons, setAllPastLessons] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);


  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  useEffect(() => {
    axios.get("https://tennis-backend-c6oszgtd6a-uw.a.run.app/api/pastLessonsByStudentID?studentID="+ String(auth._id))
    .then((response) => {
        let tempAllLessons = response.data;
        let tempPastLessons = []
        for(let i =0; i<tempAllLessons.length; i++){
          let date = (tempAllLessons[i].date).substring(8, 10);
          let month = (tempAllLessons[i].date).substring(5, 7); 
          let year = (tempAllLessons[i].date).substring(2, 4);
          tempPastLessons.push(String(month + '/' + date + '/' +year+" - "+ tempAllLessons[i].time+" "+tempAllLessons[i].location))
        }
        setAllPastLessons(tempPastLessons)
    })
    .catch(error => console.error(`Error: $(error)`))
  }, [auth._id]);
  if(allPastLessons.length >0){
    return (
      <div className="phoneaccountFullHistory">
        <div style={{ display: 'flex', alignItems: 'center' }}> 
          <div className='arrow' onClick={toggleExpand} style={{marginLeft: 10,  width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderRight: isExpanded ? '10px solid #294539' : '10px solid #294539', transform: isExpanded ? 'rotate(180deg)' : 'rotate(270deg)' }} />
          <h4 className="phoneaccountHistoryTitle railwaySemiBold">LESSON HISTORY</h4>
        </div>
        <div style={{ display: isExpanded ? 'block' : 'none' }}>
          <div className="phoneaccountHistoryList" style={{ height: 220, overflow: "auto" }}>
            {allPastLessons.map((lesson, index) => (
              <div key={index}>
                <p className='pastLesson railwayMediumDigits' style = {{fontSize: "90%"}}>{lesson}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
    )
  }
  else{
    return (
      <div className="phoneaccountFullHistory">
        <div style={{ display: 'flex', alignItems: 'center' }}> 
          <div className='arrow' onClick={toggleExpand} style={{marginLeft: 10, width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderRight: isExpanded ? '10px solid #294539' : '10px solid #294539', transform: isExpanded ? 'rotate(180deg)' : 'rotate(270deg)' }} />
          <h4 className="phoneaccountHistoryTitle railwaySemiBold">LESSON HISTORY</h4>
        </div>
        <div style={{ display: isExpanded ? 'block' : 'none' }}>
          <div className="phoneaccountHistoryList" style={{ height: 220, overflow: "auto" }}>
                <p className='phonepastLesson railwayMediumDigits'>No Past Lessons</p>
          </div>
        </div>
    </div>
    )
  }
}