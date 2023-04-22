import React, {useState, useEffect} from 'react';
import { CMyCalendar } from './CMyCalendar';

export const CApiTester = (props) => {
    const [time, setTime] = useState([]);
    const [location, setLocation] = useState([]);
    const [address, setAddress] = useState([]);
    const [coordinates, setCoordinates] = useState([]);
    const [kids, setKids] = useState([]);
    const [max, setMax] = useState([])
    const [instructor, setInstructor] = useState([]);
    const [dateList, setDateList] = useState([]);
    const [lessonIds, setLessonIds] = useState([]);
    const {menu, lessons} = props;

    useEffect(() => {
        const newTime = [];
        const newLocation = [];
        const newAddress = [];
        const newCoordinates = [];
        const newKids = [];
        const newMax = [];
        const newInstructor = [];
        const newDateList = [];
        const newLessonIds = [];

        for(let i = 0; i < lessons.length; i++){
            newTime.push(lessons[i].time);
            let date, month, year;

            date = (lessons[i].date).substring(8, 10);
            month = (lessons[i].date).substring(5, 7); 
            year = (lessons[i].date).substring(0, 4);
           

            newDateList.push(month + '/' + date + '/' +year);
            newInstructor.push(lessons[i].instructors);
            newKids.push(lessons[i].studentsNames);
            newMax.push(lessons[i].maxStudents);
            newLocation.push(lessons[i].location);
            newAddress.push(lessons[i].address);
            newCoordinates.push(lessons[i].coordinates);
            newLessonIds.push(lessons[i]._id);
        }

        setTime(newTime);
        setLocation(newLocation);
        setAddress(newAddress);
        setCoordinates(newCoordinates);
        setKids(newKids);
        setMax(newMax);
        setInstructor(newInstructor);
        setDateList(newDateList);
        setLessonIds(newLessonIds);
    }, [lessons])

 console.log(time)
    return (
        <div>
            <CMyCalendar
                lessonId={lessonIds}
                location={location}
                address={address}
                coordinates={coordinates}
                max={max}
                students={kids}
                instructor={instructor}
                dateList={dateList}
                times={time}
            />
        </div>
    );
}
