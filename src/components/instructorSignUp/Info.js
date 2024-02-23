import React, { useState, useEffect } from 'react';
import image from '../../images/instructor.jpeg';
import "./instructor.css";

export const Info = () =>
{

    return (
        <div className='instructor-flex-col'>
         {/* <img className="background-image" src={image} alt="Instructor"></img> */}
        <div className='image-gradient'>
           <div className='instructor-flex-col content' style={{padding:100}}>
                <div style={{marginTop:20}}>
                    <h1 style={{fontSize:80}} className='instructor-flex-row instructor-flex-center instructor-bold'>Lend a Helping Hand!</h1>
                </div>
                <div style={{marginTop:20}} className='instructor-flex-row instructor-flex-center'>
                <button
                    className='redirect-button'
                    onClick={() => window.location.href = "/instructor-positions"}
                    >
                    Find Available Instructor Positions
                </button>

                </div>
                <div style={{paddingTop:150}} className='instructor-flex-center black-text'>
                    <p>"As an instructor, I've had the privilege of witnessing firsthand the incredible impact our program has on aspiring tennis players. Each lesson, I'm inspired by the dedication and passion of our students as they strive to improve their skills on the court. Being part of this journey, guiding them through challenges, and celebrating their victories has been rewarding. Together, we're not just teaching tennis; we're shaping the future of these young athletes, instilling in them values of resilience, discipline, and sportsmanship that will serve them well beyond the tennis court.</p>
                    <p>Senior Instructor, Ethan Kang</p>
                </div>
            </div>
            <div className="black-text" style={{zIndex: 2, backgroundColor:"#E3E3E3", width: "100%", marginTop:20}}>
                    <ul style={{listStyleType:"none", margin:0, padding:0, display: "flex", flexDirection:"row", justifyContent:"space-around"}}>
                        <li style={{margin:10}}>Contribute to your Community </li>
                        <li style={{margin:10}}>Find Like-Minded People </li>
                        <li style={{margin:10}}>Develop Leadership Skills</li>
                    </ul>
                </div>
        </div>
        </div>
    );
}
