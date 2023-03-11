import React, { useEffect, useRef, useState} from 'react';
import "../accountcss/upcoming.css"
import useAuth from "../../hooks/useAuth";
import axios from "axios";

export const Upcoming = () => {
  const {setAuth} = useAuth();
  const {auth} = useAuth();
  const [allFutureLessons, setAllFutureLessons] = useState([]);

  useEffect(() => {
    axios.get("https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/futureLessonsByStudentID?studentID="+ String(auth._id))
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
      <div className="accountFullUpcoming">
        <h4 className="accountUpcomingTitle">UPCOMING LESSONS</h4>
          <div className="accountUpcomingList" style={{ height: 220, overflow: "auto" }}>
            {allFutureLessons.map((lesson, index) => (
              <div key={index}>
                <p className='futureLesson'>{lesson}</p>
              </div>
            ))}
        </div>
    </div>
    )
  }
  else{
    return (
      <div className="accountFullUpcoming">
      <h4 className="accountUpcomingTitle">UPCOMING LESSONS</h4>
        <div className="accountUpcomingList" style={{ height: 220, overflow: "auto" }}>
                <p className='futureLesson'>No Upcoming Lessons</p>
        </div>
    </div>
    )
  }
}