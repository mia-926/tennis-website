import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { CApiTester } from './CApiTester';
import useReload from '../hooks/useReload';

export const CApiCall = () => {
    const[lessons, setLessons] = useState('');
    const {reload} = useReload()

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    useEffect(() => {
        console.log("recallings")
        getAllLessons();
        console.log(lessons)
    }, [reload]);

    const getAllLessons = () => {
        axios.get('https://wta-backend-c6oszgtd6a-wl.a.run.app/api/allLessons')
        .then((response) => {
            const allLessons = response.data;
            setLessons(allLessons);
        })
        .catch(error => console.error(`Error: $(error)`));
    }
    console.log(lessons)
    return(
        <CApiTester lessons={lessons}/> )
}