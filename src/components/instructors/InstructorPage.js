import React, { useState, useEffect } from 'react';
import { Footer } from '../Footer';
import { InstructorCircles } from './InstructorCircles';
import { Instructors } from './Instructors';
import {InstructorsPhonePage} from "./InstructorsPhonePage"
import logo from '../../images/greenlogo.png';

export const InstructorPage = (props) =>
{
    const size = () => {
        if(window.innerWidth < 700){
            return true;
        }
        return false;
    }
    const [iphoneSize, setIphoneSize] = useState(() => size())
    if(iphoneSize){
        return (
            <div style={{height: 600, background: "transparent"}}>
                    <div> 
                        <div className="white-rectangle"></div><div style={{height:100,display:"flex", flexDirection:"row", justifyContent:"center", alignContent:"center"}}><img style={{paddingTop:'20px',position:"absolute" , width:'15%'}}src = {logo}></img></div>
                    </div>:
                <div style={{position:"absolute",top:100, width: "100%"}}>
                    <h2 className='railwayBold' style = {{marginLeft: "7%",fontSize: "300%", color: "#294539"}}> INSTRUCTORS</h2>
                    <InstructorsPhonePage/>
                </div>
            </div>
        );
    }
    else{
        return (
            <div >
                <InstructorCircles/>
                <Instructors/>
            </div>
        );
    }
}