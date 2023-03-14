import React, { useState, useEffect } from 'react';


export const LoginGreenCircles = (props) =>
{
    return (
        <div >
            <svg style = {{position: 'absolute', height:window.innerHeight, width:600, left:window.innerWidth-600}} >
            
            
            <circle cx="500" cy="200" r = "400" fill = "#294539"/>
            
            <circle cx="450" cy="600" r = "400" fill = "#233831"/>
            
           </svg>
            
        </div>
    );
}