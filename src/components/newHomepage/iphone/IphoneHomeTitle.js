import React, { useState, useEffect } from 'react';
import { Testimonials } from './testimonials/IphoneTestimonial';
import logo from '../../../images/greenlogo.png';


export const HomeTitle = () => {


    return(
        <div className="titleContainer" style={{top: 0, width: window.innerWidth, position:"absolute", background:"white"}}>
                <div className='titleContainer'>
            <img className='logo' src = {logo}></img>
            </div>
            <h2 className="railway phonehomeTitle">WESTLAKE<br></br> TENNIS ACADEMY</h2>
            <div style={{margin:30}}>
                <p className="unna homeSubtitle">INSPIRING THE NEXT GENERATION OF VARSITY TENNIS</p>
            </div>
        </div>
    );
}