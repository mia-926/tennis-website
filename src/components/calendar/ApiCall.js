import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ApiTester } from './ApiTester';

export const ApiCall = () => {
    const[lessons, getLessons] = useState('');

    useEffect(() => {
        getAllLessons();
    }, []);

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