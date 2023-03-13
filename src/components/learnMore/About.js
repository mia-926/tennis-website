import React, { useState, useEffect } from 'react';

export const About = () => {

    return(
        <div style={{padding:100}}>
            <div style={{backgroundColor:"#e9e9e9"}}>
            <h1>OUR PROGRAM</h1>
            <p style={{width:window.innerWidth/2.3}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit duis tristique. Fermentum dui faucibus in ornare quam viverra orci sagittis. A scelerisque purus semper eget duis at tellus at urna. </p>
            </div>
            <div style={{backgroundColor:"#e9e9e9"}}>
            <h1>HOW TO SIGN UP</h1>
            <p style={{width:window.innerWidth/1.8}}>Signing up for our classes is very straightforward. Simply click <a style={{textDecoration:'none'}}href = "./join-lesson">Join a Lesson</a>, and select an available lesson day. Enter the participant(s) you wish to enroll and submit. You’re all good to go! A reminder email will be sent the day before your lesson.
                <br></br><br></br>No lesson on a day that’s most convenient for you? No worries! Click on the desired date and you can request for a lesson on that day, along with a message to the instructors if you wish.</p>
            </div>
        </div>
    );
}
