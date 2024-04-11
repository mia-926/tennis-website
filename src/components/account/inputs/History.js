import React, { useEffect, useRef, useState} from 'react';
import "../accountcss/history.css"
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "../../newHomepage/newHomepage.css";

export const History = () => {
  const {setAuth} = useAuth();
  const {auth} = useAuth();
  const [allPastLessons, setAllPastLessons] = useState([]);

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
      <div className="accountFullHistory">
        <h4 className="accountHistoryTitle railwaySemiBold">LESSON HISTORY</h4>
          <div className="accountHistoryList" style={{ height: 220, overflow: "auto" }}>
            {allPastLessons.map((lesson, index) => (
              <div key={index}>
                <p className='pastLesson railwayMediumDigits'>{lesson}</p>
              </div>
            ))}
        </div>
    </div>
    )
  }
  else{
    return (
      <div className="accountFullHistory">
        <h4 className="accountHistoryTitle railwaySemiBold">LESSON HISTORY</h4>
          <div className="accountHistoryList" style={{ height: 220, overflow: "auto" }}>
                <p className='pastLesson railwayMediumDigits'>No Past Lessons</p>
        </div>
    </div>
    )
  }
}