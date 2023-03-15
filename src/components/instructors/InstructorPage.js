import React, { useState, useEffect } from 'react';
import { Footer } from '../Footer';
import { InstructorCircles } from './InstructorCircles';
import { Instructors } from './Instructors';


export const InstructorPage = (props) =>
{
    return (
        <div >
             <InstructorCircles/>
            <Instructors/>
   
        </div>
    );
}