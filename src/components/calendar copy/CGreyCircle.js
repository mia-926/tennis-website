import React, { useState, useEffect } from 'react';


export const CGreyCircle = () =>
{
    const[radius, setRadius] = useState("800")

    useEffect(() =>{
            
    const handleResize = () => {
        setRadius("800")
    }

    window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return (
        <div>
            <svg style = {{position: 'absolute', overflow:"visible"}} height = {window.innerHeight} width = {window.innerWidth} >
            
            
            <ellipse cx="1250"
             cy="400" 
             rx = "700" 
             ry ="700"
             fill = "#e9e9e9" 
             stroke="white"
             strokeWidth="50" />
          </svg>
            
        </div>
    );
}
