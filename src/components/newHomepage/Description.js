import React, { useState, useEffect } from 'react';
import { Testimonials } from './testimonials/Testimonial';
import "./newHomepage.css"


export const Description = () => {

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

    return(
        <div className="railway descriptionContainer" style={{position: 'absolute',top: 580, width: window.innerWidth, color: "black"}}>
            <p>We provide free, quality group tennis lessons taught by <br></br>Westlake High School’s varsity tennis in Westlake Village, CA.</p>
            <div style={{flexDirection: 'row', paddingTop: 10, paddingBottom:50}}>
                <a style = {{marginRight: 10, width: 150, paddingTop: 3, paddingBottom: 3, zIndex: 15}}className="greenb btn btn-primary railway" href="/join-lesson" role="button">Join <br></br>a Lesson</a>
                <a style = {{borderRadius: 10,borderWidth:'medium',borderColor: '#294539',color: '#294539',zIndex: 15,backgroundColor: 'e9e9e9',marginLeft: 10, width: 150, paddingTop: 15, paddingBottom: 15}} className=" btn btn-outline-primary railway" href="/learn-more" role="button">Learn More</a>
            </div>
        </div>
    );
}