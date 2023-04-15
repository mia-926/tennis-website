import React, { useState, useEffect } from 'react';
import { Banner } from './Banner';


export const BottomCircle = (props) =>
{
    const [imageHeight, setimageHeight] = useState(window.innerHeight);
    const [imageWidth, setimageWidth] = useState(window.innerWidth);
    const [opacity, setOpacity] = useState(0);
    const [opacity2, setOpacity2] = useState(0);
    const [opacity3, setOpacity3] = useState(0);

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

    const [scrollPosition, setScrollPosition] = useState(0);

useEffect(() => {
    function handleScroll() {
    setScrollPosition(window.scrollY);
    console.log(window.scrollY )
    if(window.scrollY > 500){
        setOpacity(1); 
    }
    else{
        setOpacity(0);
    }
    if(window.scrollY > 650){
        setOpacity2(1); 
    }
    else{
        setOpacity2(0);
    } 
     
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
}, []);


    return (
        <div >
  <svg style = {{position: 'absolute', overflow:"visible"}} height = {imageHeight} width = {imageWidth} >
            <ellipse 
            cx={imageWidth/2} 
            // cy={imageHeight*1.5-scrollPosition}
             cy={imageHeight+220+100}
            rx = {imageWidth}
            ry={imageHeight/1.3} 
            fill = "#e9e9e9" 
            fill-opacity="0"
             stroke="#e9e9e9" 
             opacity={opacity2}
             stroke-width="400"/>
    
        </svg>
             
          


        <svg style = {{zIndex:1, position: 'absolute', overflow:"visible"}} height = {imageHeight} width = {imageWidth} >

<ellipse style={{zIndex:2}}
cx={imageWidth/2} 
// cy={imageHeight*1.5-scrollPosition}
 cy={imageHeight+100}
rx = {imageWidth}
ry={imageHeight/1.3} 
fill = "red" 
fill-opacity="0"
 stroke="white" 
 opacity={opacity}
 stroke-width="100"/>
</svg>
        </div>
    );
}