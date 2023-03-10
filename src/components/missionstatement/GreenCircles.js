import React, { useState, useEffect } from 'react';


export const GreenCircles = (props) =>
{
    const [imageHeight, setimageHeight] = useState(window.innerHeight);
    const [imageWidth, setimageWidth] = useState(window.innerWidth);

    useEffect(() =>{
        const handleResize = () => {
            setimageWidth(window.innerWidth);
            setimageHeight(window.innerHeight);
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    return (
        <div >
            <svg style = {{position: 'absolute'}} height = {window.innerHeight} width = {window.innerWidth} >
            
            
            <circle cx="1400" cy="100" r = "300" fill = "#233831"/>
            
            <circle cx="1380" cy="500" r = "360" fill = "#294539"/></svg>
            
        </div>
    );
}
