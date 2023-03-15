import React, { useState, useEffect } from 'react';



export const InstructorCircles = (props) =>
{
    
    return (
        <div >
            <svg style = {{position: 'absolute', height:window.innerHeight, width:600, left:window.innerWidth-600}} >
            <circle cx="630" cy="100" r = "380" fill = "#233831"/>
            
            <circle cx="690" cy="430" r = "320" fill = "#294539"/>
            
           
            
           </svg>
            
        </div>
    );
}