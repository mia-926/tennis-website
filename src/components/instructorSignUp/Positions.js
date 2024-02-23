import React, { useState, useEffect } from 'react';
import image from '../../images/instructor.jpeg';
import "./instructor.css";

export const Positions = () =>
{

    return (
        <div className='instructor-flex-col content-style instructor-flex-center'  style={{margin:"100px 25px 10px"}}>
            <div>
                <h1 className='instructor-bold'>AVAILABLE POSITIONS</h1>
            </div>

            <div style={{justifyContent:"space-between", marginTop:50}}className='instructor-flex-row'>
                {/* Junior Instructor */}
                <div>
                <div className='position-box' style={{flex:1}}>
                    <h1 className='instructor-title instructor-bold'>Junior Instructor</h1>

                    <div className='instructor-flex-col' style={{alignContent:"space-between"}}> 
                        <p style={{padding:"60px 20px 70px"}}>Junior Instructors at Westlake Tennis Academy support in delivering tennis lessons to students, requiring strong communication skills and a passion for working with young athletes. While coaching experience or certification is preferred, it's not mandatory.</p>

                        <p style={{paddingBottom:0}}>3 spots left</p>
                    </div>
                </div>
                <button
                        className='application-button'
                        onClick={() => window.location.href = "/instructor-junior-application"}
                        >
                        Application Form
                    </button>
                </div>

                {/* Senior Instructor */}
                <div>
                <div className='position-box' style={{flex:1}}>
                    <h1 className='instructor-title instructor-bold'>Senior Instructor</h1>

                    <div className='instructor-flex-col' style={{alignContent:"space-between"}}> 
                    <p style={{padding:"60px 20px 70px"}}>Senior Instructors lead tennis programs at Westlake Tennis Academy, overseeing coaching sessions, student development, and mentoring junior staff. Extensive coaching experience and relevant certifications are essential for this role. Junior Instructors are able to be promoted to this role.</p>

                    <p>1 spots left</p>
                    </div>
                </div>
                    <button
                        className='application-button'
                        onClick={() => window.location.href = "/instructor-senior-application"}
                        >
                       Application Form
                    </button>
                </div>

                {/* Advertimsement */}
                <div>
                <div className='position-box' style={{flex:1}}>
                    <h1 className='instructor-title instructor-bold'>Advertimsement</h1>
                    <div className='instructor-flex-col' style={{alignContent:"space-between"}}> 
                        <p  style={{padding:"60px 20px 70px"}}>Sponsors provide financial support to WTA, contributing to scholarships, equipment, and facility maintenance. They promote the academy's initiatives and attend events, fostering community partnerships. Various sponsorship levels are available to suit different budgets and preferences.</p>
                        <p>1 spots left</p>
                    </div>
                </div>

                    <button
                        className='application-button'
                        onClick={() => window.location.href = "/instructor-advertisement-application"}
                        >
                        Application Form
                    </button>
                </div>
            </div>
        </div>
    );
}
