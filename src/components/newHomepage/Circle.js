import React, { useState, useEffect } from 'react';


export const Circle = (props) =>
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
            <svg style = {{position: 'absolute'}} height = {imageHeight} width = {imageWidth} >

            <ellipse cx={imageWidth/2} cy={imageHeight*1.45}rx = {imageWidth} ry={imageHeight/1.3} fill = "white"/>
            </svg>
            
        </div>
    );
}
// <ellipse cx={imageWidth/2} cy={imageHeight*1.4}rx = {imageWidth} ry={imageHeight/1.5} fill = "white"/>