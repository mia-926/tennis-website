import React, { useState, useEffect } from 'react';

export const PhoneAbout = () => {

    return(
        <div style={{width: "100%"}}>
            <h1 className='railwaySemiBold' style = {{textAlign: "center", color: "#233831", fontSize: "250%"}}>OUR PROGRAM</h1>
            <div className = "greenBorder" style={{backgroundColor:"#e9e9e9", padding:20, margin:"5%", width:'90%', borderRadius:"20px"}}>
                <p className='railwayMedium' style = {{textAlign: "center", fontSize:"95%"}}>WAC will host free instructional clinics at local tennis courts, including the Westlake High School Tennis Courts, weekly (typically on Fridays). The clinics will last for 1 hour. In the clinic's first 5-10 minutes, instructors will condition members by leading them through different warm-up exercises. After warming up, members will be split up into two groups. The first group will engage in various hitting drills that train their offensive and defensive game. The second group will have an instructor provide tips while members compete with one another in practice matches. The two groups will switch roles throughout the 40-minute duration of this section. The clinic's last 10-15 minutes will end with a group cooldown activity, such as King of the Court or Around the World.</p>
            </div>
            <h1 className='railwaySemiBold' style ={{textAlign: "center", color: "#233831", fontSize: "250%"}}>HOW TO SIGN UP</h1>
                <div className = "greenBorder"style={{backgroundColor:"#e9e9e9", padding:20, margin:"5%", width:'90%', borderRadius:"20px"}}>
                <p className='railwayMedium' style={{textAlign: "center", width:'100%', fontSize:"95%"}}>Signing up for our classes is very straightforward. Simply click <a style={{textDecoration:'none'}}href = "./join-lesson">Join a Lesson</a>, and select an available lesson day. Enter the participant(s) you wish to enroll and submit. You’re all good to go! A reminder email will be sent the day before your lesson.
                    <br></br><br></br>No lesson on a day that’s most convenient for you? No worries! Click on the desired date and you can request for a lesson on that day, along with a message to the instructors if you wish.</p>
                </div>
        </div>
    );
}
