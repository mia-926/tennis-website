import React, {useState, useEffect} from 'react';
import { MyCalendar } from './MyCalendar';

export const ApiTester = (props) => {
    const[time, getTime] = useState([]);
    const[location, getLocation] = useState([]);
    const[address, getAddress] = useState([]);
    const[coordinates, getCoordinates] = useState([]);
    const[kids, getKids] = useState([]);
    const[max, getMax] = useState([])
    const[instructor, getInstructor] = useState([]);
    const[dateList, setDateList] = useState([]);
    const[lessonIds, setLessonId] = useState([]);
    const {menu, lessons} = props;



   // console.log(currentLesson);

useEffect(() => {
        if(lessons.length > 0){
            for(let i = 0; i < lessons.length && dateList.length < lessons.length; i++){
                time.push(lessons[i].time)
                let date, month, year;

                date = (lessons[i].date).substring(8, 10);
                month = (lessons[i].date).substring(5, 7); 
                year = (lessons[i].date).substring(0, 4);

                

                dateList.push(month + '/' + date + '/' +year);
                instructor.push(lessons[i].instructors);
                kids.push(lessons[i].studentsNames);
                max.push(lessons[i].maxStudents);
                location.push(lessons[i].location);
                address.push(lessons[i].address);
                coordinates.push(lessons[i].coordinates);
                lessonIds.push(lessons[i]._id);

            }
            console.log(lessons)
        }
        
        
}, [lessons])

    return(
        <div>
        <MyCalendar lessonId = {lessonIds} location = {location} address = {address} coordinates = {coordinates} max = {max} students = {kids} instructor = {instructor} dateList = {dateList} times = {time}/>
        </div>
    )

    }



    // if(lessons.length > 0){
    //     return (
    //         lessons.map((lesson, index) => {
    //             console.log(lesson);
    //             return (
    //                 <div key ={lesson.id}>
    //                     <h3>{lesson.date}</h3>
    //                     <p>{lesson.studentsNames[0]}</p>
    //                 </div>

    //                 )
    //         })
    //     )}else{
    //         return (<h3>No Lessons</h3>)
    //     }
    // return(
    //     <p>{currentLesson}</p>
    // )