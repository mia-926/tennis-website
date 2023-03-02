import React, { useState, useEffect } from 'react';


export const GreenCircles = (props) =>
{
    return (
        <div >
            <svg style = {{position: 'absolute'}} height = {window.innerHeight} width = {window.innerWidth} >
            
            
            <circle cx="1400" cy="100" r = "300" fill = "#233831"/>
            
            <circle cx="1380" cy="500" r = "360" fill = "#294539"/></svg>
            
        </div>
    );
}
