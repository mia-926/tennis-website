import React, { useState, useEffect } from 'react';



export const InstructorCircles = (props) =>
{
    const firstResize = () => {
        if(window.innerWidth < 1370){
            return(300)
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

    
    return (
        <div >
            <svg style = {{position: 'absolute', height:window.innerHeight, width:600, left:window.innerWidth-600+position}} >
            <circle cx="630" cy="100" r = "380" fill = "#233831"/>
            
            <circle cx="690" cy="430" r = "320" fill = "#294539"/>
            
           
            
           </svg>
            
        </div>
    );
}