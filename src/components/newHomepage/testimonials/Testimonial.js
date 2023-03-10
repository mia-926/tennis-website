import Carousel from 'react-bootstrap/Carousel';
import testimonial from '../../../images/testimonial.png';
import { TestimonialCard } from './TestimonialCard';
import React, { useState, useEffect } from 'react';


export const Testimonials = () => {
const height = window.innerHeight;


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
  return (

    <div style={{position: 'absolute', top:height-scrollPosition*1.5, paddingTop:500, marginBottom: 200, display: 'flex', flexDirection:'row', alignContent:"center", justifyContent:"center", width:window.innerWidth}}>
    <div style={{width:'80%'}}>
        <TestimonialCard/>
  </div>
  </div>
  );
}


        {/* <img
          className="d-block w-100"
          src={headshot}
          alt="First slide"
        /> */}