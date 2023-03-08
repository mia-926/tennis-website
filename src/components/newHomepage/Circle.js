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
    console.log(scrollPosition)
    console.log(imageHeight)
    return (
        <div >
            <svg style = {{position: 'absolute'}} height = {imageHeight} width = {imageWidth} >

            <ellipse 
            cx={imageWidth/2} 
            cy={imageHeight*1.4-scrollPosition}
            rx = {imageWidth/1.2}
            ry={imageHeight/1.3} 
            fill = "white"
             stroke="#D3D3D3" 
             opacity={1}
             stroke-width="40"/>
            </svg>
            
        </div>
    );
}
// <ellipse cx={imageWidth/2} cy={imageHeight*1.4}rx = {imageWidth} ry={imageHeight/1.5} fill = "white"/>