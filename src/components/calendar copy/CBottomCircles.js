import React, { useState, useEffect } from 'react';


export const CBottomCirlces = (props) =>
{
    return (
        <div style={{zIndex: -2000}}>
            <svg style = {{position: 'absolute'}} height = {window.innerHeight} width = {window.innerWidth} >
            
            
            <circle cx="400" cy="1400" r = "800" fill = "#233831"/>
            
            <circle cx="1000" cy="1500" r = "860" fill = "#294539"/></svg>
            
        </div>
    );
}
