
import { TestimonialCard } from './IphoneTestimonialCard';
import React, { useState, useEffect } from 'react';


export const Testimonials = () => {
const height = window.innerHeight;

    const [imageHeight, setimageHeight] = useState(window.innerHeight);
    const [imageWidth, setimageWidth] = useState(window.innerWidth);


  return (
     
   <div style={{position: 'absolute', top:800, marginBottom: 0, display: 'flex', flexDirection:'row', alignContent:"center", justifyContent:"center", width:window.innerWidth}}>
    <div style={{width:'700px'}}>
        <TestimonialCard/>
  </div>
  </div>
  );
}

