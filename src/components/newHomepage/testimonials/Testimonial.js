import Carousel from 'react-bootstrap/Carousel';
import testimonial from '../../../images/testimonial.png';
import { TestimonialCard } from './TestimonialCard';
import React, { useState, useEffect } from 'react';


export const Testimonials = () => {
const height = window.innerHeight;

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
     
   <div style={{position: 'absolute', top:height-50, marginBottom: 200, display: 'flex', flexDirection:'row', alignContent:"center", justifyContent:"center", width:window.innerWidth}}>
    <div style={{width:'2000px'}}>
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