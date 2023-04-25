import React, { useState, useEffect } from 'react';
import { Testimonials } from './testimonials/Testimonial';



export const HomeTitle = () => {


    return(
        <div className="titleContainer" style={{top: window.innerHeight/2.9, width: window.innerWidth, position:"absolute", color: "white"}}>
            <h2 className="railway homeTitle">WESTLAKE TENNIS<br></br> ACADEMY</h2>
            <div style={{margin:30}}>
                <p className="unna homeSubtitleComputer">INSPIRING THE NEXT GENERATION OF VARSITY TENNIS</p>
            </div>
        </div>
    );
}