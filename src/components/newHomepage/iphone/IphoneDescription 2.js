import React, { useState, useEffect } from 'react';
import { Testimonials } from './testimonials/IphoneTestimonial';
import "./phoneHomepage.css"


export const Description = () => {



    return(
        <div className="railwayBold descriptionContainer" style={{position: 'absolute',top: 450, width: window.innerWidth, fontSize:'10px'}}>
            <div style={{flexDirection: 'row', paddingTop: 10, paddingBottom:50}}>
                <a style = {{marginRight: 10, width: 150, paddingTop: 3, paddingBottom: 3, zIndex: 15}}className="greenb btn btn-primary railway" href="/join-lesson" role="button">Join <br></br>a Lesson</a>
                <a style = {{borderRadius: 10,borderWidth:'medium',borderColor: '#294539',color: '#294539',zIndex: 15,backgroundColor: 'e9e9e9',marginLeft: 10, width: 150, paddingTop: 15, paddingBottom: 15}} className="learnButton btn btn-outline-primary railway" href="/learn-more" role="button">Learn More</a>
            </div>
            <p style={{fontSize:'150%',marginTop:30, color:'#233831'}}>We provide free, quality group tennis<br></br>lessons taught by Westlake High School’s<br></br>varsity tennis in Westlake Village, CA.</p>
            
        </div>
    );
}