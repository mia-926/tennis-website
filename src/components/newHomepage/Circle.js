import React, { useState, useEffect } from 'react';


export const Circle = (props) =>
{
    const [imageHeight, setimageHeight] = useState(window.innerHeight);
    const [imageWidth, setimageWidth] = useState(window.innerWidth);


    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        function handleScroll() {
        setScrollPosition(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            <svg style = {{position: 'absolute', overflow:"visible"}} height = {imageHeight} width = {imageWidth} >

            <ellipse 
            cx={imageWidth/2} 
            // cy={imageHeight*1.5-scrollPosition}
             cy={imageHeight*1.45}
            rx = {imageWidth}
            ry={imageHeight/1.3} 
            fill = "#D3D3D3" 
            fill-opacity="0"
             stroke="white" 
             opacity={1}
             stroke-width="40"/>

            <ellipse 
            style={{overflow:'visible'}}
            cx={imageWidth/2} 
            // cy={imageHeight*1.5-scrollPosition+210}
            cy={imageHeight*1.45+115}
            rx = {imageWidth}
            ry={imageHeight/1.3} 
            fill = "red" 
            fill-opacity="0"
            stroke="#e9e9e9" 
            opacity={1}
            stroke-width="210"
            /> 

            <ellipse 
            cx={imageWidth/2} 
            // cy={imageHeight*1.5-scrollPosition+400}
            cy={imageHeight*1.45+230}
            rx = {imageWidth}
            ry={imageHeight/1.3} 
            fill = "white" 
            fill-opacity="0"
            stroke="white" 
            opacity={1}
            stroke-width="40"
   />       
            </svg>
            
        </div>
    );
}
// <ellipse cx={imageWidth/2} cy={imageHeight*1.4}rx = {imageWidth} ry={imageHeight/1.5} fill = "white"/>