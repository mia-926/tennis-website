import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ApiTester } from './ApiTester';
import useReload from '../hooks/useReload';

export const ApiCall = () => {
    const[lessons, getLessons] = useState('');
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
        axios.get('https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/allLessons')
        .then((response) => {
            const allLessons = response.data;
            getLessons(allLessons);
        })
        .catch(error => console.error(`Error: $(error)`));
    }
    return(
        <ApiTester lessons={lessons}/> )
}