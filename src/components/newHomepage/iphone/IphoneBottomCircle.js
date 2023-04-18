import React, { useState, useEffect } from 'react';
import { Banner } from './IphoneBanner';


export const BottomCircle = (props) =>
{
    const [imageHeight, setimageHeight] = useState(660);
    const [imageWidth, setimageWidth] = useState(390);



    return (
        <div >
  <svg style = {{position: 'absolute', overflow:"visible"}} height = {imageHeight} width = {imageWidth} >
            <ellipse 
            cx={imageWidth/2} 
          
             cy={260}
            rx = {800}
            ry={800} 
            fill = "blue" 
            fill-opacity="0"
             stroke="white" 
             opacity="1"
            stroke-width="100"/>
    
        </svg>
          


        <svg style = {{zIndex:1, position: 'absolute', overflow:"visible"}} height = {imageHeight} width = {imageWidth} >

<ellipse style={{zIndex:2}}
cx={imageWidth/2} 

 cy={320}
rx = {800}
ry={800} 
fill = "red" 
fill-opacity="0"
 stroke="#E3E3E3" 
 opacity="1"
 stroke-width="50"/>
</svg>
        </div>
    );
}