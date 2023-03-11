import React, { useState, useEffect } from 'react';
import { Testimonials } from './testimonials/Testimonial';



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
        <div className="railway descriptionContainer" style={{position: 'absolute',top: 610, width: window.innerWidth, color: "black"}}>
            <p>We provide free, quality group tennis lessons taught by <br></br>Westlake High School’s varsity tennis in Westlake Village, CA.</p>
            <div style={{flexDirection: 'row', paddingTop: 10, paddingBottom:50}}>
                <a style = {{marginRight: 10, width: 150, paddingTop: 8, paddingBottom: 8}}className="greenb btn btn-primary railway" href="join" role="button">Join <br></br>a Lesson</a>
                <a style = {{marginLeft: 10, width: 150, paddingTop: 20, paddingBottom: 20}} className="whiteb btn btn-outline-primary railway" href="learn" role="button">Learn More</a>
            </div>
        </div>
    );
}