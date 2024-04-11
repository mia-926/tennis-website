import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ApiTester } from './ApiTester';
import useReload from '../hooks/useReload';

export const ApiCall = () => {
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
        axios.get('https://tennis-backend-c6oszgtd6a-uw.a.run.app/api/allLessons')
        .then((response) => {
            const allLessons = response.data;
            setLessons(allLessons);
        })
        .catch(error => console.error(`Error: $(error)`));
    }
    console.log(lessons)
    return(
        <ApiTester lessons={lessons}/> )
}