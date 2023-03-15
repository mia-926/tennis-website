import React, { useState, useEffect } from 'react';


export const GreenCircles = (props) =>
{
    return (
        <div >
            <svg style = {{position: 'absolute', height:window.innerHeight, width:400, left:window.innerWidth-400}} >
            
            
            <circle cx="475" cy="200" r = "400" fill = "#294539"/>
            
            <circle cx="425" cy="600" r = "400" fill = "#233831"/>
            
           </svg>
            
        </div>
    );
}