import React, { useState, useEffect } from 'react';
import lesson from '../../images/EthanLesson.png';
import serve from '../../images/ethanServe.png';

export const CircleImage = () => {
    const firstResize = () => {
        if(window.innerWidth < 1370){
            return(100)
        }
        else{
            return(0)
        }
       
    }
    
    const[position, setPosition] = useState(()=>firstResize());


    useEffect(() =>{
        const handleResize = () => {
            setPosition(firstResize())
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return(
        <div style={{padding:0}}>
                      
            <div>
            <img style={{ top:-200, left:window.innerWidth-490+position, position:"absolute", borderRadius:'50%', height:550, width:550}}src = {serve}></img>
            </div>

            <div>
            <img style={{top: 200, left:window.innerWidth-350+position,position: "absolute", borderRadius:'50%', height:450, width:450}}src = {lesson}></img>
            </div>

        </div>
    );
}
