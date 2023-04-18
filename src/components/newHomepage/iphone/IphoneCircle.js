import React, { useState, useEffect } from 'react';


export const Circle = (props) =>
{
    const [imageHeight, setimageHeight] = useState(664);
    const [imageWidth, setimageWidth] = useState(390);





    return (
        <div >

            <svg style = {{position: 'absolute', overflow:"visible"}} height = {imageHeight} width = {imageWidth} >
            <ellipse 
            cx={imageWidth/2} 

             cy={1060}
            rx = {800}
            ry={imageHeight/1.2} 
            fill = "#D3D3D3" 
            fill-opacity="0"
             stroke="white" 
             opacity={1}
             stroke-width="140"/>

            <ellipse 
            style={{overflow:'visible'}}
            cx={imageWidth/2} 
        
            cy={1050+110}
            rx = {800}
            ry={imageHeight/1.3} 
            fill = "red" 
            fill-opacity="0"
            stroke="#e9e9e9" 
            opacity={1}
            stroke-width="210"
            /> 

            <ellipse 
            cx={imageWidth/2} 
          
            cy={1100+180}
            rx = {800}
            ry={imageHeight/1.3} 
            fill = "white" 
            fill-opacity="0"
            stroke="white" 
            opacity={1}
            stroke-width="100"
   />       
            </svg>
            
        </div>
    );
}
// <ellipse cx={imageWidth/2} cy={imageHeight*1.4}rx = {imageWidth} ry={imageHeight/1.5} fill = "white"/>