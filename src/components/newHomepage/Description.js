import React, { useState, useEffect } from 'react';
import { Testimonials } from './testimonials/Testimonial';
import "./newHomepage.css"


export const Description = () => {

    const firstResize = () => {
        if(window.innerHeight < 676){
            return(-130);
        }else
            if(window.innerHeight < 750){
                return(-90);
        }
        else if(window.innerHeight < 800){
            return(-50)
        }
        else if(window.innerHeight <900){
            return(30);
        } else if(window.innerHeight <950){
            return(50);}
        else{
            return(190)
        }
       
    }
    
    const[position, setPosition] = useState(()=>firstResize());


    useEffect(() =>{
        const handleResize = () => {
            setPosition(firstResize())
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return(
        <div className="railway descriptionContainer" style={{position: 'absolute',top: 580+position, width: window.innerWidth, color: "black", zIndex:1000}}>
            <p>We provide free, quality group tennis lessons taught by <br></br>Westlake High School’s varsity tennis in Westlake Village, CA.</p>
            <div style={{flexDirection: 'row', paddingTop: 10, paddingBottom:50}}>
                <a style = {{marginRight: 10, width: 150, paddingTop: 3, paddingBottom: 3, zIndex: 15}}className="greenb btn btn-primary railway" href="/join-lesson" role="button">Join <br></br>a Lesson</a>
                <a style = {{borderRadius: 10,borderWidth:'medium',borderColor: '#294539',color: '#294539',zIndex: 15,backgroundColor: 'e9e9e9',marginLeft: 10, width: 150, paddingTop: 15, paddingBottom: 15}} className="learnButton btn btn-outline-primary railway" href="/learn-more" role="button">Learn More</a>
            </div>
        </div>
    );
}